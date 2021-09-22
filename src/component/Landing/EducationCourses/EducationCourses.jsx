import React, { useState, useEffect } from "react";
import _ from "lodash";
import { Terms } from "../../../core/services/api/terms.api";
import Heading from "../../common/Heading/Heading";
import EducationCourseCard from "./EducationCourseCard/EducationCourseCard";
import Button from "./../../common/Button";
import defaultPic from "../../../assets/img/2.png";

const EducationCourses = () => {
  const [courses, setCourses] = useState([]);

  const getCourses = async () => {
    const data = await Terms();
    const eduCourses = _(data.result).slice(0).take(4).value();
    setCourses(eduCourses);
  };

  useEffect(() => {
    getCourses();
  }, []);

  return (
    <div className="container pb-4">
      <Heading head={"دوره های آموزشی"} />
      <div className="row pt-4">
        {courses.map((course) => (
          <div
            key={course._id}
            className="col-7 mx-auto col-sm-6 col-lg-3 mb-5">
            <EducationCourseCard
              courseId={course._id}
              coursePic={course.course.image}
              courseTitle={course.course.courseName}
              courseTeacher={course.teacher.fullName}
              courseLike={course.__v}
              courseCapacity={course.capacity}
              courseStatus={course.status}
              fallBackSrc={defaultPic}
            />
          </div>
        ))}
      </div>
      <Button
        value="مشاهده دوره ها"
        path="courses"
        color="bigGold"
        objectId=""
      />
    </div>
  );
};

export default EducationCourses;
