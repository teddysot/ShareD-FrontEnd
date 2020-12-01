import React, { useEffect, useState } from "react";
import { Row, Col } from "antd";
import OrderListItem from "../OrderListItem/OrderListItem";
import MenuItem from "../MenuItem/MenuItem";
import ModalOrder from "../ModalOrder/ModalOrder";

// const orderData = [
//   {
//     name: "salmon",
//     quantity: 1,
//     price: 100,
//   },
//   {
//     name: "water",
//     quantity: 2,
//     price: 300,
//   },
//   {
//     name: "Rice",
//     quantity: 5,
//     price: 500,
//   },
//   {
//     name: "sushi ",
//     quantity: 2,
//     price: 300,
//   },
//   {
//     name: "sushi ",
//     quantity: 2,
//     price: 300,
//   },
//   {
//     name: "sushi ",
//     quantity: 2,
//     price: 300,
//   },
//   {
//     name: "sushi ",
//     quantity: 2,
//     price: 300,
//   },
//   {
//     name: "sushi ",
//     quantity: 2,
//     price: 300,
//   },
//   {
//     name: "sushi ",
//     quantity: 2,
//     price: 300,
//   },
//   {
//     name: "sushi ",
//     quantity: 2,
//     price: 300,
//   },
//   {
//     name: "sushi ",
//     quantity: 2,
//     price: 300,
//   },
//   {
//     name: "sushi ",
//     quantity: 2,
//     price: 300,
//   },
//   {
//     name: "sushi ",
//     quantity: 2,
//     price: 300,
//   },
// ];

const mockupMenu = [
  {
    name: "Salmon",
    price: 100,
    image_url:
      "https://wowsushi.co.nz/wp-content/uploads/2020/04/Nigiri-Salmon-1.jpg",
  },
  {
    name: "water",
    price: 200,
    image_url:
      "https://cdn.happyfresh.com/spree/images/attachments/7020c17f7e08de302f5877c9d2d7304aaf17448f-large.jpg",
  },
  {
    name: "Salmon",
    price: 100,
    image_url:
      "https://wowsushi.co.nz/wp-content/uploads/2020/04/Nigiri-Salmon-1.jpg",
  },
  {
    name: "Salmon",
    price: 100,
    image_url:
      "https://wowsushi.co.nz/wp-content/uploads/2020/04/Nigiri-Salmon-1.jpg",
  },
];

function ChooseMenus(props) {
  const [showMenu, setShowMenu] = useState(false);
  const [totalPrice, setTotalPrice] = useState(0); // [ ตัวแปร , ฟังชั่นเอาไว้ set ค่าตัวแปร ]
  const [selectedMenu, setSelectedMenu] = useState(null);
  const [orderData, setOrderData] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [editItem, setEditItem] = useState(null);

  const addOrder = (order) => {
    const newOrderData = [...orderData];
    newOrderData.push(order);
    setOrderData(newOrderData);
  };

  const editOrder = (order, idx) => {
    const newOrderData = [...orderData];
    newOrderData[idx] = order;
    setOrderData(newOrderData);
    setIsEditing(false);
  };

  const getTotal = () => {
    return orderData.reduce((acc, item) => {
      //reduce ฟังชั่น เอาใว้รวมค่าใน array // acc เป็นตัวแปรเอาไว้รวมค่า
      return acc + item.price * item.quantity; // เอา acc มา + กับ item.price * item.quantity
    }, 0);
  };

  const toggleModal = () => {
    setShowMenu(!showMenu);
  };

  useEffect(() => {
    setTotalPrice(getTotal());
    return () => {};
  }, [orderData]); // [data] ทำงานเมื่อ data เปลี่ยน

  return (
    <div style={{ height: "100vh", width: "100vw" }}>
      {showMenu ? (
        <ModalOrder
          isEditing={isEditing}
          editItem={editItem}
          editOrder={editOrder}
          selectedMenu={
            isEditing ? orderData[editItem] : mockupMenu[selectedMenu]
          }
          showMenu={showMenu}
          toggleModal={toggleModal}
          addOrder={addOrder}
        />
      ) : null}
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
          setEditItem={setEditItem}
          setIsEditing={setIsEditing}
          title="Your Amount"
          data={orderData}
          totalPrice={totalPrice}
          isYour={true}
          toggleModal={toggleModal}
          finishButton="Confirm Order"
        />
        {/*จะส่งข้อมูลเข้าไปอีก component ต้องส่งผ่าน props*/}
        <MenuItem
          mockupMenu={mockupMenu}
          setSelectedMenu={setSelectedMenu}
          toggleModal={toggleModal}
        />
      </Row>
    </div>
  );
}

export default ChooseMenus;
