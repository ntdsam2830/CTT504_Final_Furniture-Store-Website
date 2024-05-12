import axios from "axios";
import { config } from "../../utils/axiosconfig";
import { getAccessToken } from "../../utils/authStorage";

const token = getAccessToken();



const getProducts = async () => {
  const response = await axios.get(`${process.env.REACT_APP_SERVER_URL}/product/`);

  return response.data;
};
const createProduct = async (product) => {
  const response = await axios.post(
    `${process.env.REACT_APP_SERVER_URL}/product/createproduct`,
    product,
    {
      headers: {
        Authorization: `Bearer ${token !== null ? token : ""}`,
        // Accept: "application/json",
        "Content-Type": "multipart/form-data",
      },
    }
  );

  return response.data;
};

const deleteProduct = async (id) => {
  const response = await axios.delete(
    `${process.env.REACT_APP_SERVER_URL}/product/deleteproduct/${id}`,
    config
  );

  return response.data;
};

const editOneProduct = async (data) => {
  const response = await axios.put(
    `${process.env.REACT_APP_SERVER_URL}/product/updateproduct/${data.id}`,
    data,
    config
  );
  return response.data;
};

const getOneProduct = async (id) => {
  const response = await axios.get(`${process.env.REACT_APP_SERVER_URL}/product/${id}`, config);
  return response.data;
};

const productService = {
  getProducts,
  createProduct,
  deleteProduct,
  editOneProduct,
  getOneProduct,
};

export default productService;
