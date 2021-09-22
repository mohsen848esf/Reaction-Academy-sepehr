import React from 'react';
import styles from './StudentsImageLoader.module.css';
import coloredImgUrl from 'src/assets/img/prof.jpg';
import bwImgUrl from 'src/assets/img/profBW.jpg';

const StudentsImageLoader = (props) => {
  const {isActive} = props.cell.row.original;
  return (
    <div className={` mx-auto ${styles.imgHolder}`}>
      <img src={isActive? coloredImgUrl : bwImgUrl} className={`img-fluid ${styles.courseTableImg}`} alt="NO_IMAGE" />
    </div>
  );
}

export default StudentsImageLoader;
