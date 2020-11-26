import React, { useState } from "react";
import { Button, Col, Form, Input, notification, Row, } from "antd";
import 'antd/dist/antd.css';
import { Link, useHistory, useLocation, withRouter } from "react-router-dom";
import axios from "../../../config/axios";

let targetEmail;

function OTPVerify() {
  const [otp, setOTP] = useState("");
  const [allowResend, setAllowResend] = useState(true);
  const history = useHistory();
  const location = useLocation();

  if (!targetEmail) {
    targetEmail = location.state.email;
  }

  const onSubmit = () => {
    axios.get(`/user/verify?otp=${otp}&email=${targetEmail}`)
      .then(res => {
        notification.success({
          description: "Your email verified"
        })
        history.push("/confirm-otp")
      })
      .catch(err => {
        notification.error({
          description: "Your OTP is not correct."
        })
      })
  }

  const resendOTP = () => {
    if (allowResend) {
      axios.get(`/user/send-email?email=${targetEmail}`)
        .then(res => {
          notification.success({
            description: "Your OTP has been sent."
          })
          setAllowResend(false);
          setTimeout(() => {
            setAllowResend(true);
          }, 60 * 1000)
        })
        .catch(err => {
          notification.error({
            description: "Something went wrong."
          })
        })
    } else {
      notification.error({
        description: `You have to wait 1 minute to resend OTP.`
      })
    }
  }

  return (
    <>
      <Row justify="center" style={{ marginBottom: 0 }} >
        <Col xs={20} md={14} lg={9}>
          <img style={{ maxHeight: "132px", margin: "50px" }} src="https://i.imgur.com/4TeZqYS.png" alt="logo" />
        </Col>
      </Row>

      <Row justify="center" style={{ marginBottom: 20 }} >
        <Col>
          <h1 style={{ color: "#746953" }}>OTP Confirmation</h1>
        </Col>
      </Row>

      <Row justify="center" style={{ marginBottom: 20 }} >
        <Col>
          <Input placeholder="Confirm Your OTP"
            style={{
              fontSize: "20px",
              fontStyle: "italic",
              textAlign: "center"
            }}
            onChange={(e) => setOTP(e.target.value)}
            maxLength={6}
          />
        </Col>
      </Row>

      <Row justify="center" style={{ marginBottom: 20 }} >
        <Col>
          <h2 style={{ color: "#746953" }}>Didn’t received? Click {<Link
            style={{
              fontStyle: "italic",
              color: "#86DBD4"
            }}
            onClick={resendOTP}
          >here</Link>} to resend</h2>
        </Col>
      </Row>

      <Row justify="center" style={{ marginBottom: 20 }} >
        <Col>
          <Button type="primary" shape="round"
            style={{
              backgroundColor: "#86DBD4",
              borderColor: "#86DBD4",
              width: "250px",
              height: "40px",
              fontSize: "25px",
              padding: 0
            }}
            onClick={onSubmit}
          >Confirm</Button>
        </Col>
      </Row>

      <Row justify="center" style={{ marginBottom: 20 }} >
        <Col>
          <Button type="primary" shape="round"
            style={{
              color: "#86DBD4",
              backgroundColor: "#ffffff",
              borderColor: "#86DBD4",
              width: "250px",
              height: "40px",
              fontSize: "25px",
              padding: 0
            }}
            onClick={() => history.push("/")}
          >Cancel</Button>
        </Col>
      </Row>
    </>
  )

}

export default withRouter(OTPVerify);