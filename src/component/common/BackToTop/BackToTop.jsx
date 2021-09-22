import React from "react";
import { ArrowUpCircle } from "react-feather";
import styles from "./BackToTop.module.css";

const BackToTop = () => {
  return (
    <a href="#reactionHeader" className={`${styles.toTop}`}>
      <ArrowUpCircle size={55} color="#e7ab2a" />
    </a>
  );
};

export default BackToTop;
