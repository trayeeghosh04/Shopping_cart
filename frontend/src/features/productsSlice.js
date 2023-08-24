import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    items: [],
    status: null,
    
}

export const productsFetch = createAsyncThunk(
    "products/productsFetch",
    async () => {
    
       const response = await axios.get("http://localhost:8000/products");
       return response?.data

    }
);

const productsSlice = createSlice({
    name: "products",
    initialState,
    reducers: {},
    extraReducers:{
      [productsFetch.pending]: (state, action) => {
        //immer
        state.status = "pending";
      },
      [productsFetch.fulfilled]: (state, action) => {
        //immer
        state.status = "success";
        state.items = action.payload;
      },
      [productsFetch.rejected]: (state, action) => {
        //immer
        state.status = "rejected";
       
      },
    },
});

export default productsSlice.reducer;