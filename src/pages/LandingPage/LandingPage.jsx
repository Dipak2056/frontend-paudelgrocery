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
import AnimatedPage from "../../AnimatedPage";

const LandingPage = () => {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.product);

  useEffect(() => {
    dispatch(fetchProductsAction());
  }, []);
  return (
    <div>
      <AnimatedPage>
        <DefaultLayout>
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
