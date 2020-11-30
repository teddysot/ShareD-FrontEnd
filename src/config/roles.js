import Login from "../containers/pages/Login/Login";
import Register from "../containers/pages/Register/Register";
import CreateListTable from "../containers/pages/CreateListTable/CreateListTable"
import TableList from "../containers/pages/TableList/TableList"
import TotalTableBill from "../containers/pages/TotalTalbleBill/TotalTableBill"

const components = {
  login: {
    path: "/",
    page: Login
  },
  register: {
    path: "/register",
    page: Register
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
    components.login,
    components.register
  ],
  USER: [
    components.createListTable,
    components.tableList,
    components.totalTableBill
  ]
}

export default roles;