import "./App.css";
import "react-toastify/dist/ReactToastify.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import CartPage from "./pages/cart-page/CartPage";
import LandingPage from "./pages/LandingPage/LandingPage";
import ProductsPage from "./pages/Product-page/ProductsPage";
import ProductLandingPage from "./pages/product-landingPage/ProductLandingPage";
import { CategoryLandingPage } from "./pages/categories-landing/CategoryLandingPage";

import { ToastContainer } from "react-toastify";
import { useDispatch } from "react-redux";
import { getTotals } from "./pages/cart-page/cart.slice";
import Loginpage from "./pages/login-signup/Loginpage";
import SignUpPage from "./pages/login-signup/Signup";
import UpdateProfile from "./pages/update-profile/UpdateProfile";
import PurchaseSuccessPage from "./pages/purchasesuccesserror/PurchaseSuccessPage";
import PurchaseErrorPage from "./pages/purchasesuccesserror/PurchaseErrorPage";
function App() {
  const dispatch = useDispatch();
  dispatch(getTotals());
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/products/:slug" element={<ProductLandingPage />} />
          <Route
            path="/categories/:category"
            element={<CategoryLandingPage />}
          />
          <Route path="/shop/securelogin" element={<Loginpage />} />
          <Route path="/shop/signup/one-login" element={<SignUpPage />} />
          <Route path="/customer/update-profile" element={<UpdateProfile />} />
          <Route path="/purchase/success" element={<PurchaseSuccessPage />} />
          <Route path="/purchase/fail" element={<PurchaseErrorPage />} />
        </Routes>
        <ToastContainer></ToastContainer>
      </BrowserRouter>
    </div>
  );
}

export default App;
