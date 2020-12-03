import { SET_ROLE } from "../actions";
import LocalStorageService from "../../services/LocalStorageService";

const initialState = {
    role: LocalStorageService.getRole(),
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_ROLE:
            return {
                ...state,
                role: setRole(action.value)
            };
        default:
            return state;
    }
};

const setRole = (value) => {

    console.log(value);
    return value
}

export default reducer;