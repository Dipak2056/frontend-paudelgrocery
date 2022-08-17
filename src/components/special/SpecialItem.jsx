import "./special-items.css";
import React from "react";
import { ProductCard } from "../product-card/ProductCard";
import { useState } from "react";

export const SpecialItemComponent = () => {
  const [specialcardproducts, setspecialcardProducts] = useState([]);

  return (
    <section className="special-item">
      <h2>Special items</h2>
      <section className="special-item-section">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </section>
    </section>
  );
};
