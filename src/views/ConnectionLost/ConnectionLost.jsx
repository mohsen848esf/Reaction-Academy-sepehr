import React from "react";
import connectionLost from "src/assets/img/connection.svg";
import style from "./ConnectionLost.module.css";

const ConnectionLost = () => {
  return (
    <div className="mt-4 container">
      <img
        src={connectionLost}
        className={`img-fluid ${style.imgSize}`}
        alt="Connection Lost"
      />
      <h4 className={`my-5 px-3 mx-auto ${style.errorStyle}`}>
        اتصال شما با دیتابیس قطع شد. لطفا اینترنت دستگاهتان را بررسی کنید
      </h4>
    </div>
  );
};

export default ConnectionLost;
