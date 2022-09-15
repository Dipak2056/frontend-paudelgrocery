import React from "react";
import { Link } from "react-router-dom";
import DefaultLayout from "../../components/layouts/DefaultLayout";

const PurchaseErrorPage = () => {
  return (
    <DefaultLayout>
      <div
        className="login--page__body"
        style={{ backgroundColor: "rgb(238, 238, 238)" }}
      >
        <div className="card w-80 m-auto">
          <div className=" w-50 m-auto">
            <lottie-player
              src="https://assets8.lottiefiles.com/packages/lf20_71h1pdhm.json"
              background="transparent"
              speed="1"
              loop
              autoplay
            ></lottie-player>
          </div>
          <div className="w-80 m-auto">
            <h4>Your payment has been successfull.</h4>

            <p>Please try with different card.</p>
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

export default PurchaseErrorPage;
