import "./offers.css";
import React from "react";
import { OfferCard } from "../offers-card/OfferCard";

export const OfferComponent = () => {
  return (
    <div className="offer">
      <h2>Welcome Paudel grocery</h2>
      <div className="offer-card-section">
        <OfferCard />
        <OfferCard />
        <OfferCard />
        <OfferCard />
      </div>
    </div>
  );
};
