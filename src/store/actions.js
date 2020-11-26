export const SETUP_SOCKET = "SETUP_SOCKET"
export const SET_ROLE = "SET_ROLE"
export const ADD_TABLE = "ADD_TABLE"
export const FETCH_TABLE = "FETCH_TABLE"

// ACTION CREATORS
export const setupSocket = () => {
    return { type: SETUP_SOCKET }
}

export const setRole = () => {
    return { type: SET_ROLE }
}

export const addTable = (value) => {
    return { type: ADD_TABLE , value:value }
}

export const fetchTable = (value) => {
    return { type: FETCH_TABLE , value:value }
}