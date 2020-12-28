import { SET_TABLE_USERS } from "../actions";

const initialState = {
    userTable: {
        tableCode: "",
        users: []
    }
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_TABLE_USERS:
            const { tableCode, users } = action.value
            return {
                userTable: {
                    tableCode,
                    users
                }
            }
        default:
            return state;
    }
};

export default reducer;