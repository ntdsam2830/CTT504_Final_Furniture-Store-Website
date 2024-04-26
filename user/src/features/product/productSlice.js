import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { productService } from "./productService";

// API: get all products
export const getAllProducts = createAsyncThunk(
  "product/allProduct",
  async (thunkAPI) => {
    try {
      return await productService.getProducts();
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

// API: get all products with function
export const getFunctionProducts = createAsyncThunk(
  "product/functionProduct",
  async (url, thunkAPI) => {
    try {
      return await productService.getFuncProducts(url);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

// API: get single products
export const getOneProduct = createAsyncThunk(
  "product/oneProduct",
  async (id, thunkAPI) => {
    try {
      return await productService.getSingleProduct(id);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const initialState = {
  singleCart: null,
  singleProduct: null,
  allProducts: null,
  funcProducts: null,
  message: "",
  isLoading: false,
};

export const productSlice = createSlice({
  name: "product",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // API: get all products
      .addCase(getAllProducts.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAllProducts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.message = "";
        state.allProducts = action.payload;
      })
      .addCase(getAllProducts.rejected, (state, action) => {
        state.isLoading = false;
        state.message = action.error;
      })

      // API: get functions products
      .addCase(getFunctionProducts.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getFunctionProducts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.message = "";
        state.funcProducts = action.payload;
      })
      .addCase(getFunctionProducts.rejected, (state, action) => {
        state.isLoading = false;
        state.message = action.error;
      })

      // API: get one product
      .addCase(getOneProduct.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getOneProduct.fulfilled, (state, action) => {
        state.isLoading = false;
        state.message = "";
        state.singleProduct = action.payload;
      })
      .addCase(getOneProduct.rejected, (state, action) => {
        state.isLoading = false;
        state.message = action.error;
      });
  },
});

export default productSlice.reducer;
