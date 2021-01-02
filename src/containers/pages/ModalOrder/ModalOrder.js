import React, { useState, useEffect } from "react";
import { PlusCircleOutlined, MinusCircleOutlined } from "@ant-design/icons";
import { Row, Col, Button, Modal } from "antd";
import { connect } from "react-redux";
import {BASE_BACKEND_URL} from '../../../config/constants'

function ModalOrder(props) {
  const {
    removeOrder,
    toggleModal,
    showMenu,
    selectedMenu,
    isEditing,
    editItem,
    editOrder,
    socket,
    userTable
  } = props;
  const [orderQuantity, setOrderQuantity] = useState(1);
  const [showConfirm, setShowConfirm] = useState(false);
  const [selectedPerson, setSelectedPerson] = useState(
    new Array(userTable.users.length).fill(false)
  );

  useEffect(() => {
    if (isEditing) {
      setSelectedPerson(selectedMenu.users);
      setOrderQuantity(selectedMenu.quantity);
    }
  }, []);

  useEffect(() => {
    checkPerson();
  }, [selectedPerson]);

  const newOrder = () => {
    const order = {
      users: [...selectedPerson],
      name: selectedMenu.name,
      quantity: orderQuantity,
      price: selectedMenu.price,
      image_url: selectedMenu.image_url,
    };

    socket.emit('newOrder', { tableCode: userTable.tableCode, order })
  };

  const setQuantity = (value) => {
    if (value === 1) {
      setOrderQuantity((orderQuantity) => orderQuantity + 1);
    } else {
      if (orderQuantity - 1 < 1) {
        return;
      }
      setOrderQuantity((orderQuantity) => orderQuantity - 1);
    }
  };

  const selectAll = () => {
    let newSelectedPerson = new Array(userTable.users.length).fill(false);
    if (selectedPerson.indexOf(false) != -1) {
      newSelectedPerson = new Array(userTable.users.length).fill(true);
    }
    setSelectedPerson(newSelectedPerson);
  };

  const resetOptions = () => {
    const newSelectedPerson = new Array(userTable.users.length).fill(false);
    setSelectedPerson(newSelectedPerson);
  };

  const checkPerson = () => {
    for (const person of selectedPerson) {
      if (person) {
        setShowConfirm(true);
        return;
      }
    }

    setShowConfirm(false);
  };

  const onSelectPerson = (idx) => {
    const newSelectedPerson = [...selectedPerson];
    newSelectedPerson[idx] = !newSelectedPerson[idx];
    setSelectedPerson(newSelectedPerson);
  };

  const defaultPersonStyle = {
    maxHeight: "100px",
    margin: "8px",
    borderRadius: "50%",
  };
  const selectedPersonStyle = {
    ...defaultPersonStyle,
    border: "1px solid red",
  };

  return (
    <Modal
      width="50vw"
      title={selectedMenu.name}
      visible={showMenu}
      footer={null}
      onCancel={() => {
        toggleModal();
        resetOptions();
      }}
    >
      <Row style={{ height: "60vh" }}>
        <Col span={12}>
          <img
            style={{ width: "100%", height: "45vh", objectFit: "cover" }}
            alt="example"
            src={selectedMenu.image_url}
          />
          <Row justify="center">
            <Col
              span={8}
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Button
                type="ghost"
                shape="circle"
                onClick={() => setQuantity(-1)}
                disabled={orderQuantity - 1 < 1 ? true : false}
              >
                <MinusCircleOutlined />
              </Button>
              <div>{orderQuantity}</div>
              <Button onClick={() => setQuantity(+1)}>
                <PlusCircleOutlined />
              </Button>
            </Col>
          </Row>
          <Row
            style={{
              backgroundColor: "gray",
              width: "100%",
              height: "8vh",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Col>฿{selectedMenu.price * orderQuantity}-</Col>
          </Row>
        </Col>

        {/* ////////////////////////////////////////////////////////////////// */}

        <Col span={12}>
          <Row
            style={{
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "center",
              padding: "5px",
              backgroundColor: "gray",
              width: "25vw",
              height: "45vh",
              overflow: "auto",
            }}
          >
            {userTable.users.map((person, idx) => (
              <Col
                onClick={() => {
                  onSelectPerson(idx);
                }}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <img
                  style={
                    selectedPerson[idx]
                      ? selectedPersonStyle
                      : defaultPersonStyle
                  }
                  src={`${BASE_BACKEND_URL}/${person.profile_url}`}
                ></img>
                <div>{person.username}</div>
              </Col>
            ))}
          </Row>

          <Row
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              margin: "20px ",
            }}
          >
            {/* /////////////////////////////////////////////////////////////// All */}

            <Button
              type="primary"
              shape="round"
              onClick={selectAll}
              style={{
                backgroundColor: "#86DBD4",
                borderColor: "#86DBD4",
                width: "150px",
                height: "40px",
                fontSize: "18px",
              }}
            >
              All
            </Button>

            {/* /////////////////////////////////////////////////////////////// Remove */}

            {isEditing ? (
              <Button
                onClick={() => {
                  removeOrder(editItem)
                  toggleModal()
                }}
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
                Remove
              </Button>
            ) : null}

            {/* /////////////////////////////////////////////////////////////// Confirm */}

            <Button
              disabled={!showConfirm}
              onClick={() => {
                if (isEditing) {
                  const order = {
                    users: [...selectedPerson],
                    name: selectedMenu.name,
                    quantity: orderQuantity,
                    price: selectedMenu.price,
                    image_url: selectedMenu.image_url,
                  };
                  editOrder(order, editItem);
                } else {
                  newOrder();
                }
                toggleModal();
                resetOptions();
              }}
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

            {/* /////////////////////////////////////////////////////////////// Cancel */}

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
          </Row>
        </Col>
      </Row>
    </Modal>
  );
}

const mapStateToProps = state => {
  return {
    socket: state.socketReducer.socket,
    userTable: state.userTableReducer.userTable
  }
}

export default connect(mapStateToProps, null)(ModalOrder);
