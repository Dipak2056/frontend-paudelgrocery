import React, { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router";
import DefaultLayout from "../../components/layouts/DefaultLayout";
import { ProductCard } from "../../components/product-card/ProductCard";
import { getProductsByParentCatId } from "../../helpers/axioshelper";

export const CategoryLandingPage = () => {
  const { products } = useSelector((state) => state.product);
  const { categories } = useSelector((state) => state.category);
  const { category } = useParams();

  const [desiredProducts, setDesiredProducts] = useState([]);

  const parentCategories = categories.filter((item) => !item.parentCatId);
  const childCategories = categories.filter((item) => item.parentCatId);

  useEffect(() => {
    let { _id } = parentCategories.find((item) => item.catName === category);
    let ids = [];
    childCategories.forEach(
      (item) => item.parentCatId === _id && ids.push(item._id)
    );
    const getData = async () => {
      const data = await getProductsByParentCatId(ids);
      setDesiredProducts(data);
    };
    getData();
  }, [category]);

  return (
    <DefaultLayout>
      <section className="main text-center">
        <h1> viewing result for {category}</h1>

        <div className="d-flex flex-wrap">
          {desiredProducts.map((product) => (
            <ProductCard
              product={product}
              subCatName={product.catId}
              images={product.images}
              categories={categories}
              products={products}
            />
          ))}
        </div>
      </section>
    </DefaultLayout>
  );
};
