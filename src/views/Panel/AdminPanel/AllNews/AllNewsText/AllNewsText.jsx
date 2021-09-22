import React from "react";
import { TextSlicerComponent } from '../../utils/textSlicer';

const AllNewsText = (props) => {
  const item = props.cell.row.original.text;
  return (
    <TextSlicerComponent
      textData={item}
    />
  );
};

export default AllNewsText;
