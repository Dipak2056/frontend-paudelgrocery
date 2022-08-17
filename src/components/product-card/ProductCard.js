import "./product-card.css";
import React from "react";

export const ProductCard = ({
  id,
  image,
  title,
  rating,
  description,
  price,
  category,
  ratedby,
}) => {
  return (
    <div className="product__card">
      <div className="product__card--header">{category ? category : ""}</div>
      <div className="product__card--body">
        <div className="product--image">
          <img src={image} alt="product" />
        </div>
        <div className="product__card--product--name align-center">
          <strong>{title}</strong>
        </div>
        <div className="product__card--description">
          <strong>Description:</strong> {description}
        </div>
        <div className="product__card--ratings ">
          <strong>Ratings: </strong>
          <span>
            {" "}
            <span>
              {" "}
              <i className="fa-solid fa-star text-warning" />
              {rating}
            </span>
            {ratedby ? `rated by:(${ratedby}) customers` : ""}
          </span>
        </div>
        <div className="product__card--price">
          {" "}
          <strong>Price: </strong>
          {price}
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
