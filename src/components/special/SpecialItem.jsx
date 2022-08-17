import "./special-items.css";
import React, { useEffect } from "react";
import { ProductCard } from "../product-card/ProductCard";
import { useState } from "react";
//redux
import { useSelector } from "react-redux";

export const SpecialItemComponent = () => {
  const { products } = useSelector((state) => state.product);

  return (
    <section className="special-item">
      <h2>Best seller</h2>
      <section className="special-item-section">
        {products
          .filter((product) => product.rating.rate > 4)
          .slice(0, 4)
          .map((item, i) => (
            <ProductCard
              key={i}
              id={item.id}
              category={item.category}
              title={item.title}
              price={item.price}
              description={item.description}
              image={item.image}
              rating={item.rating.rate}
              ratedby={item.rating.count}
            />
          ))}
      </section>
    </section>
  );
};
