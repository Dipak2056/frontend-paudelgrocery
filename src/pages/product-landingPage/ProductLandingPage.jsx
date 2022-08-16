import React from "react";
import "./ProductLandingPage.css";
import { ProductCard } from "../../components/product-card/ProductCard";
import DefaultLayout from "../../components/layouts/DefaultLayout";

const ProductLandingPage = () => {
  return (
    <DefaultLayout>
      <section className="productlanding__main">
        <div className="productlanding__card">
          <div className="productlanding--img">
            <img
              src="https://dduhxx0oznf63.cloudfront.net/images/products/300x300/461781023_f8676288bed6b97.jpg"
              alt=""
            />
          </div>
          <div className="productlanding--description">
            <>
              <div className="product__landing--product--title">
                People Shampoo or conditioner
              </div>
              <div className="product__landing--product--description">
                Very good product with no side effect. Easy to apply.
              </div>
              <div className="productlanding--description--imgs">
                <div className="productlanding--description--smallimg">
                  <img
                    src="https://dduhxx0oznf63.cloudfront.net/images/products/300x300/461781023_f8676288bed6b97.jpg"
                    alt=""
                  />
                </div>
                <div className="productlanding--description--smallimg">
                  <img
                    src="https://dduhxx0oznf63.cloudfront.net/images/products/300x300/461781023_f8676288bed6b97.jpg"
                    alt=""
                  />
                </div>
                <div className="productlanding--description--smallimg">
                  <img
                    src="https://dduhxx0oznf63.cloudfront.net/images/products/300x300/461781023_f8676288bed6b97.jpg"
                    alt=""
                  />
                </div>
              </div>
              <div className="product__landing--product--price">
                <strong>Price:</strong> $8.00
              </div>
              <div className="product__landing--product--price">
                <strong>Ratings:</strong>{" "}
                <i className="fa-solid fa-star text-warning"></i>
              </div>
            </>
            <button className="product--card--footer">
              Add to cart
              <i className="fa-solid fa-shopping-cart"></i>
            </button>
          </div>
        </div>
        <div className="productlanding__card second--card">
          <div className="second--card--title">
            <h2>Recommended Products</h2>
          </div>
          <hr />
          <div className="second--card--product__cards">
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </div>
        </div>
      </section>
    </DefaultLayout>
  );
};

export default ProductLandingPage;
