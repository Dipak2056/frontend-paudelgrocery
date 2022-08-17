import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  products: [],
};
const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setProducts: (state, { payload }) => {
      state.products = payload;
    },
  },
});
const { reducer, actions } = productSlice;
export const { setProducts } = actions;
export default reducer;
