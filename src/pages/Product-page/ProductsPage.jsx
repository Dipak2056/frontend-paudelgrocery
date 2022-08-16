import React from "react";
import DefaultLayout from "../../components/layouts/DefaultLayout";
import { ProductCard } from "../../components/product-card/ProductCard";
import "./ProductsPage.css";
const ProductsPage = () => {
  return (
    <DefaultLayout>
      <div className=" all__product">
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
          <h1>We offer range of products</h1>
          <span className="search--and--sort">
            {" "}
            <h2>Showing result for "fruits" </h2>
            <span className="sortby">
              {" "}
              sort product by:
              <select>
                <option value="default">
                  <i className="fa-solid fa-arrow-down-1-9">select</i>
                </option>
                <option value="price">Price</option>
                <option value="product">Product</option>
                <option value="latest">Latest</option>
              </select>
            </span>
          </span>

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
