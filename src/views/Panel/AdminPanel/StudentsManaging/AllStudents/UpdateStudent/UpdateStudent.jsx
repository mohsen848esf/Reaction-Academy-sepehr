import React from "react";
import EditStudentById from "./EditStudentById/EditStudentById";

const UpdateStudent = (props) => {
  const studentInfo = props.cell.row.original;
  return (
    <EditStudentById student={studentInfo} setAllData={props.setAllData} />
  );
};

export default UpdateStudent;
