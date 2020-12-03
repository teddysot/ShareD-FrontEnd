import '../InputCode/InputCode.css'
import React from 'react'
import { Button, Col, Form, Input, notification, Row, } from "antd";
import 'antd/dist/antd.css';
import { connect } from 'react-redux';

function InputCode({ socket }) {
    const { Search } = Input;

    const onSubmit = ({ inputCode }) => {
        // .emit ส่ง tableCode กลับไปหาไปฝั่ง back
        socket.emit('joinTable', { tableCode: inputCode })
    }

    return (
        <>
            <Row className="RowLogo" justify="center">
                <Col xs={20} md={14} lg={9}>
                    <img style={{ maxHeight: "132px", margin: "50px" }} src="https://i.imgur.com/4TeZqYS.png" alt="logo" />
                </Col>
            </Row>
            <Row justify="center">
                <Col>
                    <Form name="formInput"
                        onFinish={onSubmit}>
                        <div className="DivMessage">Enter Your Table Code</div >
                        <Form.Item justify="center"
                            name="inputCode"
                            rules={
                                [{ required: true, message: 'Please Input Your Table Code!' }]
                            }>
                            <Input className="InputCode" placeholder="--- ---" />
                        </Form.Item >
                        <Form.Item className="Button">
                            <Button className="SubmitButton"
                                type="primary"
                                htmlType="submit"
                                shape="round"
                            >Submit</Button>
                        </Form.Item>
                    </Form>
                </Col>
            </Row>

            <Row justify="center">
                <Button className="LogoutButton"
                    type="primary"
                    shape="round"
                >Logout</Button>
            </Row>
        </>
    )
}

// ประตูโดเรม่อน เพื่อเรียก socket มาใช้
const mapStateToProps = state => {
    return {
        socket: state.socket.socket,
    }
}

export default connect(mapStateToProps, null)(InputCode);