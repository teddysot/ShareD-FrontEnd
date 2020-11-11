import Login from "../containers/pages/Login/Login";
import Register from "../containers/pages/Register/Register";

const components = {
  login: {
    path: "/",
    page: Login
  },
  register: {
    path: "/register",
    page: Register
  },
};

const roles = {
  GUEST: [
    components.login,
    components.register
  ],
  USER: [

  ]
}

export default roles;