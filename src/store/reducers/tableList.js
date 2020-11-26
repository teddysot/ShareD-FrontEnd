import { ADD_TABLE, FETCH_TABLE } from "../actions";

const initialState = {
    tableList: [],
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TABLE:
            return {
                tableList: action.value
            };
        case FETCH_TABLE:
            return {
                tableList: action.value
            }
        default:
            return state;
    }
};

export default reducer;