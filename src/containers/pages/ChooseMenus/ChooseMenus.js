import React from "react";
import { Row, Col, List, Avatar, Button, Divider } from "antd";
import OrderListItem from "../OrderListItem/OrderListItem";

const orderData = [
    {
      name: "salmon",
      quantity: 1,
      price: 100,
    },
    {
      name: "water",
      quantity: 2,
      price: 300,
    },
    {
      name: "Rice",
      quantity: 5,
      price: 500,
    },
    {
      name: "sushi ",
      quantity: 2,
      price: 300,
    },
    {
      name: "sushi ",
      quantity: 2,
      price: 300,
    },
    {
      name: "sushi ",
      quantity: 2,
      price: 300,
    },
    {
      name: "sushi ",
      quantity: 2,
      price: 300,
    },
    {
      name: "sushi ",
      quantity: 2,
      price: 300,
    },
    {
      name: "sushi ",
      quantity: 2,
      price: 300,
    },
    {
      name: "sushi ",
      quantity: 2,
      price: 300,
    },
    {
      name: "sushi ",
      quantity: 2,
      price: 300,
    },
    {
      name: "sushi ",
      quantity: 2,
      price: 300,
    },
    {
      name: "sushi ",
      quantity: 2,
      price: 300,
    },
  ];

function ChooseMenus(props) {
  return (
    <div style={{height: '100vh', width: '100vw'}}>
      <Row
        style={{
          justifyContent: "center",
          alignContent: "center",
          width: "100vw",
          height: "10vh",
        }}
      >
        <Col style={{ color: "#746953",fontSize: "25px" }}>ORDER</Col>
      </Row>
      <Row style={{ justifyContent: "center", width: "100vw", height: "60vh" }}>
        {/* เรียก component จาก orderlistitem มาแสดงและส่ง props */}
        <OrderListItem title="Your Amount" data={orderData} totalPrice={totalPrice} isYour={true} /> {/*จะส่งข้อมูลเข้าไปอีก component ต้องส่งผ่าน props*/}
        
      </Row>   
          
    </div>
  )
}

export default ChooseMenus;