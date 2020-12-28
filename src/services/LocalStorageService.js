import axios from "../config/axios";

const setToken = (token) => {
  localStorage.setItem("ACCESS_TOKEN", token);
};

const getToken = () => {
  return localStorage.getItem("ACCESS_TOKEN");
};

const removeToken = () => {
  localStorage.clear();
};

const getRole = () => {
  const token = getToken()
  if (token) {
    axios.get("/user/getrole")
      .then(res => {
        const role = res.data.role.toUpperCase()
        return role
      })
      .catch(err => {
        console.log("Login Timeout");
      })
  }
  else {
    return "GUEST";
  }
};

const LocalStorageService = {
  setToken,
  getToken,
  removeToken,
  getRole
}

export default LocalStorageService