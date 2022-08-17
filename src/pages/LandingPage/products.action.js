import { setProducts } from "./products.slice";
import { getAllProducts } from "../../helpers/axioshelper";

export const fetchProductsAction = () => async (dispatch) => {
  const allproducts = await getAllProducts();
  dispatch(setProducts(allproducts));
};
