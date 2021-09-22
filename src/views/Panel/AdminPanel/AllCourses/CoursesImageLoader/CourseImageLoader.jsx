import React from 'react';
import defaultImg from '../../../../../assets/img/ForgetImg.jpg';
import styles from './CourseImageLoader.module.css';

const CourseImageLoader = (props) => {
  const imgUrl = props.cell.row.original.image;
  return (
    <div className={styles.imgHolder}>
      <img src={imgUrl ? imgUrl : defaultImg} className={`img-fluid ${styles.courseTableImg}`} alt="NO_IMAGE" />
    </div>
  );
}

export default CourseImageLoader;
