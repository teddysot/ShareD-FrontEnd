import React from "react";
import { Row, Col, Card } from "antd";

const { Meta } = Card;

function MenuItem(props) {
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
      <Row
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginTop: "25px",
          overflow: "auto",
          height: "90%",
        }}
      >
        <Col
          span={24}
          style={{
            display: "flex",
            flexWrap: "wrap",
            height: "50%",
          }}
        >
          <Card
            onClick={toggleModal}
            hoverable
            style={{ width: "25vh", margin: "15px 11px" }}
            cover={
              <img
                style={{ width: "100%", height: "20vh", objectFit: "cover" }}
                alt="example"
                src="https://wowsushi.co.nz/wp-content/uploads/2020/04/Nigiri-Salmon-1.jpg"
              />
            }
          >
            <Meta
              style={{ padding: "0 0" }}
              title="Salmon"
              description="฿300-"
            />
          </Card>
          <Card
            onClick={toggleModal}
            hoverable
            style={{ width: "25vh", margin: "15px 11px" }}
            cover={
              <img
                style={{ width: "100%", height: "20vh", objectFit: "cover" }}
                alt="example"
                src="https://wowsushi.co.nz/wp-content/uploads/2020/04/Nigiri-Salmon-1.jpg"
              />
            }
          >
            <Meta
              style={{ padding: "0 0" }}
              title="Salmon"
              description="฿300-"
            />
          </Card>
          <Card
            onClick={toggleModal}
            hoverable
            style={{ width: "25vh", margin: "15px 11px" }}
            cover={
              <img
                style={{ width: "100%", height: "20vh", objectFit: "cover" }}
                alt="example"
                src="https://wowsushi.co.nz/wp-content/uploads/2020/04/Nigiri-Salmon-1.jpg"
              />
            }
          >
            <Meta
              style={{ padding: "0 0" }}
              title="Salmon"
              description="฿300-"
            />
          </Card>
          <Card
            onClick={toggleModal}
            hoverable
            style={{ width: "25vh", margin: "15px 11px" }}
            cover={
              <img
                style={{ width: "100%", height: "20vh", objectFit: "cover" }}
                alt="example"
                src="https://wowsushi.co.nz/wp-content/uploads/2020/04/Nigiri-Salmon-1.jpg"
              />
            }
          >
            <Meta
              style={{ padding: "0 0" }}
              title="Salmon"
              description="฿300-"
            />
          </Card>
          <Card
            onClick={toggleModal}
            hoverable
            style={{ width: "25vh", margin: "15px 11px" }}
            cover={
              <img
                style={{ width: "100%", height: "20vh", objectFit: "cover" }}
                alt="example"
                src="https://wowsushi.co.nz/wp-content/uploads/2020/04/Nigiri-Salmon-1.jpg"
              />
            }
          >
            <Meta
              style={{ padding: "0 0" }}
              title="Salmon"
              description="฿300-"
            />
          </Card>
          <Card
            onClick={toggleModal}
            hoverable
            style={{ width: "25vh", margin: "15px 11px" }}
            cover={
              <img
                style={{ width: "100%", height: "20vh", objectFit: "cover" }}
                alt="example"
                src="https://wowsushi.co.nz/wp-content/uploads/2020/04/Nigiri-Salmon-1.jpg"
              />
            }
          >
            <Meta
              style={{ padding: "0 0" }}
              title="Salmon"
              description="฿300-"
            />
          </Card>
          <Card
            onClick={toggleModal}
            hoverable
            style={{ width: "25vh", margin: "15px 11px" }}
            cover={
              <img
                style={{ width: "100%", height: "20vh", objectFit: "cover" }}
                alt="example"
                src="https://wowsushi.co.nz/wp-content/uploads/2020/04/Nigiri-Salmon-1.jpg"
              />
            }
          >
            <Meta
              style={{ padding: "0 0" }}
              title="Salmon"
              description="฿300-"
            />
          </Card>
        </Col>
      </Row>
    </Col>
  );
}

export default MenuItem;
