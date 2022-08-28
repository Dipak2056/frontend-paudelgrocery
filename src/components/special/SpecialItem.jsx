import "./special-items.css";
import React from "react";
import { ProductCard } from "../product-card/ProductCard";
//redux
import { useSelector } from "react-redux";

export const SpecialItemComponent = () => {
  const { products } = useSelector((state) => state.product);

  return (
    <section className="special-item">
      <h2>Best seller</h2>
      <section className="special-item-section">
        {products
          .filter((product) => product.ratings > 4)
          .slice(0, 4)
          .map((item, i) => (
            <ProductCard
              product={item}
              key={i}
              _id={item._id}
              catId={item.catId}
              name={item.name}
              price={item.price}
              description={item.description}
              images={item.images}
              ratings={item.ratings}
            />
          ))}
      </section>
    </section>
  );
};
