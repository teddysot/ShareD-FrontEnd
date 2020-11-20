export const SETUP_SOCKET = "SETUP_SOCKET"
export const SET_ROLE = "SET_ROLE"

// ACTION CREATORS
export const setupSocket = () => {
    return { type: SETUP_SOCKET }
}

export const setRole = () => {
    return { type: SET_ROLE }
}