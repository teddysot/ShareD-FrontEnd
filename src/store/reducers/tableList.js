import { ADD_TABLE, FETCH_TABLE, SELECT_TABLE, UPDATE_ORDERS, UPDATE_USERS } from "../actions";


const initialState = {
    tableList: [],
    selectTable: null
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TABLE:
            return {
                ...state,
                tableList: action.value
            };
        case FETCH_TABLE:
            return {
                ...state,
                tableList: action.value
            }
        case SELECT_TABLE:
            return {
                ...state,
                selectTable: action.value
            }
        case UPDATE_ORDERS:
            return {
                ...state,
                tableList: action.value
            }
        case UPDATE_USERS:
            return {
                ...state,
                tableList: action.value
            }
        default:
            return state;
    }
};

export default reducer;