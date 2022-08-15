import "./offers.css";
import React from "react";
import { OfferCard } from "../offers-card/OfferCard";

export const OfferComponent = () => {
  return (
    <div className="offer">
      <h2>Our services</h2>
      <div className="offer-card-section">
        <OfferCard />
        <OfferCard />
        <OfferCard />
        <OfferCard />
      </div>
    </div>
  );
};
