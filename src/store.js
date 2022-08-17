import { configureStore } from "@reduxjs/toolkit";

import categoryReducer from "../src/pages/LandingPage/category.slice";
import productReducer from "../src/pages/LandingPage/products.slice";

const store = configureStore({
  reducer: {
    category: categoryReducer,
    product: productReducer,
  },
});

export default store;
