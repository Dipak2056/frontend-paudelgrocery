import React from "react";
import DefaultLayout from "../../components/layouts/DefaultLayout";
import "./CartPage.css";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  addToCart,
  decreaseCart,
  getTotals,
  removeFromCart,
} from "./cart.slice";
import { useEffect } from "react";

const CartPage = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);

  useEffect(() => {
    dispatch(getTotals());
  }, [cart, dispatch]);
  const handleRemoveFromCart = (cartItem) => {
    dispatch(removeFromCart(cartItem));
  };
  const handleOnDecrease = (cartItem) => {
    dispatch(decreaseCart(cartItem));
  };
  const handleOnIncrease = (cartItem) => {
    dispatch(addToCart(cartItem));
  };
  return (
    <DefaultLayout>
      <div className="cart__page--container">
        <div className="cart__body">
          {cart.cartItems.length === 0 ? (
            <>
              <div className="cart__empty--img">
                <h2 className="text-center">You have empty cart!!</h2>
                <figure>
                  <img
                    src="https://cdni.iconscout.com/illustration/free/thumb/empty-cart-4085814-3385483.png"
                    alt=""
                  />
                </figure>
              </div>
            </>
          ) : (
            <>
              {" "}
              <div className="cart__table table">
                <div className="cart__table--header ">
                  <div className="cart__table--header--item product">
                    Product
                  </div>
                  <div className="cart__table--header--item quantity">
                    Quantity
                  </div>
                  <div className="cart__table--header--item price">Price</div>
                </div>
                {cart.cartItems?.map((cartItem) => (
                  <div className="cart__table--body">
                    <div className="cart__table--body--product--desc detail">
                      <div className="figure picture">
                        <img
                          className="product__img"
                          src={cartItem.image}
                          alt=""
                        />
                      </div>
                      <div className="product__name name">{cartItem.title}</div>
                      <div className="product__price price">
                        ${cartItem.price}
                      </div>
                      <div
                        className="product__remove remove"
                        onClick={() => handleRemoveFromCart(cartItem)}
                      >
                        Remove
                      </div>
                    </div>
                    <div className="cart__table--body--product--qty quantity">
                      <button
                        className="decrease__button"
                        onClick={() => handleOnDecrease(cartItem)}
                      >
                        -
                      </button>
                      {cartItem.cartQuantity}
                      <button
                        className="increase__button"
                        onClick={() => handleOnIncrease(cartItem)}
                      >
                        +
                      </button>
                    </div>
                    <div className="cart__table--body--product--price totalprice">
                      ${cartItem.price * cartItem.cartQuantity}
                    </div>
                  </div>
                ))}

                <hr />
                <div className="cart__table--footer">
                  <div className="cart__table--footer--subtotal">
                    <span className="subtotal">Sub Total:</span>{" "}
                    <span>${(0.9 * cart.cartTotalAmount).toFixed(2)}</span>
                  </div>
                  <div className="cart__table--footer--tax">
                    <span className="tax">Tax:</span>{" "}
                    <span>{(0.1 * cart.cartTotalAmount).toFixed(2)}</span>
                  </div>
                  <div className="cart__table--footer--total">
                    <span className="total">Total:</span>{" "}
                    <span>{cart.cartTotalAmount.toFixed(2)}</span>
                  </div>
                  <button className="cart-btn">Checkout</button>
                </div>
              </div>
            </>
          )}

          <div className="cart__button">
            <Link to="/">
              <button className="cart-btn">Add Products</button>
            </Link>
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
};

export default CartPage;
