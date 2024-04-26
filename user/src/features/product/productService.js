import axios from "axios";

const getProducts = async () => {
  const response = await axios.get(`http://localhost:3500/api/product`);
  if (response.data) {
    return response.data;
  }
};

const getFuncProducts = async (url) => {
  const response = await axios.get(`http://localhost:3500/api/product${url}`);
  if (response.data) {
    return response.data;
  }
};

const getSingleProduct = async (id) => {
  const response = await axios.get(`http://localhost:3500/api/product/${id}`);
  if (response.data) {
    return response.data;
  }
};
export const productService = {
  getProducts,
  getFuncProducts,
  getSingleProduct,
};
