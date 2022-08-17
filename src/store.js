import { configureStore } from "@reduxjs/toolkit";

import categoryReducer from "../src/pages/LandingPage/category.slice";

const store = configureStore({
  reducer: {
    category: categoryReducer,
  },
});

export default store;
