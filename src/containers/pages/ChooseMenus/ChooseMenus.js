import React, { useEffect, useState } from "react";
import { Row, Col } from "antd";
import OrderListItem from "../OrderListItem/OrderListItem";
import MenuItem from "../MenuItem/MenuItem";
import ModalOrder from "../ModalOrder/ModalOrder";
import axios from "../../../config/axios"
import { connect } from "react-redux";
import { setMenulist, setTableOrders } from "../../../store/actions";
import { useHistory } from 'react-router-dom'


function ChooseMenus({ menuList, onSetMenuList, onSetTableOrders, socket, userTable }) {
  const [showMenu, setShowMenu] = useState(false);
  const [totalPrice, setTotalPrice] = useState(0); // [ ตัวแปร , ฟังชั่นเอาไว้ set ค่าตัวแปร ]
  const [selectedMenu, setSelectedMenu] = useState(null);
  //const [orderData, setOrderData] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [editItem, setEditItem] = useState(null);

  const history = useHistory()

  const addOrder = (orders) => {
    //setOrderData(order);
    onSetTableOrders({ orders })
  };

  const editOrder = (order, idx) => {
    const newOrderData = [...userTable.orders];
    newOrderData[idx] = order;
    //setOrderData(newOrderData);
    onSetTableOrders(newOrderData)
    setIsEditing(false);
  };

  const removeOrder = (idx) => {
    let newOrderData = [...userTable.orders];
    newOrderData.splice(idx, 1);
    //setOrderData(newOrderData);
    onSetTableOrders(newOrderData)
    setIsEditing(false);
  };

  const getTotal = () => {
    return userTable.orders.reduce((acc, item) => {
      //reduce ฟังชั่น เอาใว้รวมค่าใน array // acc เป็นตัวแปรเอาไว้รวมค่า
      return acc + item.price * item.quantity; // เอา acc มา + กับ item.price * item.quantity
    }, 0);
  };

  const toggleModal = () => {
    setShowMenu(!showMenu);
  };

  const confirmOrder = () => {
    socket.emit('confirmOrder', { tableCode: userTable.tableCode })
  }

  useEffect(() => {
    setTotalPrice(getTotal());
    return () => { };
  }, [userTable.orders]); // [data] ทำงานเมื่อ data เปลี่ยน

  useEffect(() => {
    axios.get('/menus')
      .then(res => {
        onSetMenuList(res.data.allMenu)
      })

    socket.on('newOrder', (res) => {
      addOrder(res.orders)
    })

    socket.on('confirmOrder', (res) => {
      history.push('/orderlist')
    })
  }, [])

  return (
    <div style={{ height: "100vh", width: "100vw" }}>
      {showMenu ? (
        <ModalOrder
          removeOrder={removeOrder}
          isEditing={isEditing}
          editItem={editItem}
          editOrder={editOrder}
          selectedMenu={
            isEditing ? userTable.orders[editItem] : menuList[selectedMenu]
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
          data={userTable.orders}
          totalPrice={totalPrice}
          isYour={false}
          showButton={true}
          toggleModal={toggleModal}
          finishButton="Confirm Order"
          onFinishClick={confirmOrder}
        />
        {/*จะส่งข้อมูลเข้าไปอีก component ต้องส่งผ่าน props*/}
        <MenuItem
          mockupMenu={menuList}
          setSelectedMenu={setSelectedMenu}
          toggleModal={toggleModal}
        />
      </Row>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    menuList: state.menuListReducer.menuList,
    userTable: state.userTableReducer.userTable,
    socket: state.socketReducer.socket
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onSetMenuList: (value) => dispatch(setMenulist(value)),
    onSetTableOrders: (value) => dispatch(setTableOrders(value))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ChooseMenus);