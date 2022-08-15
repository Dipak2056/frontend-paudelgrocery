import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CartPage from "./pages/cart-page/CartPage";
import LandingPage from "./pages/LandingPage/LandingPage";
import ProductsPage from "./pages/Product-page/ProductsPage";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/products" element={<ProductsPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
