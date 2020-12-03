import { SETUP_SOCKET } from "../actions";
import { notification } from 'antd'
import io from "socket.io-client";
import LocalStorageService from "../../services/LocalStorageService";

const initialState = {
    socket: null,
    roomCode: null
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case SETUP_SOCKET:
            return {
                ...state,
                socket: setupSocket(state)
            };
        default:
            return state;
    }
};

const setupSocket = ({ socket }) => {
    const token = LocalStorageService.getToken();
    if (token && !socket) {
        const newSocket = io("http://localhost", {
            query: {
                token: LocalStorageService.getToken(),
            },
        });

        newSocket.on("disconnect", () => {
            notification.error({
                description: "Socket Disconnected!"
            });
            console.log("Socket Disconnected");
            return null
        });

        newSocket.on("connect", () => {
            notification.success({
                description: "Socket Connected!"
            })
            console.log("Socket Connected");
        });

        return newSocket;
    }
}

export default reducer;
