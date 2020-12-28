import React from 'react'
import { Button, Col, Form, Input, notification, Row, } from "antd";
import 'antd/dist/antd.css';
import { connect } from 'react-redux';

function InputCode({ socket }) {
    const { Search } = Input;

    const onSubmit = ({ inputCode }) => {
        socket.on('joinTable', (res) => {
            const { users } = res
            
        })
        // .emit ส่ง tableCode กลับไปหาไปฝั่ง back
        socket.emit('joinTable', { tableCode: inputCode })
    }

    return (
        <>
            <Row justify="center" style={{ marginTop: 0, marginBottom: 0 }} >
                <Col xs={20} md={14} lg={9}>
                    <img style={{ maxHeight: "132px", margin: "50px" }}
                        src="https://i.imgur.com/4TeZqYS.png" alt="logo" />
                </Col>
            </Row>

            <Row justify="center" style={{ marginBottom: 0 }} >
                <Col>
                    <Form
                        name="formInput"
                        onFinish={onSubmit}
                    >
                        <div>
                            <h1 style={{ color: "#746953" }}>Enter Your Table Code</h1>
                        </div>
                        <Form.Item justify="center"
                            name="inputCode"
                            rules={[{ required: true, message: 'Please Input Your Table Code!' }]}
                        >
                            <Input placeholder="--- ---"
                                style={{
                                    fontSize: "20px",
                                    fontStyle: "italic",
                                    textAlign: "center"
                                }} />
                        </Form.Item>
                        <Form.Item style={{ marginTop: 50 }}>
                            <Button type="primary" htmlType="submit" shape="round"
                                style={{
                                    backgroundColor: "#86DBD4",
                                    borderColor: "#86DBD4",
                                    width: "250px",
                                    height: "40px",
                                    fontSize: "25px",
                                    padding: 0
                                }}
                            >Submit</Button>
                        </Form.Item>
                    </Form>
                </Col>
            </Row>

            <Row justify="center">
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
                >Logout</Button>
            </Row>
        </>
    )
}

// ประตูโดเรม่อน เพื่อเรียก socket มาใช้
const mapStateToProps = state => {
    return {
        socket: state.socketReducer.socket,
    }
}

export default connect(mapStateToProps, null)(InputCode);
