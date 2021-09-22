import React, { useState, useEffect } from "react";
import { toShamsiDate } from "../../../core/utils/toShamsiDate";
import Button from "../../common/Button";
import cardsCss from "./Card.module.css";
import LikeComponent from "./../../common/Like/LikeComponent";
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { fadeIn } from 'react-animations';
import Radium, {StyleRoot} from 'radium';

const styles = {
  fadeIn: {
    animation: 'x 1s',
    animationName: Radium.keyframes(fadeIn, 'fadeIn')
  }
}

const Card = ({
  courseId,
  cardPic,
  cardTitle,
  cardTeacher,
  cardDate,
  fallBackSrc,
}) => {
  const [errored, setErrored] = useState(false);
  const [imgSrc, setImgSrc] = useState(cardPic);

  const onError = () => {
    if (!errored) {
      setImgSrc(fallBackSrc);
      setErrored(true);
    }
  };

  return (

    <StyleRoot style={styles.fadeIn} className={`card col-md-5 col-10 mb-5 p-2 rounded-7 border-0 mt-3 ${cardsCss.courseCard}`}>
      <div className="row g-0">
        <div className={`col-lg-4 col-12 d-flex`}>
          <img
            src={imgSrc}
            onError={onError}
            className="img-fluid rounded-start align-self-center mx-auto"
            alt="..."
          />
        </div>
        <div className="col-lg-8 col-10 d-flex mx-auto">
          <div className="card-body text-center align-self-center text-lg-end">
            <h5 className="card-title fw-bold fs-6 mb-3">{cardTitle}</h5>
            <p className={`card-text ${cardsCss.cardText}`}>
              مدرس :<span> {cardTeacher} </span>
            </p>
            <p className={`card-text mb-3 ${cardsCss.cardText}`}>
              تاریخ شروع :<span> {toShamsiDate(cardDate)} </span>
            </p>
            <div className="row flex-column flex-xl-row mt-4">
              <LikeComponent termId={courseId} />
              <div className="col text-center">
                <Button
                  value="ثبت دوره"
                  path="course"
                  objectId={courseId}
                  color="white"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </StyleRoot>

  );
};

export default Card;
