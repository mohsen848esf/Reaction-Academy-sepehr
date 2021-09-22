import React from 'react';
import defaultImg from '../../../../../assets/img/ForgetImg.jpg'
import styles from './NewsImageLoader.module.css';

const NewsImageLoader = (props) => {
  const imgUrl = props.cell.row.original.image;
  return (
    <div className={styles.imgHolder}>
      <img src={imgUrl ? imgUrl : defaultImg} className={`img-fluid ${styles.newsTableImg}`} alt="NO_IMAGE" />
    </div>
  );
}

export default NewsImageLoader;
