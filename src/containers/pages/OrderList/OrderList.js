import React, { useState, useEffect } from "react";
import { Row, Col, Button, List, Avatar } from "antd";
import OrderListItem from "../OrderListItem/OrderListItem";
import axios from "axios";
import { connect } from "react-redux";
import { useHistory } from 'react-router-dom'

function OrderList({ socket, userTable, username }) {
  //function component ต้องตัวใหญ่นำหน้า

  const history = useHistory()

  const [yourOrders, setYourOrders] = useState([])
  const [yourTotalPrice, setYourTotalPrice] = useState(0)

  const [totalPrice, setTotalPrice] = useState(0); // [ ตัวแปร , ฟังชั่นเอาไว้ set ค่าตัวแปร ]

  const getTotalBill = () => {
    console.log("getTotalBill");
    axios.get('/checkout/total-bill/1')
      .then(res => {
        const totalBill = res.data.targetTableMenus
        console.log(totalBill);
        //setData(totalBill)
      })
      .catch(err => {

      })

  }

  const getTotal = () => {
    return userTable.orders.reduce((acc, item) => {
      //reduce ฟังชั่น เอาใว้รวมค่าใน array // acc เป็นตัวแปรเอาไว้รวมค่า
      return acc + item.price * item.quantity; // เอา acc มา + กับ item.price * item.quantity
    }, 0);
  };

  const getYourTotal = () => {
    let orders = [...userTable.orders]

    const newOrders = []
    orders.map((order, idx) => (
      order.users.map((user, idx) => {
        if (user && userTable.users[idx].username === username) {
          newOrders.push(order)
        }
        return user
      })
    ))

    newOrders.map((order, idx) => (
      order.price = order.price / order.users.filter(user => user === true).length
    ))

    setYourOrders(newOrders)

    return newOrders.reduce((acc, item) => {
      //reduce ฟังชั่น เอาใว้รวมค่าใน array // acc เป็นตัวแปรเอาไว้รวมค่า
      return acc + item.price * item.quantity; // เอา acc มา + กับ item.price * item.quantity
    }, 0);
  }

  //ไปดึงข้อมูลมากจาก orderData
  useEffect(() => {
    socket.on('checkout', (res) => {
      history.push('')
    })
    return () => { };
  }, []); // [] รันครั้งแรกครั้งเดียว

  //ทำมาเพื่อคำนวน total price
  useEffect(() => {
    setTotalPrice(getTotal());
    setYourTotalPrice(getYourTotal())
    return () => { };
  }, [userTable.orders]); // [data] ทำงานเมื่อ data เปลี่ยน

  return (
    <div style={{ height: '100vh', width: '100vw' }}>
      <Row
        style={{
          justifyContent: "center",
          alignContent: "center",
          width: "100vw",
          height: "10vh",
        }}
      >
        <Col style={{ color: "#746953", fontSize: "25px" }}>ORDER</Col>
      </Row>
      <Row style={{ justifyContent: "center", width: "100vw", height: "60vh" }}>
        {/* เรียก component จาก orderlistitem มาแสดงและส่ง props */}
        <OrderListItem title="Your Amount" data={yourOrders} totalPrice={yourTotalPrice} isYour={true} finishButton="Checkout" showButton={true} /> {/*จะส่งข้อมูลเข้าไปอีก component ต้องส่งผ่าน props*/}
        <OrderListItem title="Total Amount" data={userTable.orders} totalPrice={totalPrice} isYour={false} showbutton={false} />
      </Row>

    </div>
  );
}

const mapStateToProps = state => {
  return {
    userTable: state.userTableReducer.userTable,
    socket: state.socketReducer.socket,
    username: state.userReducer.username
  }
}

export default connect(mapStateToProps, null)(OrderList);










