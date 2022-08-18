import "./App.css";
import "react-toastify/dist/ReactToastify.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import CartPage from "./pages/cart-page/CartPage";
import LandingPage from "./pages/LandingPage/LandingPage";
import ProductsPage from "./pages/Product-page/ProductsPage";
import ProductLandingPage from "./pages/product-landingPage/ProductLandingPage";

import { ToastContainer } from "react-toastify";
import { useDispatch } from "react-redux";
import { getTotals } from "./pages/cart-page/cart.slice";
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
          <Route path="/products/:id" element={<ProductLandingPage />} />
        </Routes>
        <ToastContainer></ToastContainer>
      </BrowserRouter>
    </div>
  );
}

export default App;
