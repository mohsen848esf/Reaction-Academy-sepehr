import React from "react";
import dashcss from "./Dashboard.module.css";

const CardDash = ({ cardpicture, carddescription }) => {
  return (
    <div className={`card col-md-3 col-sm-5 col-7 mb-4 py-4 mx-2 ${dashcss.card}`}>
      <div className={`mx-auto ${dashcss.minicard}`}>
        <img className={`mx-auto py-4 my-2 ${dashcss.icon}`} src={cardpicture} alt="" />
      </div>
      <h6 className={`mt-4 ${dashcss.font}`}> {carddescription} </h6>
    </div>
  );
};

export default CardDash;
