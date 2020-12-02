import { SET_MENULIST } from "../actions";


const initialState = {
    menuList: [],
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_MENULIST:
            return {
                ...state,
                menuList: action.value
            };
        default:
            return state;
    }
};

export default reducer;