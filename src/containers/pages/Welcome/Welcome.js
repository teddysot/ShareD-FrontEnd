import { Button } from "antd";
import React from "react";
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux'

function Welcome({ role }) {
  const history = useHistory()

  const onEnterClick = () => {
    switch (role) {
      case "CUSTOMER":
        history.push('/inputcode')
        break;
      case "RESTAURANT":
        history.push('/table-list')
        break;
      case "GUEST":
        history.push('/login')
        break;

      default:
        break;
    }
  }

  return (
    <div
      style={{
        display: "column",
        justifyContent: "center",
        alignItems: "center",
        width: "100vw",
        height: "100vh",
        backgroundColor: "#86DBD4",
        color: "#FFFFFF",
      }}
    >
      <div
        style={{
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          data-aos="zoom-out-down"
          style={{ fontSize: "60px", paddingBottom: "10px" }}
        >
          Welcome
        </div>
        <div data-aos="fade-down">
          <Button onClick={onEnterClick}>Enter to this site</Button>
        </div>
      </div>
    </div>
  );
}


const mapStateToProps = state => {
  return {
    role: state.userReducer.role
  }
}

export default connect(mapStateToProps)(Welcome);