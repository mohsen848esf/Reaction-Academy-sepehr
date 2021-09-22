import React from "react";
import AuthPagePic from "../../../../component/common/AuthPages/AuthPagePic";
import ForgetPassForms from "../../../../component/ForgetPassword/ForgetPassForms";
import LoginCss from "../Login/Login.module.css";
import ForgetImg from "../../../../assets/img/ForgetImg.jpg";

const ForgetPass = () => {
  return (
    <div className={`container-fluid overflow-hidden ${LoginCss.mainBack}`}>
      <div className={`container row mx-auto rounded ${LoginCss.loginBack}`}>
        <ForgetPassForms formTitle="فراموشی رمز عبور" />
        <AuthPagePic pic={ForgetImg} />
      </div>
    </div>
  );
};

export default ForgetPass;
