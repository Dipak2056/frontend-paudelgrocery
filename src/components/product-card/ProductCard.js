import "./product-card.css";
import React from "react";

export const ProductCard = () => {
  return (
    <div className="product-card">
      <div className="product-card-header">special buys</div>
      <div className="product-card-body">
        <div className="product-image">
          <img
            src="https://i.pinimg.com/originals/d1/11/43/d11143e71df51f4b4c15b8379ffea8ab.jpg"
            alt="product"
          />
        </div>
        <div className="product-description">Very good product</div>
      </div>
      <div className="product-card-footer">
        <div className="shop-now-button"></div>
      </div>
    </div>
  );
};
