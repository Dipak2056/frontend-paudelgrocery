import axios from "axios";
const rootUrlAPI = "https://fakestoreapi.com";
const productsAPI = rootUrlAPI + "/products";
const categoriesAPI = productsAPI + "/categories";
const getSingleProductAPI = productsAPI + "/" + "id";

//there will be lots of repetition on doing individual axios get method
//so i am creating this api, processor
const apiProcessor = async ({ method, url }) => {
  try {
    const { data } = await axios({
      method,
      url,
    });
    return data;
  } catch (error) {
    let message = error.message;
    console.log(message);
  }
};

//to get all the categories from the external api
export const getAllCategories = async () => {
  const url = categoriesAPI;
  return apiProcessor({ method: "get", url });
};

//to get all the products from the external api
export const getAllProducts = async () => {
  const url = productsAPI;
  return apiProcessor({ method: "get", url });
};

//to get the product based on the product id
export const getProductById = async (id) => {
  const url = productsAPI + "/" + id;
  return apiProcessor({ method: "get", url });
};
