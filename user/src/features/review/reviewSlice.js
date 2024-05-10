import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { ReviewService } from './reviewService';
import { notification } from 'antd';

export const getReviewsByProd = createAsyncThunk(
  'review/reviewsByProduct',
  async (id, thunkAPI) => {
    try {
      return await ReviewService.getReviewsByProduct(id);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const createReview = createAsyncThunk(
  'review/create',
  async (review, thunkAPI) => {
    try {
      return await ReviewService.addReview(review);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const updateReviewFavs = createAsyncThunk(
  'review/updateFav',
  async (updatedReview, thunkAPI) => {
    try {
      return await ReviewService.updateFavList(updatedReview);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const initialState = {
  reviews: [],
  isLoading: false,
  message: ''
};

export const ReviewSlice = createSlice({
  name: 'review',
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getReviewsByProd.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getReviewsByProd.fulfilled, (state, action) => {
        state.isLoading = false;
        state.message = '';
        state.reviews = action.payload || [];
      })
      .addCase(getReviewsByProd.rejected, (state, action) => {
        state.isLoading = false;
        state.message = action.error;
      })
      .addCase(createReview.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createReview.fulfilled, (state, action) => {
        state.isLoading = false;
        state.message = '';
        notification.success({
          message: 'Review posted successfully.',
          duration: '1',
        });
      })
      .addCase(createReview.rejected, (state, action) => {
        state.isLoading = false;
        state.message = action.error;
      })
      .addCase(updateReviewFavs.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updateReviewFavs.fulfilled, (state, action) => {
        state.isLoading = false;
        state.message = '';
      })
      .addCase(updateReviewFavs.rejected, (state, action) => {
        state.isLoading = false;
        state.message = action.error;
      })
  },
});

export default ReviewSlice.reducer;
