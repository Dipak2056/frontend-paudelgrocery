import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import DefaultLayout from "../../components/layouts/DefaultLayout";
import { ProductCard } from "../../components/product-card/ProductCard";
import "./ProductsPage.css";

import AnimatedPage from "../../AnimatedPage";

const ProductsPage = () => {
  const { products } = useSelector((state) => state.product);
  const { categories } = useSelector((state) => state.category);
  //to make the subCategories only appear at the aside bar
  const childCategories = categories.filter((item) => item.parentCatId);

  const [selectedProducts, setSelectedproducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(childCategories);

  useEffect(() => {
    setSelectedproducts(products);
  }, [products]);

  function filterProducts(value) {
    if (value === "DEFAULT") {
      setSelectedproducts(
        products.slice().filter((product) => product.catId === selectedCategory)
      );
    }
    setSelectedproducts(products);
    if (value === "LOW_TO_HIGH") {
      setSelectedproducts(
        products
          .slice()
          .filter((product) => product.catId === selectedCategory)
          .sort((a, b) => a.price - b.price)
      );
    }
    if (value === "HIGH_TO_LOW") {
      setSelectedproducts(
        products
          .slice()
          .filter((product) => product.catId === selectedCategory)
          .sort((a, b) => b.price - a.price)
      );
    }
    if (value === "RATING") {
      setSelectedproducts(
        products
          .slice()
          .filter((product) => product.catId === selectedCategory)

          .sort((a, b) => parseInt(b.ratings) - parseInt(a.ratings))
      );
    }
  }
  function filterCategories(value) {
    if (value === "default" || !value) setSelectedproducts(products);
    else {
      setSelectedCategory(value);
      setSelectedproducts(
        products.slice().filter((product) => product.catId === value)
      );
    }
  }
  function toggleSelect() {
    setSelectedproducts(products);
    setSelectedCategory([]);
  }

  return (
    <AnimatedPage>
      <DefaultLayout>
        <div className="all__product">
          <hr />
          <section className="all__products--select--section">
            <h3
              className="selection--header bg-warning"
              onClick={() => toggleSelect()}
            >
              {selectedCategory.length > 1 ? "clear search" : "select"}
            </h3>
            <ul className="all__categories--list">
              {childCategories.map((category, i) => {
                return (
                  <li key={i} onClick={() => filterCategories(category._id)}>
                    {category.catName}
                  </li>
                );
              })}
            </ul>
          </section>

          <section className="all__products--section">
            <div className="selection--area">
              <span>
                select categories
                <select
                  className="categories__selection"
                  onChange={(e) => filterCategories(e.target.value)}
                >
                  <option value={"default"}>categories</option>

                  {childCategories.map((category, i) => (
                    <option key={i} value={category._id}>
                      {category.catName}
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

            <hr />

            <section className="all__products--productsection">
              {selectedProducts.length === 0 && (
                <h1>This category donot have any items to display..</h1>
              )}

              {selectedProducts.map((product) => (
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
