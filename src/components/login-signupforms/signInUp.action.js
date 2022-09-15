import { toast } from "react-toastify";
import { loginUser } from "../../helpers/axioshelper";
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
  //we are going to store access jwt in session and refresh in local
  const data = await promiseResponse;

  if (data.status === "success") {
    sessionStorage.setItem("accessJWT", data.accessJWT);
    localStorage.setItem("refreshJWT", data.refreshJWT);
    dispatch(setUser(data.customer));
    toast[data.status](data.message);
  }

  data.status === "error" && toast[data.status](data.message);
};

//logout
export const logOutUser = () => (dispatch) => {
  dispatch(setUser({}));
  toast.error(`successfully logged out`, {
    position: "bottom-left",
  });
};
//automatic login
//for this we want to access the access jwt or refresh jwt from the sessionstorage or localstorage
