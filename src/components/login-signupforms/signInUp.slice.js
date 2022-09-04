import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  user: {},
};
const customerSlice = createSlice({
  name: "userSlice",
  initialState,
  reducers: {
    setUser: (state, { payload }) => {
      state.user = payload;
    },
  },
});
const { reducer, actions } = customerSlice;
export const { setUser } = actions;
export default reducer;
