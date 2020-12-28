import React, { useState, useEffect } from 'react'
import { Button, Col, Input, Row, Avatar } from 'antd';
import { connect } from 'react-redux'
import { useHistory } from 'react-router-dom';
import { BASE_BACKEND_URL } from "../../../config/constants";

function CreateListTable({ tableList, userTable, role, socket }) {

    const colImgStyle = { maxHeight: "132px", margin: "50px" }
    const containerColStyle = {
        backgroundColor: "#EFEFEF",
        float: "right",
        height: "15%",
        width: "20%",
        padding: "10px",
        color: "red",
        borderRadius: "10",
        marginTop: "40px",
        fontSize: "16",
        position: "absolute",
        right: "3%",
        top: "0%",
        zIndex: "1",

    }
    const AvatarStyle = { backgroundColor: "#86DBD4" }
    const buttonFinishStyle = {
        backgroundColor: "#86DBD4",
        borderColor: "#86DBD4",
        width: "250px",
        height: "40px",
        fontSize: "25px",
        padding: 0
    }
    // เรียกใช้ state tableList จาก redux โดยใช้ mapStateToProps 
    // connect  CreateListTable กับ redux 

    const [tableCode, setTableCode] = useState('')
    const [users, setUsers] = useState([])

    const history = useHistory()

    const onCancelClick = () => {
        history.push('/table-list')
    }

    useEffect(() => {
        socket.on('joinTable', (res) => {
            const resUsers = res.users

            const newUsers = []
            resUsers.map((user) => {
                const newUser = {
                    profile_url: user.profile_url,
                    username: user.username
                }

                newUsers.push(newUser)
            })

            setUsers(newUsers)
        })
    }, [])

    useEffect(() => {
        if (tableList.length > 0) {
            setTableCode(tableList[tableList.length - 1].code)

            const targetUsers = tableList.filter((table) => table.code === tableCode)
            setUsers(users => targetUsers)
        }
        return () => {

        }
    }, [tableList])

    return (
        <>

            <Row justify="center">

                <Col span={24}>
                    <img style={colImgStyle} src="https://i.imgur.com/4TeZqYS.png" alt="logo" />
                </Col>
            </Row>
            <Row>
                <Col style={containerColStyle}>
                    <Row justify="center">
                        <Col >
                            <h3 style={{ color: 'salmon' }}>Group Code</h3>
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
                        {users.length > 0 ? (users.map((user, idx) => (
                            <div key={idx} style={{ marginRight: 20 }}>
                                <div>
                                    <Avatar size={100} src={`${BASE_BACKEND_URL}/${user.profile_url}`} style={AvatarStyle} />
                                </div>
                                <div>
                                    {user.username}
                                </div>
                            </div>
                        ))) : null}

                    </div>

                </Col>
            </Row>
            <Row justify="center" style={{ marginTop: 50 }}>
                <Col>
                    <Button type="primary" shape="round" onClick={onCancelClick}
                        style={buttonFinishStyle}
                    >Finish</Button>
                </Col>

            </Row>
        </>
    )
}

const mapStateToProps = state => {
    return {
        socket: state.socketReducer.socket,
        tableList: state.tableReducer.tableList,
        userTable: state.userTableReducer.userTable,
        role: state.userReducer.role
    }
}


export default connect(mapStateToProps, null)(CreateListTable)
