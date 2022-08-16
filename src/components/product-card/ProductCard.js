import "./product-card.css";
import React from "react";

export const ProductCard = () => {
  return (
    <div className="product__card">
      <div className="product__card--header">special buys</div>
      <div className="product__card--body">
        <div className="product-image">
          <img
            src="https://i.pinimg.com/originals/d1/11/43/d11143e71df51f4b4c15b8379ffea8ab.jpg"
            alt="product"
          />
        </div>
        <div className="product__card--product--name align-center">
          <strong>The Nivea total repair 5</strong>
        </div>
        <div className="product__card--description">
          <strong>Description:</strong> Very good product with highest review in
          the store, that is definetely gonna blow your mind.
        </div>
        <div className="product__card--ratings ">
          <strong>Ratings: </strong>
          <i className="fa-solid fa-star text-warning" />
          <i className="fa-solid fa-star text-warning" />
          <i className="fa-solid fa-star-half-alt text-warning" />
        </div>
        <div className="product__card--price">
          {" "}
          <strong>Price: </strong>$40
        </div>
      </div>
      <div className="product__card--footer">
        <div className="shop-now-button">
          <button>Shop Now</button>
        </div>
        <div className="shop-now-button">
          <button>
            Add to cart <i className="fa-solid fa-cart-shopping"></i>
          </button>
        </div>
      </div>
    </div>
  );
};
