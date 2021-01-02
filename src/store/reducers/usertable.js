import { SET_TABLE_USERS, SET_TABLE_ORDERS, SET_TABLE_CODE, SET_TABLE_NUMBER } from "../actions";

const initialState = {
    userTable: {
        tableCode: "",
        users: [],
        orders: [],
        tableNumber: null
    }
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_TABLE_CODE:
            return {
                userTable: {
                    tableCode: action.value.tableCode,
                    users: state.userTable.users,
                    orders: state.userTable.orders,
                    tableNumber: state.userTable.tableNumber
                }
            }
        case SET_TABLE_USERS:
            const { tableCode, users } = action.value
            return {
                userTable: {
                    tableCode,
                    users,
                    orders: state.userTable.orders,
                    tableNumber: state.userTable.tableNumber
                }
            }
        case SET_TABLE_ORDERS:
            const { orders } = action.value
            return {
                userTable: {
                    orders,
                    tableCode: state.userTable.tableCode,
                    users: state.userTable.users,
                    tableNumber: state.userTable.tableNumber
                }
            }
        case SET_TABLE_NUMBER:
            const { tableNumber } = action.value
            return {
                userTable: {
                    tableNumber,
                    tableCode: state.userTable.tableCode,
                    users: state.userTable.users,
                    orders: state.userTable.orders,
                }
            }
        default:
            return state;
    }
};

export default reducer;