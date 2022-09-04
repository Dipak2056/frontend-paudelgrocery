import { configureStore } from "@reduxjs/toolkit";

import categoryReducer from "../src/pages/LandingPage/category.slice";
import productReducer from "../src/pages/LandingPage/products.slice";
import cartReducer from "./pages/cart-page/cart.slice";
import customerReducer from "./components/login-signupforms/signInUp.slice";

const store = configureStore({
  reducer: {
    category: categoryReducer,
    product: productReducer,
    cart: cartReducer,
    customer: customerReducer,
  },
});

export default store;
