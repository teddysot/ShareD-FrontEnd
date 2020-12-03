import React, { useState } from "react";
import { Row, Col, List, Avatar, Button, Modal } from "antd";
import { PlusCircleOutlined } from "@ant-design/icons";

function OrderListItem(props) {
  const { toggleModal, finishButton, setIsEditing, setEditItem } = props;

  return (
    <Col
      span={10}
      style={{
        backgroundColor: "#E9FFFD",
        marginRight: "1vw",
        height: "80vh ",
        borderRadius: "20px",
      }}
    >
      <div style={{ padding: "10px" }}>{props.title}</div>
      <List
        style={{
          overflow: "auto",
          height: "80%",
          borderBottom: "1px solid #ccc",
          borderTop: "1px solid #ccc",
        }}
        itemLayout="horizontal"
        dataSource={props.data}
        renderItem={(item, idx) => (
          <List.Item>
            <List.Item.Meta
              title={
                <Row
                  onClick={() => {
                    setIsEditing(true);
                    setEditItem(idx);
                    toggleModal()
                  }}
                  style={{
                    cursor: "pointer",
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  <Col span={4}>
                    <Avatar src={item.image_url} />
                  </Col>
                  <Col
                    span={7}
                    style={{
                      display: "flex",
                      justifyContent: "flex-start",
                      alignItems: "center",
                      flexWrap: "wrap",
                    }}
                  >
                    {item.users.map((user, idx) =>
                      user ? (
                        <Avatar src="https://image.flaticon.com/icons/png/512/64/64572.png" />
                      ) : null
                    )}
                  </Col>
                  <Col
                    span={6}
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      flexWrap: "wrap",
                    }}
                  >
                    {item.name}
                  </Col>
                  <Col
                    span={2}
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      flexWrap: "wrap",
                    }}
                  >
                    x{item.quantity}
                  </Col>
                  <Col
                    span={5}
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      flexWrap: "wrap",
                    }}
                  >
                    ฿{item.quantity * item.price}
                  </Col>
                </Row>
              }
            />
          </List.Item>
        )}
      />

      <Row
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginRight: "15px",
          marginTop: "25px",
        }}
      >
        <Col span={10}>
          {props.isYour ? (
            <Button
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
              {finishButton}
            </Button>
          ) : null}
        </Col>
        <Col span={2}></Col>
        <Col span={6}>
          <div style={{ fontWeight: "bold" }}>Total</div>
        </Col>
        <Col span={6}>
          <span
            style={{
              fontWeight: "bold",
              border: "1px solid black",
              backgroundColor: "white",
              padding: "5px 30px",
            }}
          >
            {props.totalPrice}
          </span>
        </Col>
      </Row>
    </Col>
  );
}

export default OrderListItem;
