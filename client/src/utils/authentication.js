const login = (email) => {
  const expiryTime = new Date().getTime() + 30 * 60 * 1000;
  const userData = { email: email, expiry: expiryTime };
  localStorage.setItem("user", JSON.stringify(userData));
};

const logout = () => {
  localStorage.removeItem("user");
};

const isSessionValid = () => {
  console.log("localstorage:", localStorage.getItem("user"));
  const storedUser = JSON.parse(localStorage.getItem("user"));
  return storedUser && new Date().getTime() < storedUser.expiry;
};

const handleSessionExpiry = () => {
  if (isSessionValid()) return true;
  else {
    logout();
    return false;
  }
};

export { login, logout, isSessionValid, handleSessionExpiry };
