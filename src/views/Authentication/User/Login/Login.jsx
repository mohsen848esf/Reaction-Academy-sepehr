import React from "react";
import LoginCss from "./Login.module.css";
import loginPic from "../../../../assets/img/rightL.png";
import AuthPagePic from "../../../../component/common/AuthPages/AuthPagePic"
import LoginForms from "../../../../component/Login/LoginForms";

const Login = () => {
  return (
    <div className={`container-fluid overflow-hidden ${LoginCss.mainBack}`}>
      <div className={`container row mx-auto rounded ${LoginCss.loginBack}`}>
        <LoginForms formTitle="ورود کاربر" />
        <AuthPagePic pic={loginPic} />
      </div>
    </div>
  );
};

export default Login;
