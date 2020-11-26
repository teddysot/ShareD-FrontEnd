import Login from "../containers/pages/Login/Login";
import Register from "../containers/pages/Register/Register";
import ChooseMenus from "../containers/pages/ChooseMenus/ChooseMenus";

const components = {
  login: {
    path: "/",
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
};

const roles = {
  GUEST: [
    components.login,
    components.register
  ],
  USER: [
    components.chooseMenus
    
  ]
}

export default roles;