import React, { useState, useEffect } from "react";
import { Row, Col, Button, List, Avatar } from "antd";
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

function OrderList() {
  //function component ต้องตัวใหญ่นำหน้า

  const [data, setData] = useState([]); // ประเภทของค่าเริ่มต้น ต้องตรงกัน

  const [totalPrice, setTotalPrice] = useState(0); // [ ตัวแปร , ฟังชั่นเอาไว้ set ค่าตัวแปร ]

  const getTotal = () => {
    return data.reduce((acc, item) => {
      //reduce ฟังชั่น เอาใว้รวมค่าใน array // acc เป็นตัวแปรเอาไว้รวมค่า
      return acc + item.price * item.quantity; // เอา acc มา + กับ item.price * item.quantity
    }, 0);
  };

  //ไปดึงข้อมูลมากจาก orderData
  useEffect(() => {
    setData(orderData);
    return () => {};
  }, []); // [] รันครั้งแรกครั้งเดียว

  //ทำมาเพื่อคำนวน total price
  useEffect(() => {
    setTotalPrice(getTotal());
    return () => {};
  }, [data]); // [data] ทำงานเมื่อ data เปลี่ยน

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
        <OrderListItem title="Your Amount" data={data} totalPrice={totalPrice} isYour={true} /> {/*จะส่งข้อมูลเข้าไปอีก component ต้องส่งผ่าน props*/}
        <OrderListItem title="Total Amount" data={data} totalPrice={totalPrice} isYour={false} />
      </Row>      
    </div>
  );
}

export default OrderList;
