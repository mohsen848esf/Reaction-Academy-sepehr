import React from "react";
import { useHistory } from "react-router-dom";
import buttonCss from "./Button.module.css";

const Button = ({
  type = "button",
  color,
  value,
  path = "/",
  objectId = null,
}) => {
  let history = useHistory();

  const handleOnRedirect = (path, id = null) => {
    if (id === null) history.push(`/${path}`);
    else history.push(`/${path}/${id}`);
  };

  const btnColor = (color) => {
    switch (color) {
      case "smallGold":
        return `${buttonCss.smallBtnGold}`;
      case "bigGold":
        return `${buttonCss.bigBtnGold}`;
      case "white":
        return `${buttonCss.btnWhite}`;
      default:
        return null;
    }
  };

  return (
    <button
      onClick={() => handleOnRedirect(path, objectId)}
      type={type}
      className={`btn rounded-5 mx-1 px-3 ${btnColor(color)}`}>
      {value}
    </button>
  );
};

export default Button;
