import React from "react";
import DefaultLayout from "../../components/layouts/DefaultLayout";
import { ProductCard } from "../../components/product-card/ProductCard";
import "./ProductsPage.css";
const ProductsPage = () => {
  return (
    <DefaultLayout>
      <div className="all__product">
        <hr />
        <section className="all__products--select--section">
          <h3 className="selection--header bg-warning">Select</h3>
          <ul className="all__categories--list">
            <li>Fruits</li>
            <li>Vegetables </li>
            <li>Fresh Produce</li>
            <li>Groceries</li>
            <li>Home-ware</li>
            <li>Other</li>
          </ul>
        </section>

        <section className="all__products--section">
          <h2>Showing result for "fruits" </h2>
          <div className="selection--area">
            <span>
              select categories
              <select className="categories__selection">
                <option value="default">categories</option>
                <option value="price">fruits</option>
                <option value="product">vegetables</option>
                <option value="latest">groceries</option>
                <option value="other">others</option>
              </select>
            </span>
            <span className="search--and--sort">
              <span className="sortby">
                sort product by:
                <select>
                  <option value="default">sort by</option>
                  <option value="price">Price</option>
                  <option value="product">Product</option>
                  <option value="latest">Latest</option>
                </select>
              </span>
            </span>
          </div>

          <hr />

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
