import React from "react";
import DefaultLayout from "../../components/layouts/DefaultLayout";
import "./CartPage.css";
import { Link } from "react-router-dom";

const CartPage = () => {
  return (
    <DefaultLayout>
      <section className="cart__page">
        <div className="cart__page--container">
          <div className="cart__header">
            <h1>Your cart is currently empty</h1>
          </div>
          <div className="cart__body">
            <div className="cart__empty--img">
              <figure>
                <img
                  src="https://cdni.iconscout.com/illustration/free/thumb/empty-cart-4085814-3385483.png"
                  alt=""
                />
              </figure>
            </div>
            <div className="cart__button">
              <Link to="/products">
                <button className="cart-btn">Add Products</button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </DefaultLayout>
  );
};

export default CartPage;
