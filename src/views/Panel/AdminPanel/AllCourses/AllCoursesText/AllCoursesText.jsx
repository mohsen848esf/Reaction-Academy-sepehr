import React from 'react';
import { TextSlicerComponent } from '../../utils/textSlicer';

const AllCoursesText = (props) => {
  const { description } = props.cell.row.original;
  return (
    <TextSlicerComponent
      textData={description} 
      count="40"
    />
  );
}

export default AllCoursesText;
