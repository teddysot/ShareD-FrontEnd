import { ADD_TABLE, FETCH_TABLE,SELECT_TABLE } from "../actions";


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
        default:
            return state;
    }
};

export default reducer;