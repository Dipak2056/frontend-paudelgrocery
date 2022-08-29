import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import DefaultLayout from "../../components/layouts/DefaultLayout";
import { ProductCard } from "../../components/product-card/ProductCard";
import "./ProductsPage.css";

import { fetchProductsAction } from "../LandingPage/products.action";
import AnimatedPage from "../../AnimatedPage";
import { useParams } from "react-router";
import { fetchCategoriesAction } from "../LandingPage/category.action";

const ProductsPage = () => {
  const dispatch = useDispatch();

  const { products } = useSelector((state) => state.product);
  const { categories } = useSelector((state) => state.category);

  const [selectedProducts, setSelectedproducts] = useState(products);
  const [selectedCategory, setSelectedCategory] = useState("");
  useEffect(() => {
    dispatch(fetchProductsAction());
    dispatch(fetchCategoriesAction());
  }, [dispatch]);

  function filterProducts(value) {
    if (value === "DEFAULT") {
      setSelectedproducts(
        products
          .slice()
          .filter((product) => product.category === selectedCategory)
      );
    }
    setSelectedproducts(products);
    if (value === "LOW_TO_HIGH") {
      setSelectedproducts(
        products
          .slice()
          .filter((product) => product.category === selectedCategory)
          .sort((a, b) => a.price - b.price)
      );
    }
    if (value === "HIGH_TO_LOW") {
      setSelectedproducts(
        products
          .slice()
          .filter((product) => product.category === selectedCategory)
          .sort((a, b) => b.price - a.price)
      );
    }
    if (value === "RATING") {
      setSelectedproducts(
        products
          .slice()
          .filter((product) => product.category === selectedCategory)

          .sort((a, b) => parseInt(b.rating.rate) - parseInt(a.rating.rate))
      );
    }
  }
  function filterCategories(value) {
    setSelectedCategory(value);
    setSelectedproducts(
      products.slice().filter((product) => product.category === value)
    );
  }

  return (
    <AnimatedPage>
      <DefaultLayout>
        <div className="all__product">
          <hr />
          {/* <section className="all__products--select--section">
            <h3 className="selection--header bg-warning">Select</h3>
            <ul className="all__categories--list">
              {categories.map((category, i) => {
                return (
                  <li key={i} onClick={() => filterCategories(category)}>
                    {category}
                  </li>
                );
              })}
            </ul>
          </section> */}

          <section className="all__products--section">
            {/* <h2>Showing result for {selectedCategory} </h2>
            <div className="selection--area">
              <span>
                select categories
                <select
                  className="categories__selection"
                  onChange={(e) => filterCategories(e.target.value)}
                >
                  <option>categories</option>

                  {categories.map((category, i) => (
                    <option key={i} value={category}>
                      {category}
                    </option>
                  ))}
                </select>
              </span>
              <span className="search--and--sort">
                <span className="sortby">
                  sort product by:
                  <select
                    id="filter"
                    defaultValue="DEFAULT"
                    onChange={(e) => filterProducts(e.target.value)}
                  >
                    <option value="DEFAULT">sort by</option>
                    <option value="LOW_TO_HIGH">Price low to high</option>
                    <option value="HIGH_TO_LOW">Price high to low</option>
                    <option value="RATING">Rating</option>
                  </select>
                </span>
              </span>
            </div>

            <hr /> */}

            <section className="all__products--productsection">
              {products.map((product) => (
                <ProductCard
                  product={product}
                  key={product._id}
                  _id={product._id}
                  name={product.name}
                  images={product.images}
                  price={product.price}
                  description={product.description}
                  ratings={product.ratings}
                />
              ))}
            </section>
          </section>
        </div>
      </DefaultLayout>
    </AnimatedPage>
  );
};

export default ProductsPage;
