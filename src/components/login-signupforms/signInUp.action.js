import { toast } from "react-toastify";
import { signUpUser, loginUser } from "../../helpers/axioshelper";
import { setUser } from "./signInUp.slice";

//signing up
export const signUpUserAction = (obj) => async (dispatch) => {
  dispatch(setUser(obj));
  toast.warning(obj, { pending: "please wait..." });
};

//loging in
export const loginUserAction = (obj) => async (dispatch) => {
  const promiseResponse = loginUser(obj);
  toast.promise(promiseResponse, { pending: "please wait" });
  const { status, message, customer } = await promiseResponse;
  console.log(status, message);
  const { createdAt, updatedAt, __v, ...rest } = customer;
  if (status === "success") {
    toast[status](message);
    status === "success" && dispatch(setUser(rest));
  } else {
    toast["danger"](message);
  }
};
