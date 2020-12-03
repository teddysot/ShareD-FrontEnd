import '../ConfirmOTP/ConfirmOTP.css';
import React from 'react'
import { Button, Col, Form, Input, notification, Row, } from "antd";
import 'antd/dist/antd.css';
import { useHistory, withRouter } from 'react-router-dom';

function ConfirmOTP() {
    const history = useHistory();

    return (
        <>
            <Row className="RowLogo" justify="center">
                <Col xs={20} md={14} lg={9}>
                    <img style={{ maxHeight: "132px", margin: "50px" }} src="https://i.imgur.com/4TeZqYS.png" alt="logo" />
                </Col>
            </Row>
            <Row className="RowConfirmMessage" justify="center">
                <Col className="ColConfirmMessage">Your email has been confirmed!</Col>
            </Row>
            <Row justify="center">
                <Col>
                    <Button className="DoneButton"
                        type="primary"
                        shape="round"
                        onClick={() => history.push("/")}
                    >Done</Button>
                </Col>
            </Row>
        </>
    )
}

export default withRouter(ConfirmOTP);