import React, { useState } from "react";
import { Row, Col, List, Avatar, Button, Modal } from "antd";
import { PlusCircleOutlined } from "@ant-design/icons";

function OrderListItem(props) {
  const { toggleModal } = props;

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
        renderItem={(item) => (
          <List.Item>
            <List.Item.Meta
              title={
                <Row
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  <Col span={6}>
                    <Avatar src="https://wowsushi.co.nz/wp-content/uploads/2020/04/Nigiri-Salmon-1.jpg" />
                  </Col>
                  <Col span={6}>{item.name}</Col>
                  <Col span={6}>x{item.quantity}</Col>
                  <Col span={6}>
                    ฿{item.quantity * item.price}
                    <Button
                      type="text"
                      style={{ marginLeft: "5px", color: "blue" }}
                      icon={<PlusCircleOutlined style={{ padding: "0 0 " }} />}
                      size="small"
                    />
                    <Button
                      type="text"
                      style={{ marginLeft: "5px" }}
                      icon={<PlusCircleOutlined style={{ padding: "0 0 " }} />}
                      size="small"
                    />
                    <Button
                      type="text"
                      style={{ marginLeft: "5px" }}
                      icon={<PlusCircleOutlined style={{ padding: "0 0 " }} />}
                      size="small"
                    />
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
              Checkout
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
