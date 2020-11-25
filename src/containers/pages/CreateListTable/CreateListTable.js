import React from 'react'
import { Button, Col, Input, Row, Avatar } from "antd";
import { UserOutlined } from '@ant-design/icons';
import { connect, useStore } from 'react-redux'



function CreateListTable({ tableList }) {
    // เรียกใช้ state tableList จาก redux โดยใช้ mapStateToProps 
    // connect  CreateListTable กับ redux 
    const tableCode = tableList[tableList.length - 1].code
    //const users = tableList[tableList.length - 1].users
    const users = [
        {
            username: 'pup',
            profile_url: ''
        },
        {
            username: 'cake',
            profile_url: ''
        },
    ]
    console.log(tableList)
    return (
        <>

            <Row>
                <Col span={4} offset={4}>

                </Col>
                <Col span={2} offset={2}>
                    <img style={{ maxHeight: "132px", margin: "50px" }} src="https://i.imgur.com/4TeZqYS.png" alt="logo" />
                </Col>
                <Col span={5} offset={5} style={{
                    backgroundColor: "#EFEFEF",
                    float: "right",
                    height: "30%",
                    width: "30%",
                    padding: 10,
                    color: "red",
                    borderRadius: 10,
                    marginTop: 40,
                    fontSize: 16

                }}>
                    <Row justify="center">
                        <Col>
                            Group Code
                        </Col>
                    </Row>
                    <Row justify="center">
                        <Col>
                            <h3>{tableCode}</h3>
                        </Col>
                    </Row>


                </Col>
            </Row>
            <Row justify="center">
                <Col>
                    <Input placeholder="Enter Table" />
                </Col>
            </Row>

            

            <Row justify="center" style={{ marginTop: 30 }}>
                <Col>
                    {/* <Row>
                        <Col>
                            <Avatar size={100} style={{ backgroundColor: "#86DBD4" }} icon={<UserOutlined />} />
                        </Col>
                    </Row>
                    <Row justify="center" style={{ marginTop: 5 }}>
                        <Col>
                            <h2 style={{ color: "#746953" }}>A</h2>
                        </Col>
                    </Row> */}
                    <div style={{ display: 'flex' }}>
                {users.map((user) => (
                    <div>
                    <div>
                        <UserOutlined />
                    </div>
                    <div>
                        {user.username}
                    </div>
                        </div>
                    
                ))}
            </div>

                </Col>
            </Row>
            <Row justify="center" style={{ marginTop: 50 }}>
                <Col style={{ marginRight: 50 }}>
                    <Button type="primary" shape="round"
                        style={{
                            backgroundColor: "#86DBD4",
                            borderColor: "#86DBD4",
                            width: "250px",
                            height: "40px",
                            fontSize: "25px",
                            padding: 0
                        }}
                    >Cancle</Button>
                </Col>
                <Col style={{ marginLeft: 50 }}>
                    <Button type="primary" shape="round"
                        style={{
                            backgroundColor: "#86DBD4",
                            borderColor: "#86DBD4",
                            width: "250px",
                            height: "40px",
                            fontSize: "25px",
                            padding: 0
                        }}
                    >Next</Button>
                </Col>
            </Row>
        </>
    )
}

const mapStateToProps = state => {
    return {
        tableList: state.tableList.tableList
    }
}


export default connect(mapStateToProps, null)(CreateListTable)
