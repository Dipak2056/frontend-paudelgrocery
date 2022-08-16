import React from "react";
import "./ProductLandingPage.css";
import DefaultLayout from "../../components/layouts/DefaultLayout";

const ProductLandingPage = () => {
  return (
    <DefaultLayout>
      <section className="productLanding__main">
        <div className="productlanding__card">
          <div className="prodiuct__landing--img">
            <img
              src="https://dduhxx0oznf63.cloudfront.net/images/products/300x300/461781023_f8676288bed6b97.jpg"
              alt=""
            />
          </div>
          <div className="product__landing--description">
            <div className="product__landing--product--title">
              People Shampoo or conditioner
            </div>
            <div className="product__landing--product--description">
              Very good product with no side effect. Easy to apply.
            </div>
            <div className="product__landing--product--price">$8.00 each</div>
            <div className="product__landing--description--footer">
              <button>Add to cart</button>
            </div>
          </div>
        </div>
      </section>
    </DefaultLayout>
  );
};

export default ProductLandingPage;
