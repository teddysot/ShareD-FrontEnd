import React from "react";
import { Row, Col, List, Avatar, Button, Modal } from "antd";
import { BASE_BACKEND_URL } from '../../../config/constants'
import { connect } from "react-redux";

function OrderListItem(props) {
  const { toggleModal, finishButton, setIsEditing, setEditItem, userTable, onFinishClick } = props;

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
                        <Avatar src={`${BASE_BACKEND_URL}/${userTable.users[idx].profile_url}`} />
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
          {props.showButton ? (
            <Button
              type="primary"
              shape="round"
              onClick={onFinishClick}
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

const mapStateToProps = state => {
  return {
    userTable: state.userTableReducer.userTable
  }
}

export default connect(mapStateToProps, null)(OrderListItem);
