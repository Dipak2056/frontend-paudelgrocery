import { toast } from "react-toastify";

import {
  loginUser,
  getCustomer,
  requestAccessJWT,
} from "../../helpers/axioshelper";
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
  sessionStorage.removeItem("accessJWT");
  localStorage.removeItem("refreshJWT");
  dispatch(setUser({}));
  toast.error(`successfully logged out`, {
    position: "bottom-left",
  });
};
//automatic login
//for this we want to access the refresh jwt from the localstorage
const fetchCustomer = () => async (dispatch) => {
  const response = await getCustomer();
  response.status === "success" && dispatch(setUser(response.customer));
};
//after accessing, we want to get new access jwt
export const automaticLogin = () => async (dispatch) => {
  const accessJWT = sessionStorage.getItem("accessJWT");
  const refreshJWT = localStorage.getItem("refreshJWT");

  if (accessJWT) {
    dispatch(fetchCustomer());
    return;
  } else if (refreshJWT) {
    const token = await requestAccessJWT();
    token ? dispatch(fetchCustomer()) : dispatch(logOutUser());
  } else {
    dispatch(logOutUser());
  }
};
