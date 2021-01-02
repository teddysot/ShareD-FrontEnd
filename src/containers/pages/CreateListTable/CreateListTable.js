import React, { useState, useEffect } from 'react'
import { Button, Col, Input, Row, Avatar } from 'antd';
import { connect } from 'react-redux'
import { useHistory } from 'react-router-dom';
import { BASE_BACKEND_URL } from "../../../config/constants";
import { setTableUsers, updateUsers } from '../../../store/actions';

function CreateListTable({ tableList, socket, role, userTable, onUpdateUsers, onSetTableUsers }) {

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

    const history = useHistory()

    const onFinishClick = () => {
        socket.emit('readyToOrder', { tableCode: userTable.tableCode })
    }

    useEffect(() => {
        if (role === "RESTAURANT") {
            socket.on('joinTable', (res) => {
                onSetTableUsers({ users: res.users, tableCode: res.tableCode })
                onUpdateUsers(res.tableList)
            })
            socket.on('readyToOrder', (res) => {
                history.push('/table-list')
            })
        }
        else {
            socket.on('joinTable', (res) => {
                onSetTableUsers({ users: res.users, tableCode: res.tableCode })
            })
            socket.on('readyToOrder', (res) => {
                history.push('/choose-menus')
            })
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
                            <h3>{userTable.tableCode}</h3>
                        </Col>
                    </Row>


                </Col>
            </Row>




            <Row justify="center" style={{ marginTop: 30 }}>
                <Col>

                    <div style={{ display: 'flex' }}>
                        {userTable.users ? (userTable.users.map((user, idx) => (
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
                    {role === "RESTAURANT" ?
                        <Button type="primary" shape="round" onClick={onFinishClick}
                            style={buttonFinishStyle}
                        >Finish</Button>
                        : null
                    }
                </Col>

            </Row>
        </>
    )
}

const mapStateToProps = state => {
    return {
        socket: state.socketReducer.socket,
        tableList: state.tableReducer.tableList,
        role: state.userReducer.role,
        userTable: state.userTableReducer.userTable
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onUpdateUsers: (value) => dispatch(updateUsers(value)),
        onSetTableUsers: (value) => dispatch(setTableUsers(value))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(CreateListTable)
