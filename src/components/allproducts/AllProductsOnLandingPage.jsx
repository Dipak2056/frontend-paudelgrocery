import React from "react";
import { ProductCard } from "../product-card/ProductCard";
import "./Allproducts.style.css";
const AllProductsOnLandingPage = () => {
  return (
    <section className="landing__page--product--section">
      <div className="section__header">
        <h2>All Products</h2>
      </div>
      <div className="section__body">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </section>
  );
};

export default AllProductsOnLandingPage;
