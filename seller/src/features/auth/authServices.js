import axios from "axios";
import { config } from "../../utils/axiosconfig";
import { base_url } from "../../utils/baseUrl";
const login = async (user) => {
  const response = await axios.post(`${base_url}user/admin-login`, user);
  if (response.data) {
    localStorage.setItem("user", JSON.stringify(response.data));
  }
  return response.data;
};
const sendEmail = async (resetEmail) => {
  const response = await axios.post(`${base_url}otp/sendOtp`, resetEmail);
  return response;
};
const sendVerification = async (data) => {
  const response = await axios.post(`${base_url}otp/checkOtp`, data);
  return response;
};
const sendNewPassword = async (newpass) => {
  const response = await axios.post(`${base_url}user/resetPassword`, newpass);
  return response;
};
const getOrders = async () => {
  const response = await axios.get(`${base_url}user/getallorders`, config);

  return response.data;
};
const getOrder = async (id) => {
  const response = await axios.post(
    `${base_url}user/getorderbyuser/${id}`,
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
