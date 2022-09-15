import React from "react";
import DefaultLayout from "../../components/layouts/DefaultLayout";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeEverything } from "../cart-page/cart.slice";
const PurchaseSuccessPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    localStorage.setItem("cartItems", "");
    dispatch(removeEverything());
  }, []);
  return (
    <DefaultLayout>
      <div
        className="login--page__body"
        style={{ backgroundColor: "rgb(238, 238, 238)" }}
      >
        <div className="card w-80 m-auto">
          <div className=" w-50 m-auto">
            <lottie-player
              src="https://assets6.lottiefiles.com/packages/lf20_EQDsH8Z54K.json"
              background="transparent"
              speed="1"
              loop
              autoplay
            ></lottie-player>
          </div>
          <div className="w-80 m-auto">
            <h4>Your payment has been successfull.</h4>
            <h6>
              You will receive an email very soon with the details of your
              purchase.
            </h6>
            <p>Thank you for shopping with us!</p>
          </div>
          <div className="btn btn-success btn-lg">
            <Link className="nav-link" to="/">
              Home
            </Link>
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
};

export default PurchaseSuccessPage;
