import Login from "../containers/pages/Login/Login";
import Register from "../containers/pages/Register/Register";
import Otp from "../containers/pages/OTP/OTPVerify";
import ConfirmOTP from "../containers/pages/ConfirmOTP/ConfirmOTP";
import InputCode from "../containers/pages/InputCode/InputCode";
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
    components.inputcode,
    components.welcome
  ]
}

export default roles;