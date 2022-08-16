import React from "react";
import DefaultLayout from "../../components/layouts/DefaultLayout";
import { CarouselComponent } from "../../components/carousels/Carousels";
import { OfferComponent } from "../../components/offers/Offers";
import { SpecialItemComponent } from "../../components/special/SpecialItem";
import AllProductsOnLandingPage from "../../components/allproducts/AllProductsOnLandingPage";

const LandingPage = () => {
  return (
    <div>
      <DefaultLayout>
        <div className="landing-page-body p-2">
          <CarouselComponent />
          <OfferComponent />
          <SpecialItemComponent />
          <AllProductsOnLandingPage />
        </div>
      </DefaultLayout>
    </div>
  );
};

export default LandingPage;