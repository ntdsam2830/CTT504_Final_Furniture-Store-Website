import axios from "axios";


const getUsers = async () => {
  const response = await axios.get(`${process.env.REACT_APP_SERVER_URL}/user/all-users`);

  return response.data;
};

const customerService = {
  getUsers,
};

export default customerService;
