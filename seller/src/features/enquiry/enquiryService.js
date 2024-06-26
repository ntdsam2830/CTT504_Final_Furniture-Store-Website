import axios from "axios";
import { config } from "../../utils/axiosconfig";


const getEnquiries = async () => {
  const response = await axios.get(`${process.env.REACT_APP_SERVER_URL}/enquiry/`);

  return response.data;
};
const deleteEnquiry = async (id) => {
  const response = await axios.delete(`${process.env.REACT_APP_SERVER_URL}/enquiry/${id}`, config);
  return response.data;
};
const getEnquiry = async (id) => {
  const response = await axios.get(`${process.env.REACT_APP_SERVER_URL}/enquiry/${id}`);
  return response.data;
};
const udpateEnquiry = async (enq) => {
  const response = await axios.put(
    `${process.env.REACT_APP_SERVER_URL}/enquiry/${enq.id}`,
    { status: enq.enqData },
    config
  );
  return response.data;
};
const enquiryService = {
  getEnquiries,
  deleteEnquiry,
  getEnquiry,
  udpateEnquiry,
};

export default enquiryService;
