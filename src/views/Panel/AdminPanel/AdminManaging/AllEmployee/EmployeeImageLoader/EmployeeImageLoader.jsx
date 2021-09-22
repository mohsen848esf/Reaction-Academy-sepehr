import React from 'react';
import styles from './EmployeeImageLoader.module.css';
import coloredImgUrl from '../../../../../../assets/img/prof.jpg';
import bwImgUrl from '../../../../../../assets/img/profBW.jpg';

const EmployeeImageLoader = (props) => {
  const {isActive} = props.cell.row.original;
  return (
    <div className={styles.imgHolder}>
      <img src={isActive? coloredImgUrl : bwImgUrl} className={`img-fluid ${styles.courseTableImg}`} alt="NO_IMAGE" />
    </div>
  );
}

export default EmployeeImageLoader;
