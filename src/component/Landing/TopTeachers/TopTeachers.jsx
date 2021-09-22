import React, { useState, useEffect } from "react";
import Heading from "../../common/Heading/Heading";
import TopTeachersCard from "./TopTeachersCard";
import fakeTeachersData from "../../../core/fakeTeachersData";

const TopTeachers = () => {
  const [teachers, setTeachers] = useState([]);

  useEffect(() => {
    const data = fakeTeachersData;
    setTeachers(data);
  });

  return (
    <div className="container pb-2">
      <Heading head={"اساتید برتر"} />
      <div className="row mb-5">
        {teachers.map((teacher) => (
          <div key={teacher._id} className="col-8 col-lg-4 mx-auto mb-4">
            <TopTeachersCard
              teacherName={teacher.name}
              TeacherPic={teacher.pic}
              teacherLevel={teacher.level}
              teacherDesc={teacher.desc}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopTeachers;
