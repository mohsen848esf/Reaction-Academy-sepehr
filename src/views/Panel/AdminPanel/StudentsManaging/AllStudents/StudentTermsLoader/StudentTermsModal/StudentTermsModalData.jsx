import React from "react";
import { ListGroup, ListGroupItem } from "reactstrap";

const StudentTermsModalData = ({ studentTerms }) => {
  return (
    <ListGroup>
      {studentTerms.map((term) => (
        <ListGroupItem action className="justify-content-between text-dark">
          <h6 className="mb-2">نام دوره: {term.course.courseName}</h6>
          <h6>استاد دوره: {term.teacher.fullName}</h6>
        </ListGroupItem>
      ))}
    </ListGroup>
  );
};

export default StudentTermsModalData;
