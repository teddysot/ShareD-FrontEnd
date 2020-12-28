import React from 'react';
import { Col, Empty, Row, Button } from "antd";
import { useHistory } from 'react-router-dom'

function NotFound() {

  const history = useHistory()
  return (
    <Row justify="center" align="middle" style={{ height: "90vh" }}>
      <Col>
        <Empty description="404 Not Found" />
        <Button
          onClick={() => {
            history.push('/login')
          }}
          type="primary" shape="round"
          style={{
            marginTop: "20px",
            backgroundColor: "#86DBD4",
            borderColor: "#86DBD4",
            width: "200px",
            height: "40px",
            fontSize: "25px",
            padding: 0
          }}>Back to Login</Button>
      </Col>
    </Row>
  );
}

export default NotFound;
