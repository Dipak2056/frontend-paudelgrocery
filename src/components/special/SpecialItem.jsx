import "./special-items.css";
import React, { useEffect } from "react";
import { ProductCard } from "../product-card/ProductCard";
import { useState } from "react";
//redux
import { useSelector } from "react-redux";

export const SpecialItemComponent = () => {
  const [specialCard, setSpecialCard] = useState([]);
  const { categories } = useSelector((state) => state.category);
  const { products } = useSelector((state) => state.product);

  const createSpecial = () => {
    let specialcard = [];
    for (let i = 0; i < categories.length; i++) {
      specialcard.push(
        products.filter((item) => item.category === categories[i])[0]
      );
    }
    return specialcard;
  };
  useEffect(() => {
    setSpecialCard(createSpecial());
  }, []);
  return (
    <section className="special-item">
      <h2>Special items</h2>
      <section className="special-item-section">
        {specialCard.map((item, i) => (
          <ProductCard
            key={i}
            category={item.category}
            title={item.title}
            price={item.price}
            description={item.description}
            image={item.image}
            rating={item.rating.rate}
          />
        ))}
      </section>
    </section>
  );
};
