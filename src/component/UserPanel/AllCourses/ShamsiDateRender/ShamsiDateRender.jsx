import React, { Fragment } from "react";
import { shamsiFormater } from "../../../../core/utils/toShamsiDate";

const ShamsiDateRender = (props) => {
  const time = props.cell.row.original.startDate;
  return <Fragment>{shamsiFormater(time)}</Fragment>;
};

export default ShamsiDateRender;
