import Login from "../containers/pages/Login/Login";
import Register from "../containers/pages/Register/Register";
import Otp from "../containers/pages/OTP/OTPVerify";
import ConfirmOTP from "../containers/pages/ConfirmOTP/ConfirmOTP";
import InputCode from "../containers/pages/InputCode/InputCode";

const components = {
  login: {
    path: "/",
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
    components.login,
    components.register,
    components.otp,
    components.confirmOtp,

  ],
  USER: [
    components.inputcode,
  ]
}

export default roles;