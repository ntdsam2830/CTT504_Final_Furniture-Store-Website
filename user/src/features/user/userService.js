import axios from "axios";
import Cookies from "js-cookie";
import {
  getAccessToken,
  getAuthUser,
  removeAccessToken,
} from "../../utils/authStorage";

const register = async (userData) => {
  const response = await axios.post(
    "http://localhost:3500/api/user/register",
    userData
  );
  if (response.data) {
    return response.data;
  }
};

const login = async (userData) => {
  const response = await axios.post(
    "http://localhost:3500/api/user/login",
    userData
  );
  if (response.data) {
    return response.data;
  }
};

const logout = async (refreshToken) => {
  Cookies.set("refreshToken", refreshToken);
  const response = await axios.get("http://localhost:3500/api/user/logout", {
    withCredentials: true,
  });
  if (response.data) {
    return response.data;
  }
};

const update = async (updatedUserData) => {
  const user = getAuthUser();
  const response = await axios.put(
    "http://localhost:3500/api/user/updateProfile",
    updatedUserData,
    {
      headers: {
        Authorization: "Bearer " + user.token,
      },
    }
  );
  if (response.data) {
    return response.data;
  }
};

const forgotPassword = async (email) => {
  const response = await axios.post(
    "http://localhost:3500/api/user/forgot-password-token",
    email
  );
  if (response.data) {
    return response.data;
  }
};

const resetPassword = async (password) => {
  const token = getAccessToken();
  const response = await axios.put(
    `http://localhost:3500/api/user/reset-password/${token}`,
    password
  );
  console.log(response);
  removeAccessToken();
  if (response.data) {
    return response.data;
  }
};

const userCart = async () => {
  const user = getAuthUser();
  const response = await axios.get("http://localhost:3500/api/cart/info", {
    headers: {
      Authorization: "Bearer " + user.token,
    },
  });
  if (response.data) {
    return response.data;
  }
};

const addCart = async (data) => {
  const user = getAuthUser();
  const response = await axios.post(
    "http://localhost:3500/api/cart/addToCart",
    data,
    {
      headers: {
        Authorization: "Bearer " + user.token,
      },
    }
  );
  if (response.data) {
    return response.data;
  }
};

const deleteCart = async (data) => {
  const user = getAuthUser();
  console.log(data);
  const response = await axios.delete(
    "http://localhost:3500/api/cart/deleteProduct",
    {
      headers: {
        Authorization: "Bearer " + user.token,
      },
      data: data,
    }
  );
  if (response.data) {
    return response.data;
  }
};

const deleteCarts = async (data) => {
  const user = getAuthUser();
  console.log(data);
  const response = await axios.delete(
    "http://localhost:3500/api/cart/deleteAll",
    {
      headers: {
        Authorization: "Bearer " + user.token,
      },
      data: data,
    }
  );
  if (response.data) {
    return response.data;
  }
};

export const authService = {
  register,
  login,
  logout,
  update,
  forgotPassword,
  resetPassword,
  userCart,
  addCart,
  deleteCart,
  deleteCarts,
};
