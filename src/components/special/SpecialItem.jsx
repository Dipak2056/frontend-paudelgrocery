import "./special-items.css";
import React from "react";
import { ProductCard } from "../product-card/ProductCard";

export const SpecialItemComponent = () => {
  return (
    <section className="special-item-section">
      <ProductCard />
      <ProductCard />
      <ProductCard />
    </section>
  );
};
