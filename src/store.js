import { configureStore } from "@reduxjs/toolkit";

import categoryReducer from "../src/pages/LandingPage/category.slice";
import productReducer from "../src/pages/LandingPage/products.slice";
import cartReducer from "./pages/cart-page/cart.slice";

const store = configureStore({
  reducer: {
    category: categoryReducer,
    product: productReducer,
    cart: cartReducer,
  },
});

export default store;
