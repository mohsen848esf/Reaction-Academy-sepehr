import React, { Fragment } from "react";
import { CTooltip, CLink } from "@coreui/react";
const TextSlicerComponent = ({ textData, count = 80 }) => {
  const tooltipText =
    textData.length > count ? "...." + textData.slice(count) : null;
  return (
    <Fragment>
      {textData.length >= count ? (
        <CTooltip
          className="mt-3 font-small no-wrap decoration-none"
          content={tooltipText}
        >
          {}
          <p className="mt-3 font-small no-wrap text-des">
            {textData.length > count
              ? textData.slice(0, count) + "..."
              : textData}{" "}
          </p>
        </CTooltip>
      ) : (
        <p className="mt-3 font-small no-wrap text-des">
          {textData.length > count
            ? textData.slice(0, count) + "..."
            : textData}{" "}
        </p>
      )}
    </Fragment>
  );
};

const textSlicerFunction = (textData, count) => {
  const slicedText =
    textData.length > count ? textData.slice(0, count) + "...." : textData;
  return slicedText;
};

export default TextSlicerComponent;

export { TextSlicerComponent, textSlicerFunction };
