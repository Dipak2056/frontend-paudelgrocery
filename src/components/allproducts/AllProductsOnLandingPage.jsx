import React from "react";
import { ProductCard } from "../product-card/ProductCard";
import "./Allproducts.style.css";
const AllProductsOnLandingPage = ({ products }) => {
  return (
    <section className="landing__page--product--section">
      <div className="section__header">
        <h2>All Products</h2>
      </div>
      <div className="section__body">
        {products.map((product) => {
          return (
            <ProductCard
              id={product.id}
              key={product.id}
              title={product.title}
              price={product.price}
              description={product.description}
              image={product.image}
              rating={product.rating.rate}
            />
          );
        })}
      </div>
    </section>
  );
};

export default AllProductsOnLandingPage;
