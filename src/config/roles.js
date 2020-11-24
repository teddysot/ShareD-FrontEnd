import Login from "../containers/pages/Login/Login";
import Register from "../containers/pages/Register/Register";
import Welcome from "../containers/pages/Welcome/Welcome";


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
};

const roles = {
  GUEST: [
    components.welcome,
    components.login,
    components.register
  ],
  USER: [
    components.welcome
  ]
}

export default roles;