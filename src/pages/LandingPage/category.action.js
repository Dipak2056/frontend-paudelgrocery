import { setCategories } from "./category.slice";
import { getAllCategories } from "../../helpers/axioshelper";

export const fetchCategoriesAction = () => async (dispatch) => {
  const allcategories = await getAllCategories();
  dispatch(setCategories(allcategories));
};
