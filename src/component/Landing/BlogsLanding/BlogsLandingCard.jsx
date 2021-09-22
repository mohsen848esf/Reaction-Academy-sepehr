import React, {useState} from "react";
import BlogsLandingCss from "./BlogsLanding.module.css";
import { Link } from "react-router-dom";
import { fadeIn } from 'react-animations';
import Radium, {StyleRoot} from 'radium';

const styles = {
  fadeIn: {
    animation: 'x 5s',
    animationName: Radium.keyframes(fadeIn, 'fadeIn')
  }
}

function BlogsLandingCard({ blogId, blogText, blogTitle, blogPic, fallBackSrc }) {
  const [errored, setErrored] = useState(false);
  const [imgSrc, setImgSrc] = useState(blogPic);

  const onError = () => {
    if (!errored) {
      setImgSrc(fallBackSrc);
      setErrored(true);
    }
  }

  return (
    <StyleRoot style={styles.fadeIn} className="card border-0 py-2 mb-3 shadow rounded">
      <div className="row g-0 d-flex justify-content-around">
        <div className="col-md-4">
          <img
            src={imgSrc}
            onError={onError}
            className="img-fluid rounded-start"
            alt="Not_Image"
          />
        </div>
        <div className="col-md-7">
          <div className="card-body">
            <h5
              className={`card-title text-end fs-6 mb-3 ${BlogsLandingCss.blogText}`}>
              {blogTitle}
            </h5>
            <p
              className={`card-text text-justify me-2 ${BlogsLandingCss.blogText}`}>
              {blogText}
            </p>
            <Link to={`/news/${blogId}`}>
              <i
                className={`fa fa-long-arrow-left float-start ${BlogsLandingCss.blogIcon}`}></i>
            </Link>
          </div>
        </div>
      </div>
    </StyleRoot>
  );
}

export default BlogsLandingCard;
