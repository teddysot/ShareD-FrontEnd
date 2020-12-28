import { SET_ROLE, SET_USER } from "../actions";
import LocalStorageService from "../../services/LocalStorageService";

const initialState = {
    role: LocalStorageService.getRole(),
    username: "",
    email: "",
    phone_number: "",
    fname: "",
    lname: "",
    profile_url: "",
    isConfirmed: ""
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_ROLE:
            return {
                ...state,
                role: action.value
            };
        case SET_USER:
            return setUser(action)
        default:
            return state;
    }
};

const setUser = (action) => {
    const { role, username, email,
        phone_number, fname, lname, profile_url, isConfirmed
    } = action.value
    return {
        role: role.toUpperCase(),
        username,
        email,
        phone_number,
        fname,
        lname,
        profile_url,
        isConfirmed,
    }
}

export default reducer;