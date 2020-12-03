import React from 'react'
import { Button, Col, Form, Input, notification, Row, } from "antd";
import 'antd/dist/antd.css';
import { useHistory, withRouter } from 'react-router-dom';

function ConfirmOTP() {
    const history = useHistory();

    return (
        <>
            <Row justify="center" style={{ marginTop: 0, marginBottom: 20 }} >
                <Col xs={20} md={14} lg={9}>
                    <img style={{ maxHeight: "132px", margin: "50px" }} src="https://i.imgur.com/4TeZqYS.png" alt="logo" />
                </Col>
            </Row>

            <Row justify="center" style={{ marginBottom: 20 }} >
                <Col>
                    <h1 style={{ color: "#746953", fontStyle: "italic" }}>Your email has been confirmed!</h1>
                </Col>
            </Row>

            <Row justify="center">
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
                        onClick={() => history.push("/login")}
                    >Done</Button>
                </Col>
            </Row>
        </>
    )
}

export default withRouter(ConfirmOTP);