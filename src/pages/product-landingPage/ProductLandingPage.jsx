import React, { useEffect } from "react";
import "./ProductLandingPage.css";
import { ProductCard } from "../../components/product-card/ProductCard";
import DefaultLayout from "../../components/layouts/DefaultLayout";
import { useParams } from "react-router-dom";
//redux
import { useDispatch, useSelector } from "react-redux";
import { fetchProductsAction } from "../LandingPage/products.action";
import { addToCart, getTotals } from "../cart-page/cart.slice";

const ProductLandingPage = () => {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.product);

  useEffect(() => {
    dispatch(fetchProductsAction());
  }, [dispatch]);

  const { slug } = useParams();
  const product = products.find((product) => product.slug === slug);

  const handleOnAddToCart = (product) => {
    dispatch(addToCart(product));
    dispatch(getTotals());
  };
  return (
    <DefaultLayout>
      <section className="productlanding__main">
        <div className="productlanding__card">
          <div className="productlanding--img">
            <img
              src={process.env.REACT_APP_IMAGE_URL + product.images[0].slice(6)}
              alt=""
            />
          </div>
          <div className="productlanding--description">
            <>
              <div className="product__landing--product--title">
                {product.name}
              </div>
              <div className="product__landing--product--description">
                {product.description}
              </div>
              <div className="productlanding--description--imgs">
                <div className="productlanding--description--smallimg">
                  <img
                    src={
                      process.env.REACT_APP_IMAGE_URL +
                      product.images[0].slice(6)
                    }
                    alt=""
                  />
                </div>
              </div>
              <div className="product__landing--product--price">
                <strong>Price:</strong> ${product.price}
              </div>
              <div className="product__landing--product--price">
                <strong>Ratings:{product.ratings}</strong>
                <i className="fa-solid fa-star text-warning"></i>
              </div>
            </>
            <button
              className="product--card--footer"
              onClick={() => handleOnAddToCart(product)}
            >
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
              .filter((product) => product.ratings > 3 && product.slug !== slug)
              .slice(0, 3)
              .map((product) => (
                <ProductCard
                  product={product}
                  key={product._id}
                  _id={product._id}
                  price={product.price}
                  description={product.description}
                  name={product.name}
                  images={product.images}
                  ratings={product.ratings}
                />
              ))}
          </div>
        </div>
      </section>
    </DefaultLayout>
  );
};

export default ProductLandingPage;
