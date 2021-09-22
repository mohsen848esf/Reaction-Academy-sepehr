import React from "react";

const AuthPagePic = ({pic}) => {
  return (
    <figure className="figure col-md-6 d-md-block d-none pt-5">
      <img
        className="figure-img img-fluid mt-5 w-75 w-md-50 h-75 h-md-50"
        src={pic}
        alt="#"
      />
    </figure>
  );
};

export default AuthPagePic;
