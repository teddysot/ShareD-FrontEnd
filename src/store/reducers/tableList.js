import { ADD_TABLE } from "../actions";

const initialState = {
    tableList: [],
};

const reducer = (state = initialState, action) => {
    console.log(action)
    switch (action.type) {
        case ADD_TABLE:
            return {
                tableList: action.value
            };
        default:
            return state;
    }
};

export default reducer;