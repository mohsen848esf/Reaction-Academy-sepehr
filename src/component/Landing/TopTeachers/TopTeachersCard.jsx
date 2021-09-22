import React from "react";
import { fadeIn } from 'react-animations';
import Radium, {StyleRoot} from 'radium';
import TopTeachersCss from "./TopTeachers.module.css";

const styles = {
  fadeIn: {
    animation: 'x 5s',
    animationName: Radium.keyframes(fadeIn, 'fadeIn')
  }
}

function TopTeachersCard({
  teacherName,
  TeacherPic,
  teacherLevel,
  teacherDesc,
}) {
  return (
    <StyleRoot style={styles.fadeIn} className="card border-0 shadow rounded py-4">
      <div className="card-body">
        <div className="d-flex justify-content-between">
          <div className="text-end">
            <h6
              className={`card-title font-weight-bold ${TopTeachersCss.techerTitle}`}>
              {teacherName}
            </h6>
            <button
              type="button"
              className={`btn mt-2 ${TopTeachersCss.TopTeachersBtn}`}>
              {" "}
              {teacherLevel}{" "}
            </button>
          </div>
          <a href="#" className="rounded-circle">
            <img src={TeacherPic} className="w-50" alt="" />
          </a>
        </div>
        <div
          className={`card-text mt-3 text-end text-justify ${TopTeachersCss.teacherText}`}>
          {teacherDesc}
        </div>
      </div>
    </StyleRoot>
  );
}

export default TopTeachersCard;
