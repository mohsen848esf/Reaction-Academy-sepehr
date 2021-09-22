import React, { Fragment } from "react";

const AllNewsCategory = (props) => {
  const item = props.cell.row.original.category;
  return (
    <Fragment>
      <h5>
        <span className="badge bg-info mt-2 p-2">{item}</span>
      </h5>
    </Fragment>
  );
};

export default AllNewsCategory;
