import React, { useState } from "react";
import Button from "../../../common/Button";
import LikeComponent from "../../../common/Like/LikeComponent";
import { fadeIn } from 'react-animations';
import Radium, {StyleRoot} from 'radium';
import EducationCourseCardCss from "./EducationCourseCard.module.css";

const styles = {
  fadeIn: {
    animation: 'x 5s',
    animationName: Radium.keyframes(fadeIn, 'fadeIn')
  }
}

function EducationCourseCard({
  courseId,
  coursePic,
  courseTitle,
  courseTeacher,
  courseCapacity,
  fallBackSrc,
}) {
  const [errored, setErrored] = useState(false);
  const [imgSrc, setImgSrc] = useState(coursePic);

  const onError = () => {
    if (!errored) {
      setImgSrc(fallBackSrc);
      setErrored(true);
    }
  };
  return (
    <StyleRoot style={styles.fadeIn} className="card rounded shadow border-0">
      <div className={`rounded ${EducationCourseCardCss.cardImg}`}>
        <img
          src={imgSrc}
          onError={onError}
          className={`card-img-top w-50 my-5 rounded`}
          alt="No_Image"
        />
      </div>

      <div className="card-body text-center py-4">
        <h6
          className={`card-title font-weight-bold ${EducationCourseCardCss.courseTitleSize}`}>
          {courseTitle}
        </h6>
        <p className={`card-text ${EducationCourseCardCss.courseTextSize}`}>
          {" "}
          مدرس: {courseTeacher}
        </p>
        <Button
          value="ثبت دوره"
          color="white"
          path="course"
          objectId={courseId}
        />
        <div className="d-flex justify-content-between mt-3 flex-sm-row flex-column">
          <div className="px-2">
            <LikeComponent termId={courseId} />
          </div>
          <span className="pt-1">
            <span className={`${EducationCourseCardCss.capacity}`}>
              {courseCapacity}
            </span>{" "}
            <i className={`fa fa-user ${EducationCourseCardCss.user}`}></i>
          </span>
        </div>
      </div>
    </StyleRoot>
  );
}

export default EducationCourseCard;
