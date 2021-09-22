import React from "react";
import { Link } from "react-router-dom";
import Button from "../Button";
import notFoundtImg from "../../../assets/img/notFound.png";

const NotFound = () => {
  return (
    <div className="Item">
      <img src={notFoundtImg} className="img-fluid" alt="Not-Found" />
      <h3 className="my-5 mx-auto">
        متاسفیم ، صفحه مورد نظر شما یافت نشد برای رفتن به
        <Link className="text-decoration px-2" to="/">
          'صفحه اصلی'
        </Link>
         کلیک کنید 
      </h3>
    </div>
  );
};

export default NotFound;
