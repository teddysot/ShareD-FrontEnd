import React, { useState, useEffect } from 'react'
import { Button, Col, Input, Row, Avatar } from 'antd';
import { connect } from 'react-redux'



function CreateListTable({ tableList }) {
    // เรียกใช้ state tableList จาก redux โดยใช้ mapStateToProps 
    // connect  CreateListTable กับ redux 

    const [tableCode, setTableCode] = useState('')

    useEffect(() => {
        if (tableList.length > 0) {
            console.log(tableList);
            setTableCode(tableList[tableList.length - 1].code)
        }
        return () => {

        }
    }, [tableList])
    //const users = tableList[tableList.length - 1].users
    const users = [
        {
            username: 'pup',
            profile_url: 'https://campus.campus-star.com/app/uploads/2019/09/Nadech-Kugimiya-5-1024x1024.jpg'
        },
        {
            username: 'cake',
            profile_url: 'https://f.ptcdn.info/855/065/000/pxg5sj1lg58inlAHK8bz-o.jpg'
        },
    ]
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
           



            <Row justify="center" style={{ marginTop: 30 }}>
                <Col>
                   
                    <div style={{ display: 'flex' }}>
                        {users.map((user, idx) => (
                            <div key={idx} style={{marginRight:20}}>
                                <div>
                                <Avatar size={100} src={user.profile_url} style={{ backgroundColor: "#86DBD4" }}  />
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
