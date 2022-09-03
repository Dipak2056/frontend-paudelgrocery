import React from "react";
import LoginFooter from "../footer/LoginFooter";
import LoginHeader from "../header/LoginHeader";

const LoginPageLayout = ({ children }) => {
  return (
    <div>
      <LoginHeader />
      <div className="main">{children}</div>
      <LoginFooter />
    </div>
  );
};

export default LoginPageLayout;
