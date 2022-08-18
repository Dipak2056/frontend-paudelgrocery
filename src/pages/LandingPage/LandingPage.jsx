import React from "react";
import DefaultLayout from "../../components/layouts/DefaultLayout";
import { CarouselComponent } from "../../components/carousels/Carousels";
import { OfferComponent } from "../../components/offers/Offers";
import { SpecialItemComponent } from "../../components/special/SpecialItem";
import AllProductsOnLandingPage from "../../components/allproducts/AllProductsOnLandingPage";
//redux
//get and set all the products from server
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchProductsAction } from "./products.action";
//for animation
import AnimatedPage from "../../AnimatedPage";
import { useLocation } from "react-router-dom";

const LandingPage = () => {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.product);
  const location = useLocation();
  useEffect(() => {
    dispatch(fetchProductsAction());
  }, [dispatch]);

  return (
    <div>
      <AnimatedPage>
        <DefaultLayout key={location.pathname} location={location}>
          <div className="landing-page-body p-2">
            <CarouselComponent />
            <OfferComponent />
            <SpecialItemComponent />

            <AllProductsOnLandingPage products={products} />
          </div>
        </DefaultLayout>
      </AnimatedPage>
    </div>
  );
};

export default LandingPage;
