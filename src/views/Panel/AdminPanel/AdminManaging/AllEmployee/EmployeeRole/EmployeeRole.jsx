import React, { Fragment } from "react";

const EmployeeRole = (props) => {
  const role = props.cell.row.original.role;
  return <p className="mt-2 pt-1 text-small">{role === "admin" ? "ادمین" : "استاد"}</p>;
};

export default EmployeeRole;
