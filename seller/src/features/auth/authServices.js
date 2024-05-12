import axios from "axios";
import { config } from "../../utils/axiosconfig";

const login = async (user) => {
  const response = await axios.post(`${process.env.REACT_APP_SERVER_URL}/user/admin-login`, user);
  if (response.data) {
    localStorage.setItem("user", JSON.stringify(response.data));
  }
  return response.data;
};
const sendEmail = async (resetEmail) => {
  const response = await axios.post(`${process.env.REACT_APP_SERVER_URL}/otp/sendOtp`, resetEmail);
  return response;
};
const sendVerification = async (data) => {
  const response = await axios.post(`${process.env.REACT_APP_SERVER_URL}/otp/checkOtp`, data);
  return response;
};
const sendNewPassword = async (newpass) => {
  const response = await axios.post(`${process.env.REACT_APP_SERVER_URL}/user/resetPassword`, newpass);
  return response;
};
const getOrders = async () => {
  const response = await axios.get(`${process.env.REACT_APP_SERVER_URL}/user/getallorders`, config);

  return response.data;
};
const getOrder = async (id) => {
  const response = await axios.post(
    `${process.env.REACT_APP_SERVER_URL}/user/getorderbyuser/${id}`,
    "",
    config
  );

  return response.data;
};

const authService = {
  login,
  sendEmail,
  sendVerification,
  sendNewPassword,
  getOrders,
  getOrder,
};

export default authService;
