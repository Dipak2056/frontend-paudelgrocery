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
import { Button, Table } from "react-bootstrap";

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
  const handleOnCheckOut = () => {
    fetch("http://localhost:9000/create-checkout-session", {
      method: "POST",
      headers: {
        "Content-Type": "application/Json",
      },
      body: JSON.stringify({
        items: [
          { id: 1, quantity: 3 },
          { id: 2, quantity: 1 },
        ],
      }),
    })
      .then((res) => {
        if (res.ok) return res.json();
        return res.json().then((json) => Promise.reject(json));
      })
      .then(({ url }) => {
        window.location = url;
      })
      .catch((e) => console.error(e.error));
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
              <div className="cart__table">
                <Table striped>
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Product</th>
                      <th>Price</th>
                      <th>Quantity</th>
                      <th>Total</th>
                    </tr>
                  </thead>
                  <tbody>
                    {cart.cartItems?.map((cartItem, i) => (
                      <tr key={i}>
                        <td>{i + 1}</td>
                        <td className="text-center">
                          <div className="d-flex">
                            <img
                              style={{ width: "100px", height: "100px" }}
                              src={
                                process.env.REACT_APP_IMAGE_URL +
                                cartItem.images[0].slice(6)
                              }
                              alt=""
                            />
                            <div className="flex-wrap">
                              <div>{cartItem.name}</div>
                              <Button
                                className="product__remove mt-1"
                                variant="danger"
                                onClick={() => handleRemoveFromCart(cartItem)}
                              >
                                Remove{" "}
                                <i className=" fa-solid fa-trash-can"></i>
                              </Button>
                            </div>
                          </div>
                        </td>
                        <td>{cartItem.price}</td>
                        <td className=" text-center">
                          <div className="d-flex align-items-center">
                            <Button
                              className="btn-sm m-1"
                              onClick={() => handleOnDecrease(cartItem)}
                            >
                              -
                            </Button>
                            {cartItem.cartQuantity}{" "}
                            <Button
                              className="btn-sm m-1"
                              onClick={() => handleOnIncrease(cartItem)}
                            >
                              +
                            </Button>
                          </div>
                        </td>
                        <td>{cartItem.price * cartItem.cartQuantity}</td>
                      </tr>
                    ))}
                  </tbody>
                </Table>

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
                  <button className="cart-btn" onClick={handleOnCheckOut}>
                    Checkout
                  </button>
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
