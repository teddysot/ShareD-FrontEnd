import { Button } from "antd";
import React from "react";

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
      <div style={{height: "100vh",display: "flex" ,flexDirection: "column" ,justifyContent: "center", alignItems: "center" }}>
        <div data-aos="zoom-out-down" style={{ fontSize: "50px" }}>
          Welcome
        </div>
        <div data-aos="fade-down" style ={{border:'1px solid',width :'150px'}}><Button>Enter to this site</Button></div>
      </div>
    </div>
  );
}

export default Welcome;
