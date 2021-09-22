import React from "react";
import RegisterForms from '../../../../component/Register/RegisterForms';
import AuthPagePic from "../../../../component/common/AuthPages/AuthPagePic";
import LoginCss from "../Login/Login.module.css";
import RegPic from "../../../../assets/img/rightR.png";
const Register = () => {
  return (
    <div className={`container-fluid overflow-hidden ${LoginCss.mainBack}`}>
      <div className={`container row mx-auto rounded ${LoginCss.loginBack}`}>
        <RegisterForms
          formTitle="ثبت نام کاربر"
          value1="ثبت نام"
          value2="ورود"
        />
        <AuthPagePic pic={RegPic} />
      </div>
    </div>
  );
};

export default Register;
