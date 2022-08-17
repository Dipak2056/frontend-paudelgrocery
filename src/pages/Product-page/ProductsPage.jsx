import React from "react";
import { useDispatch, useSelector } from "react-redux";
import DefaultLayout from "../../components/layouts/DefaultLayout";
import { ProductCard } from "../../components/product-card/ProductCard";
import "./ProductsPage.css";

const ProductsPage = () => {
  const { categories } = useSelector((state) => state.category);
  const { products } = useSelector((state) => state.product);

  return (
    <DefaultLayout>
      <div className="all__product">
        <hr />
        <section className="all__products--select--section">
          <h3 className="selection--header bg-warning">Select</h3>
          <ul className="all__categories--list">
            {categories.map((category, i) => {
              return <li key={i}>{category}</li>;
            })}
          </ul>
        </section>

        <section className="all__products--section">
          <h2>Showing result for "fruits" </h2>
          <div className="selection--area">
            <span>
              select categories
              <select className="categories__selection">
                <option value="default">categories</option>

                {categories.map((category, i) => (
                  <option key={i} value={`${category}`}>
                    {category}
                  </option>
                ))}
              </select>
            </span>
            <span className="search--and--sort">
              <span className="sortby">
                sort product by:
                <select>
                  <option value="default">sort by</option>
                  <option value="price">Price</option>
                  <option value="price">Ratings</option>
                  <option value="product">Name</option>
                  <option value="latest">Latest</option>
                </select>
              </span>
            </span>
          </div>

          <hr />

          <section className="all__products--productsection">
            {products.map((product) => (
              <ProductCard
                key={product.id}
                title={product.title}
                image={product.image}
                price={product.price}
                description={product.description}
                rating={product.rating.rate}
              />
            ))}
          </section>
        </section>
      </div>
    </DefaultLayout>
  );
};

export default ProductsPage;
