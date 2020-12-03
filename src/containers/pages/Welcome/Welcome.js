import { Button } from "antd";
import React from "react";
import { Link } from "react-router-dom";

function Welcome() {
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
          <Link to="/login">
            <Button>Enter to this site</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Welcome;
