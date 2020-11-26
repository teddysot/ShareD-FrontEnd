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
  if (getToken()) {
    return "USER";
  }
  return "GUEST";
};

const LocalStorageService = {
  setToken,
  getToken,
  removeToken,
  getRole,
}

export default LocalStorageService