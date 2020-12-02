export const SETUP_SOCKET = "SETUP_SOCKET"
export const SET_ROLE = "SET_ROLE"
export const SET_MENULIST = "SET_MENULIST"

// ACTION CREATORS
export const setupSocket = () => {
    return { type: SETUP_SOCKET }
}

export const setRole = () => {
    return { type: SET_ROLE }
}

export const setMenulist = (menuList) => {
    return { type: SET_MENULIST, value: menuList}
}