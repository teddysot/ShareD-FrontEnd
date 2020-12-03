import Login from "../containers/pages/Login/Login";
import Register from "../containers/pages/Register/Register";
import ChooseMenus from "../containers/pages/ChooseMenus/ChooseMenus";
import OrderList from "../containers/pages/OrderList/OrderList";
import Otp from "../containers/pages/OTP/OTPVerify";
import ConfirmOTP from "../containers/pages/ConfirmOTP/ConfirmOTP";
import InputCode from "../containers/pages/InputCode/InputCode";
import Welcome from "../containers/pages/Welcome/Welcome";
import CreateListTable from "../containers/pages/CreateListTable/CreateListTable"
import TableList from "../containers/pages/TableList/TableList"
import TotalTableBill from "../containers/pages/TotalTalbleBill/TotalTableBill"


const components = {

  welcome: {
    path: "/",
    page: Welcome,
  },
  login: {
    path: "/login",
    page: Login
  },
  register: {
    path: "/register",
    page: Register
  },
  chooseMenus: {
    path: "/choose-menus",
    page: ChooseMenus
  },
  orderList: {
    path: "/orderlist",
    page: OrderList
  },
  otp: {
    path: "/otp",
    page: Otp
  },
  confirmOtp: {
    path: "/confirm-otp",
    page: ConfirmOTP
  },
  inputcode: {
    path: "/inputcode",
    page: InputCode
  },
  createListTable: {
    path: "/create-list-table",
    page: CreateListTable
  },
  tableList:{
    path: "/table-list",
    page:TableList
  },
  totalTableBill:{
    path: "/total-table-bill",
    page: TotalTableBill
  }
};

const roles = {
  GUEST: [
    components.welcome,
    components.login,
    components.register,
    components.otp,
    components.confirmOtp,

  ],
  USER: [
    components.chooseMenus,
    components.orderList,
    components.inputcode,
    components.welcome,
    components.createListTable,
    components.tableList,
    components.totalTableBill
  ]
}

export default roles;