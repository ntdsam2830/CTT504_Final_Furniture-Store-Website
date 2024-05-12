import axios from "axios";


const getProducts = async () => {
  const response = await axios.get(`${process.env.REACT_APP_SERVER_URL}/product`);
  if (response.data) {
    return response.data;
  }
};

const getFuncProducts = async (url) => {
  const response = await axios.get(`${process.env.REACT_APP_SERVER_URL}/product${url}`);
  if (response.data) {
    return response.data;
  }
};

const getSingleProduct = async (id) => {
  const response = await axios.get(`${process.env.REACT_APP_SERVER_URL}/product/${id}`);
  if (response.data) {
    return response.data;
  }
};
export const productService = {
  getProducts,
  getFuncProducts,
  getSingleProduct,
};
