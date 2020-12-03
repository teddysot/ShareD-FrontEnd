import './OTPVerify.css'
import React, { useState } from "react";
import { Button, Col, Form, Input, notification, Row, } from "antd";
import 'antd/dist/antd.css';
import { Link, useHistory, useLocation, withRouter } from "react-router-dom";
import axios from "../../../config/axios";

let targetEmail;

function OTPVerify() {
  const InputStyle = {
    fontSize: "20px",
    fontStyle: "italic",
    textAlign: "center"
  }
  const ConfirmButton = {
    backgroundColor: "#86DBD4",
    borderColor: "#86DBD4",
    width: "250px",
    height: "40px",
    fontSize: "25px",
    padding: 0
  }
  const CancelButton = {
    color: "#86DBD4",
    backgroundColor: "#ffffff",
    borderColor: "#86DBD4",
    width: "250px",
    height: "40px",
    fontSize: "25px",
    padding: 0
  }

  const [otp, setOTP] = useState("");
  const [allowResend, setAllowResend] = useState(true);
  const history = useHistory();
  const location = useLocation();

  if (!targetEmail) {
    targetEmail = location?.state?.email;
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
      <Row className="RowOTPConfirm" justify="center">
        <Col className="ColOTPConfirm">OTP Confirmation</Col>
      </Row>
      <Row className="RowConfirm" justify="center">
        <Col>
          <Input placeholder="Confirm Your OTP"
            style={InputStyle}
            onChange={(e) => setOTP(e.target.value)}
            maxLength={6}
          />
        </Col>
      </Row>
      <Row className="RowResend" justify="center">
        <Col className="ColResend1">Didn’t received? Click
        {<Link className="Link"
            onClick={resendOTP}
          > here</Link>} to resend
        </Col>
      </Row>
      <Row className="RowButton" justify="center">
        <Col>
          <Button
            type="primary"
            shape="round"
            style={ConfirmButton}
            onClick={onSubmit}
          >Confirm</Button>
        </Col>
      </Row>
      <Row justify="center" style={{ marginBottom: 20 }} >
        <Col>
          <Button type="primary" shape="round"
            style={CancelButton}
            onClick={() => history.push("/")}
          >Cancel</Button>
        </Col>
      </Row>
    </>
  )

}

export default withRouter(OTPVerify);