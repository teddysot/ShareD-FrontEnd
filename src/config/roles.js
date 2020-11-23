import Login from "../containers/pages/Login/Login";
import Register from "../containers/pages/Register/Register";
import OrderList from "../containers/pages/OrderList/OrderList";

const components = {
  login: {
    path: "/",
    page: Login
  },
  register: {
    path: "/register",
    page: Register
  },
  orderList: {
    path: "/orderlist",
    page: OrderList
  },
};

const roles = {
  GUEST: [
    components.login,
    components.register
  ],
  USER: [
    components.orderList

  ]
}

export default roles;