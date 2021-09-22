import React, { useState, useEffect, Fragment } from "react";
import { Button, ListGroup, ListGroupItem } from "reactstrap";
import { toast } from "react-toastify";
import {
  addStudentToTerm,
  removeStudentFromTerm,
} from "src/core/services/api/course.api";

const StudentAllTermsModal = ({ studentId, allTerms }) => {
  const [flag, setFlag] = useState(false);

  const addToTerm = async (stuId, tId) => {
    try {
      const result = await addStudentToTerm(stuId, { termId: tId });
      if (result.success) {
        toast.success("دانشجو به ترم اضافه شد");
        setFlag(true);
      }
      setFlag(false);
    } catch { }
  };

  const deleteFromTerm = async (stuId, tId) => {
    try {
      const result = await removeStudentFromTerm(stuId, { termId: tId });
      if (result.success) {
        toast.success("دانشجو از ترم حذف شد");
        setFlag(true);
      }
      setFlag(false);
    } catch { }
  };

  return (
    <Fragment>
      <ListGroup>
        {allTerms.map((term) => (
          <ListGroupItem className="d-flex justify-content-between text-dark">
            <div>
              <h6 className="mb-2">نام دوره: {term.course.courseName}</h6>
              <h6>استاد دوره: {term.teacher.fullName}</h6>
            </div>
            {!term.students.some((stu) => stu._id === studentId) ? (
              <Button
                onClick={() => addToTerm(studentId, term._id)}
                color="success"
                className="h-25 my-auto"
              >
                اضافه به دوره
              </Button>
            ) : (
              <Button
                onClick={() => deleteFromTerm(studentId, term._id)}
                color="danger"
                className="h-25 my-auto"
              >
                حذف از دوره
              </Button>
            )}
          </ListGroupItem>
        ))}
      </ListGroup>
    </Fragment>
  );
};

export default StudentAllTermsModal;
