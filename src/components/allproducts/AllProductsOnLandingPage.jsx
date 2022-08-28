import React, { useState } from "react";
import { ProductCard } from "../product-card/ProductCard";
import "./Allproducts.style.css";

const AllProductsOnLandingPage = ({ products }) => {
  const [dispProducts, setDispProduct] = useState(5);

  const displayMore = () => {
    setDispProduct(dispProducts + 5);
  };

  return (
    <section className="landing__page--product--section">
      <div className="section__header">
        <h2>All Products</h2>
      </div>
      <div className="section__body">
        {products.slice(0, dispProducts).map((product) => {
          return (
            <ProductCard
              product={product}
              _id={product._id}
              key={product._id}
              name={product.name}
              price={product.price}
              description={product.description}
              images={product.images}
              ratings={product.ratings}
            />
          );
        })}
      </div>
      <div className="shop-now-button">
        {dispProducts <= 20 ? (
          <div className="explore--more--btn" onClick={() => displayMore()}>
            <span>
              browse more{" "}
              <i className="fa-solid fa-circle-arrow-down fa-bounce"></i>{" "}
            </span>
          </div>
        ) : (
          <div
            className="explore--more--btn"
            onClick={() => window.scrollTo({ top: 80, behavior: "smooth" })}
          >
            <span>
              {" "}
              Go to Top{" "}
              <i className="fa-solid fa-circle-arrow-up fa-bounce"></i>{" "}
            </span>
          </div>
        )}
      </div>
    </section>
  );
};

export default AllProductsOnLandingPage;
