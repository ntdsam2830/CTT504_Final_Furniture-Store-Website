import axios from "axios";
import { getAuthUser } from "../../utils/authStorage";


const getReviewsByProduct = async (prodId) => {
  const response = await axios.get(`${process.env.REACT_APP_SERVER_URL}/review/getReview/${prodId}`);
  if (response.data) {
    return response.data;
  }
};

const addReview = async (review) => {
  const user = getAuthUser();
  const response = await axios.post(`${process.env.REACT_APP_SERVER_URL}/review/addReview`,
    review,
    {
      headers: {
        Authorization: "Bearer " + user.token,
      },
    });

  if (response.data) {
    return response.data;
  }
}

const updateFavList = async (updatedReview) => {
  const user = getAuthUser();
  const response = await axios.put(`${process.env.REACT_APP_SERVER_URL}/review/updateListFavor`,
    updatedReview,
    {
      headers: {
        Authorization: "Bearer " + user.token,
      },
    });

  if (response.data) {
    return response.data;
  }
}

export const ReviewService = {
  getReviewsByProduct,
  addReview,
  updateFavList
};
