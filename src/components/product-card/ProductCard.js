import "./product-card.css";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

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
  const [img, setImg] = useState();
  useEffect(() => {
    const imageskeleton = new Image();
    imageskeleton.src = image;
    imageskeleton.onload = () => {
      setTimeout(() => {
        setImg(imageskeleton);
      }, 400);
    };
  }, []);
  return (
    <>
      {img ? (
        <>
          <div className="product__card">
            {category ? (
              <div className="product__card--header">{category}</div>
            ) : (
              ""
            )}
            <div className="product__card--body">
              <Link
                to={`/products/${id}`}
                style={{ textDecoration: "none", color: "white" }}
              >
                <div className="product--image">
                  <img src={image} alt="product" />
                </div>{" "}
              </Link>

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
                <Link
                  to={`/products/${id}`}
                  style={{ textDecoration: "none", color: "white" }}
                >
                  {" "}
                  <button>Shop Now</button>
                </Link>
              </div>
              <div className="shop-now-button">
                <button>
                  Add to cart <i className="fa-solid fa-cart-shopping"></i>
                </button>
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="product__img--skeleton"> </div>
          <div className="skeleton product__title--skeleton"></div>
          <div className="skeleton product__rating--skeleton"></div>
          <div className="skeleton product__price--skeleton"></div>
        </>
      )}
    </>
  );
};
