export const SETUP_SOCKET = "SETUP_SOCKET"
export const SET_ROLE = "SET_ROLE"
export const SET_USER = "SET_USER"
export const ADD_TABLE = "ADD_TABLE"
export const FETCH_TABLE = "FETCH_TABLE"
export const SELECT_TABLE = "SELECT_TABLE"
export const SET_MENULIST = "SET_MENULIST"
export const SET_TABLE_USERS = "SET_TABLE_USERS"

// ACTION CREATORS
export const setupSocket = () => {
    return { type: SETUP_SOCKET }
}

export const setRole = (value) => {
    return { type: SET_ROLE, value }
}

export const setUser = (value) => {
    return { type: SET_USER, value }
}

export const setMenulist = (menuList) => {
    return { type: SET_MENULIST, value: menuList }
}

export const addTable = (value) => {
    return { type: ADD_TABLE, value }
}

export const fetchTable = (value) => {
    return { type: FETCH_TABLE, value }
}

export const selectTable = (value) => {
    return { type: SELECT_TABLE, value }
}

export const setTableUsers = (value) => {
    return { type: SET_TABLE_USERS, value }
}