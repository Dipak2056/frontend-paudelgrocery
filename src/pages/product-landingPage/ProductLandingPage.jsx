import React, { useState } from "react";
import "./ProductLandingPage.css";
import { ProductCard } from "../../components/product-card/ProductCard";
import DefaultLayout from "../../components/layouts/DefaultLayout";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchProductsAction } from "../LandingPage/products.action";

const ProductLandingPage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProductsAction());
  }, []);
  const { products } = useSelector((state) => state.product);

  const { id } = useParams();
  const product = products.find((product) => +product.id === +id);
  const [selectedproduct, setSelectedProduct] = useState(product);
  return (
    <DefaultLayout>
      <section className="productlanding__main">
        <div className="productlanding__card">
          <div className="productlanding--img">
            <img src={product.image} alt="" />
          </div>
          <div className="productlanding--description">
            <>
              <div className="product__landing--product--title">
                {product.title}
              </div>
              <div className="product__landing--product--description">
                {product.description}
              </div>
              <div className="productlanding--description--imgs">
                <div className="productlanding--description--smallimg">
                  <img src={product.image} alt="small image" />
                </div>
              </div>
              <div className="product__landing--product--price">
                <strong>Price:</strong> ${product.price}
              </div>
              <div className="product__landing--product--price">
                <strong>Ratings:{product.rating.rate}</strong>
                <i className="fa-solid fa-star text-warning"></i>
                Rated over {product.rating.count} times.
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
            {products
              .filter(
                (product) =>
                  product.rating.rate > 3 &&
                  +product.id !== +id &&
                  product.category === selectedproduct.category
              )
              .slice()
              .map((product) => (
                <ProductCard
                  key={product.id}
                  id={product.id}
                  price={product.price}
                  description={product.description}
                  title={product.title}
                  image={product.image}
                  rating={product.rating.rate}
                />
              ))}
          </div>
        </div>
      </section>
    </DefaultLayout>
  );
};

export default ProductLandingPage;
