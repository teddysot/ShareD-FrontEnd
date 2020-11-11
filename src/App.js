import './App.css';
import React, { useState, useEffect } from "react";
import { notification } from 'antd'
import io from "socket.io-client";
import PrivateRoutes from './containers/PrivateRoutes/PrivateRoutes';
import LocalStorageService from "./services/LocalStorageService";

function App() {
  const [socket, setSocket] = useState(null);
  const [role, setRole] = useState(LocalStorageService.getRole());

  const setupSocket = () => {
    const token = localStorage.getItem("ACCESS_TOKEN");
    if (token && !socket) {
      const newSocket = io("http://localhost", {
        query: {
          token: localStorage.getItem("ACCESS_TOKEN"),
        },
      });

      newSocket.on("disconnect", () => {
        setSocket(null);
        // setTimeout(setupSocket, 3000);
        notification.error({
          description: "Socket Disconnected!"
        });
        console.log("Socket Disconnected");
      });

      newSocket.on("connect", () => {
        notification.success({
          description: "Socket Connected!"
        })
        console.log("Socket Connected");
      });

      setSocket(newSocket);
    }
  }

  useEffect(() => {
    setupSocket();
  }, []);

  return (
    <div className="App">
      <PrivateRoutes role={role} setRole={setRole} setupSocket={setupSocket} />
    </div>
  );
}

export default App;
