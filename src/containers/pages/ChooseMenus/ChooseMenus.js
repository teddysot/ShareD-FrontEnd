import React, { useEffect, useState } from "react";
import { Row, Col, Button, Modal } from "antd";
import OrderListItem from "../OrderListItem/OrderListItem";
import MenuItem from "../MenuItem/MenuItem";

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
  const [showMenu, setShowMenu] = useState(false);

  const toggleModal = () => {
    setShowMenu(!showMenu);
  };

  const [data, setData] = useState([]); // ประเภทของค่าเริ่มต้น ต้องตรงกัน

  const [totalPrice, setTotalPrice] = useState(0); // [ ตัวแปร , ฟังชั่นเอาไว้ set ค่าตัวแปร ]

  const getTotal = () => {
    return orderData.reduce((acc, item) => {
      //reduce ฟังชั่น เอาใว้รวมค่าใน array // acc เป็นตัวแปรเอาไว้รวมค่า
      return acc + item.price * item.quantity; // เอา acc มา + กับ item.price * item.quantity
    }, 0);
  };

  useEffect(() => {
    setTotalPrice(getTotal());
    return () => {};
  }, [data]); // [data] ทำงานเมื่อ data เปลี่ยน

  return (
    <div style={{ height: "100vh", width: "100vw" }}>
      <Modal
        title="Basic Modal"
        visible={showMenu}
        footer={null}
        onCancel={toggleModal}
      >
        <img
          style={{ width: "100%", height: "20vh", objectFit: "cover" }}
          alt="example"
          src="https://wowsushi.co.nz/wp-content/uploads/2020/04/Nigiri-Salmon-1.jpg"
        />
        <Button
          onClick={toggleModal}
          type="primary"
          shape="round"
          style={{
            backgroundColor: "#86DBD4",
            borderColor: "#86DBD4",
            width: "150px",
            height: "40px",
            fontSize: "18px",
          }}
        >
          Confirm
        </Button>
        <Button
          onClick={toggleModal}
          type="primary"
          shape="round"
          style={{
            backgroundColor: "#86DBD4",
            borderColor: "#86DBD4",
            width: "150px",
            height: "40px",
            fontSize: "18px",
          }}
        >
          Cancel
        </Button>
      </Modal>
      <Row
        style={{
          justifyContent: "center",
          alignContent: "center",
          width: "100vw",
          height: "10vh",
        }}
      >
        <Col style={{ color: "#746953", fontSize: "25px" }}>Menu</Col>
      </Row>
      <Row style={{ justifyContent: "center", width: "100vw", height: "60vh" }}>
        {/* เรียก component จาก orderlistitem มาแสดงและส่ง props */}
        <OrderListItem
          title="Your Amount"
          data={orderData}
          totalPrice={totalPrice}
          isYour={true}
          toggleModal={toggleModal}
        />
        {/*จะส่งข้อมูลเข้าไปอีก component ต้องส่งผ่าน props*/}
        <MenuItem toggleModal={toggleModal} />
      </Row>
    </div>
  );
}

export default ChooseMenus;
