import React from "react";
import DefaultLayout from "../../components/layouts/DefaultLayout";
import "./CartPage.css";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart } from "./cart.slice";

const CartPage = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const handleRemoveFromCart = (cartItem) => {
    dispatch(removeFromCart(cartItem));
  };
  return (
    <DefaultLayout>
      <div className="cart__page--container">
        <div className="cart__header">
          <h1>Your cart has 1 product.</h1>
        </div>
        <div className="cart__body">
          {cart.cartItems.length === 0 ? (
            <>
              <div className="cart__empty--img">
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
              <div className="cart__table">
                <div className="cart__table--header">
                  <div className="cart__table--header--item">Product</div>
                  <div className="cart__table--header--item">Quantity</div>
                  <div className="cart__table--header--item">Price</div>
                </div>
                {cart.cartItems?.map((cartItem) => (
                  <div className="cart__table--body">
                    <div className="cart__table--body--product--desc">
                      <div className="figure">
                        <img
                          className="product__img"
                          src={cartItem.image}
                          alt=""
                        />
                      </div>
                      <div>
                        <div className="product__name">{cartItem.title}</div>
                        <div className="product__price">${cartItem.price}</div>
                        <div
                          className="product__remove"
                          onClick={() => handleRemoveFromCart(cartItem)}
                        >
                          Remove
                        </div>
                      </div>
                    </div>
                    <div className="cart__table--body--product--qty">
                      <button>-</button>
                      {cartItem.cartQuantity}
                      <button>+</button>
                    </div>
                    <div className="cart__table--body--product--price">
                      ${cartItem.price * cartItem.cartQuantity}
                    </div>
                  </div>
                ))}

                <hr />
                <div className="cart__table--footer">
                  <div className="cart__table--footer--subtotal">
                    <span className="subtotal">Sub Total:</span>{" "}
                    <span>$80</span>
                  </div>
                  <div className="cart__table--footer--tax">
                    <span className="tax">Tax:</span> <span>$20</span>
                  </div>
                  <div className="cart__table--footer--total">
                    <span className="total">Total:</span> <span>$100</span>
                  </div>
                  <div className="cart__table--checkout--button shop-now-button">
                    <button>Checkout</button>
                  </div>
                </div>
              </div>
            </>
          )}

          <div className="cart__button">
            <Link to="/products">
              <button className="cart-btn">Add Products</button>
            </Link>
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
};

export default CartPage;
