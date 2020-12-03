export const SETUP_SOCKET = "SETUP_SOCKET"
export const SET_ROLE = "SET_ROLE"
export const ADD_TABLE = "ADD_TABLE"
export const FETCH_TABLE = "FETCH_TABLE"
export const SELECT_TABLE = "SELECT_TABLE"
export const SET_MENULIST = "SET_MENULIST"

// ACTION CREATORS
export const setupSocket = () => {
    return { type: SETUP_SOCKET }
}

export const setRole = (value) => {
    return { type: SET_ROLE, value }
}

export const setMenulist = (menuList) => {
    return { type: SET_MENULIST, value: menuList}
}

export const addTable = (value) => {
    return { type: ADD_TABLE , value:value }
}

export const fetchTable = (value) => {
    return { type: FETCH_TABLE , value:value }
}

export const selectTable = (value) => {
    return { type: SELECT_TABLE , value:value }
}
