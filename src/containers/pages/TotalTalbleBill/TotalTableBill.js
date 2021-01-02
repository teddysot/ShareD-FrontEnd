import './TotalTableBill.css';
import React, { useEffect } from 'react'
import { Button, Col, Row } from "antd";
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux'
import OrderListItem from '../OrderListItem/OrderListItem';
import { setTableCode, setTableNumber, setTableOrders, setTableUsers } from '../../../store/actions';

function TotalTableBill({ userTable, socket, onSetTableOrders, onSetTableUsers, onSetTableNumber }) {
    const buttonBackStyle = {
        backgroundColor: "#86DBD4",
        borderColor: "#86DBD4",
        width: "300px",
        height: "50px",
        fontSize: "25px",
        padding: 0,
        marginRight: 80,
        marginBottom: 5,

    }

    const buttonNextStyle = {

        backgroundColor: "#ffffff",
        borderColor: "#86DBD4",
        color: "#86DBD4",
        width: "300px",
        height: "50px",
        fontSize: "25px",
        justifyContent: "right",
        marginRight: 70,
        marginLeft: 50,
        padding: 0
    }
    const history = useHistory()

    const back = () => {
        socket.emit('leaveRoom', { tableCode: userTable.tableCode })
        history.push('/table-list')
    }

    const getTotal = () => {
        return userTable.orders.reduce((acc, item) => {
            //reduce ฟังชั่น เอาใว้รวมค่าใน array // acc เป็นตัวแปรเอาไว้รวมค่า
            return acc + item.price * item.quantity; // เอา acc มา + กับ item.price * item.quantity
        }, 0);
    };

    const addOrder = (orders, tableCode, users, tableNumber) => {
        onSetTableOrders({ orders })
        onSetTableUsers({ tableCode, users })
        onSetTableNumber({ tableNumber })
    };

    useEffect(() => {
        socket.on('newOrder', (res) => {
            addOrder(res.orders, res.tableCode, res.users, res.tableNumber)
        })
        return () => {

        }
    }, [])


    return (

        <>
            <div className="divTableStyle">
                TABLE<br /> {userTable.tableNumber}
            </div>

            <div className="containerDivStyle">
                <OrderListItem title="Total Amount" data={userTable.orders} totalPrice={getTotal()} isYour={false} showbutton={false} />
            </div>
            <Row justify="center" style={{ marginTop: "20px" }}>
                <Col>
                    <Button type="primary" shape="round" onClick={back}
                        style={buttonBackStyle}
                    >Back</Button>,

                    <Button type="primary" shape="round"
                        style={buttonNextStyle}
                    >Next</Button>
                </Col>
            </Row>

        </>
    )
}

const mapStateToProps = state => {
    return {
        socket: state.socketReducer.socket,
        userTable: state.userTableReducer.userTable
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onSetTableOrders: (value) => dispatch(setTableOrders(value)),
        onSetTableUsers: (value) => dispatch(setTableUsers(value)),
        onSetTableNumber: (value) => dispatch(setTableNumber(value))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(TotalTableBill)
