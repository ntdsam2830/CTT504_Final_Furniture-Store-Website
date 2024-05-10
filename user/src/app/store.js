import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/user/userSlice";
import productReducer from "../features/product/productSlice";
import reviewReducer from "../features/review/reviewSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    product: productReducer,
    review: reviewReducer
  },
});
