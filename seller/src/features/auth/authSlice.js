import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import authService from "./authServices";
import {
  getAuthUser,
  setAccessToken,
  setAuthUser,
} from "../../utils/authStorage";
import { notification } from "antd";

const user = getAuthUser();

const initialState = {
  user: user,
  orders: [],
  resetEmail: "",
  isError: false,
  isLoading: false,
  isSuccess: false,
  message: "",
};
export const login = createAsyncThunk(
  "auth/login",
  async (userData, thunkAPI) => {
    try {
      return await authService.login(userData);
    } catch (error) {
      notification.error({
        message: `${error.response.data.message}`,
      });
      return thunkAPI.rejectWithValue(error);
    }
  }
);
export const sendEmail = createAsyncThunk(
  "auth/sendEmail",
  async (userData, thunkAPI) => {
    try {
      // initialState.resetEmail = userData;
      return await authService.sendEmail(userData);
    } catch (error) {
      notification.error({
        message: `${error.response.data.message}`,
      });
      return thunkAPI.rejectWithValue(error);
    }
  }
);
export const sendVerification = createAsyncThunk(
  "auth/sendVerification",
  async (userData, thunkAPI) => {
    try {
      return await authService.sendVerification(userData);
    } catch (error) {
      notification.error({
        message: `${error.response.data.message}`,
      });
      return thunkAPI.rejectWithValue(error);
    }
  }
);
export const sendNewPassword = createAsyncThunk(
  "auth/sendNewPassword",
  async (userData, thunkAPI) => {
    try {
      return await authService.sendNewPassword(userData);
    } catch (error) {
      notification.error({
        message: `${error.response.data.message}`,
      });
      return thunkAPI.rejectWithValue(error);
    }
  }
);
export const getOrders = createAsyncThunk(
  "order/get-orders",
  async (thunkAPI) => {
    try {
      return await authService.getOrders();
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
export const getOrderByUser = createAsyncThunk(
  "order/get-order",
  async (id, thunkAPI) => {
    try {
      return await authService.getOrder(id);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const authSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {},
  extraReducers: (buildeer) => {
    buildeer
      // API Login
      .addCase(login.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.isError = false;
        state.isLoading = false;
        state.isSuccess = true;
        state.user = action.payload;
        state.message = "success";
        setAuthUser(action.payload);
        setAccessToken(action.payload.token);
        notification.success({
          message: "Hello Admin",
          description: "Welcome to Future Furniture!",
        });
        setTimeout(() => {
          window.location.assign("/admin");
        }, 500);
      })
      .addCase(login.rejected, (state, action) => {
        state.isError = true;
        state.isSuccess = false;
        state.message = action.error;
        state.isLoading = false;
      })
      //reset email
      .addCase(sendEmail.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(sendEmail.fulfilled, (state, action) => {
        state.isError = false;
        state.isLoading = false;
        state.isSuccess = true;
        state.resetEmail = action.payload.data;
        console.log(action.payload.data);
        setTimeout(() => {
          window.location.assign("/verify-code");
        }, 500);
      })
      .addCase(sendEmail.rejected, (state, action) => {
        state.isError = true;
        state.isSuccess = false;
        state.message = action.error;
        state.isLoading = false;
      })
      
      //sent verification
      .addCase(sendVerification.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(sendVerification.fulfilled, (state, action) => {
        state.isError = false;
        state.isLoading = false;
        state.isSuccess = true;
        setTimeout(() => {
          window.location.assign("/reset-password");
        }, 500);
      })
      .addCase(sendVerification.rejected, (state, action) => {
        state.isError = true;
        state.isSuccess = false;
        state.message = action.error;
        state.isLoading = false;
      })

      //send new pass
      .addCase(sendNewPassword.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(sendNewPassword.fulfilled, (state, action) => {
        state.isError = false;
        state.isLoading = false;
        state.isSuccess = true;
        state.message = "success";
        setTimeout(() => {
          window.location.assign("/");
        }, 500);
      })
      .addCase(sendNewPassword.rejected, (state, action) => {
        state.isError = true;
        state.isSuccess = false;
        state.message = action.error;
        state.isLoading = false;
      })

      // API get orders
      .addCase(getOrders.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getOrders.fulfilled, (state, action) => {
        state.isError = false;
        state.isLoading = false;
        state.isSuccess = true;
        state.orders = action.payload;
        state.message = "success";
      })
      .addCase(getOrders.rejected, (state, action) => {
        state.isError = true;
        state.isSuccess = false;
        state.message = action.error;
        state.isLoading = false;
      })

      // API get order by user
      .addCase(getOrderByUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getOrderByUser.fulfilled, (state, action) => {
        state.isError = false;
        state.isLoading = false;
        state.isSuccess = true;
        state.orderbyuser = action.payload;
        state.message = "success";
      })
      .addCase(getOrderByUser.rejected, (state, action) => {
        state.isError = true;
        state.isSuccess = false;
        state.message = action.error;
        state.isLoading = false;
      });
  },
});

export default authSlice.reducer;
