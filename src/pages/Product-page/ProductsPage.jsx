import React from "react";
import DefaultLayout from "../../components/layouts/DefaultLayout";
import { ProductCard } from "../../components/product-card/ProductCard";
import "./ProductsPage.css";
const ProductsPage = () => {
  return (
    <DefaultLayout>
      <div className="all__product">
        <section className="all__products--select--section">
          <h3>Select</h3>
          <ul className="all__categories--list">
            <li>Fruits</li>
            <li>Vegetables</li>
            <li>Fresh Produce</li>
            <li>Groceries</li>
            <li>Home-ware</li>
            <li>Other</li>
          </ul>
        </section>
        <section className=" all__products--section">
          <h1>We offer range of products</h1>

          <section className="all__products--productsection">
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </section>
        </section>
      </div>
    </DefaultLayout>
  );
};

export default ProductsPage;
