import axios from "axios";
const rootUrlAPI = "http://localhost:8000/api/v1";
const productsAPI = rootUrlAPI + "/products";
const categoriesAPI = rootUrlAPI + "/categories";
const customerAPI = rootUrlAPI + "/customer";

//there will be lots of repetition on doing individual axios get method
//so i am creating this api, processor
const apiProcessor = async ({ method, url, dataobj, headers }) => {
  try {
    const { data } = await axios({
      method,
      url,
      data: dataobj,
      headers,
    });
    return data;
  } catch (error) {
    let message = error.message;
    if (error.response && error.response.status === "401") {
      sessionStorage.removeItem("accessJWT");
      localStorage.removeItem("refreshJWT");
      return { status: "error", message: "unauthorized!" };
    }
    if (error.response && error.response.data) {
      message = error.response.data.message;
    }
    if (message === "jwt expired!") {
      //call the api to get new refresh jwt and recall the process
      const accssJWT = await requestAccessJWT();
      if (accssJWT) {
        return apiProcessor({
          method,
          url,
          dataobj,
          headers: {
            Authorization: accssJWT,
          },
        });
      }
    }
    // console.log("jglsjgl", status, message, customer);
    console.log(error, message);

    return {
      status: "error",
      message,
    };
  }
};

//to get all the categories from the external api
export const getAllCategories = () => {
  const url = categoriesAPI;
  return apiProcessor({ method: "get", url });
};
//to get all the sub categories based on parentCatId
export const getSubCategoriesBasedOnParentCatId = (parentCatId) => {
  const url = categoriesAPI + "/" + parentCatId;
  return apiProcessor({ method: "get", url });
};

//to get all the products from the external api
export const getAllProducts = () => {
  const url = productsAPI;
  return apiProcessor({ method: "get", url });
};

//to get the product based on the product id
export const getProductById = async (id) => {
  const url = productsAPI + "/" + id;
  return apiProcessor({ method: "get", url });
};
//get product based on parent cat id
export const getProductsByParentCatId = async (ids) => {
  try {
    const { data } = await axios.post(productsAPI, ids);
    return data;
  } catch (error) {
    console.log(error.mesage);
  }
};

//=======user signup/ login
export const signUpUser = async (dataobj) => {
  try {
    const result = await axios.post(customerAPI, dataobj);
    return result;
  } catch (error) {
    console.log(error.message);
  }
};

export const loginUser = async (dataobj) => {
  try {
    const url = customerAPI + "/login";
    return apiProcessor({ method: "post", url, dataobj });
  } catch (error) {
    console.log(error);
    return {
      status: "error",
      message: error.mesage,
    };
  }
};
//request new accessjwt by refresh jwt
export const requestAccessJWT = async () => {
  const { accessJWT } = await apiProcessor({
    method: "get",
    url: customerAPI + "/accessjwt",
    headers: {
      Authorization: localStorage.getItem("refreshJWT"),
    },
  });
  console.log(accessJWT);
  sessionStorage.setItem("accessJWT", accessJWT);
  return accessJWT;
};
export const getCustomer = async () => {
  const url = customerAPI;
  return apiProcessor({
    method: "get",
    url,
    headers: { Authorization: sessionStorage.getItem("accessJWT") },
  });
};
