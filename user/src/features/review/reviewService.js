import axios from "axios";
import { getAuthUser } from "../../utils/authStorage";

const getReviewsByProduct = async (prodId) => {
  const response = await axios.get(`http://localhost:3500/api/review/getReview/${prodId}`);
  if (response.data) {
    return response.data;
  }
};

const addReview = async (review) => {
  const user = getAuthUser();
  const response = await axios.post(`http://localhost:3500/api/review/addReview`,
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
  const response = await axios.put(`http://localhost:3500/api/review/updateListFavor`,
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
