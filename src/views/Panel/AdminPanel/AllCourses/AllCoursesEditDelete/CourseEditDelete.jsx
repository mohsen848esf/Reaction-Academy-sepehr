import React from 'react';
import DeleteCourse from '../AllCoursesEditDelete/DeleteCourse/DeleteCourse';
import { Link } from 'react-router-dom';
import styles from "./EditCourse/EditCourse.module.css"

const CourseEditDelete = (props) => {
  const courseId = props.cell.row.original._id;
  return (
    <div className="d-flex">
      <Link to={`/admin/editcourse/${courseId}`}>
        <button className={`ms-lg-1 mb-xl-0 mb-1 p-1 px-2 rounded text-white ${styles.editButton}`}>
          ویرایش
        </button>
      </Link>
      <DeleteCourse
        courseId={courseId}
        setAllData={props.setAllData}
      />
    </div>
  );
}

export default CourseEditDelete;
