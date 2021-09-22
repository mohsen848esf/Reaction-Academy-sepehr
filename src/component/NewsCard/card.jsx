import React from "react";
import Button from "../common/Button";
import { fadeIn } from 'react-animations';
import Radium, {StyleRoot} from 'radium';
import CardCss from "./card.module.css";

const styles = {
  fadeIn: {
    animation: 'x 3s',
    animationName: Radium.keyframes(fadeIn, 'fadeIn')
  }
}

const Card = ({
  newsId,
  cardTitle,
  cardPicture,
  cardDescription,
  cardCategory,
}) => {
  return (
    <StyleRoot style={styles.fadeIn} className="col-lg-4 col-md-6">
      <div className={`card p-2 border-0 mt-3 ${CardCss.newsCard} `}>
        <img src={cardPicture} alt="..." className="card-img px-3 pt-2" />
        <div className="card-body position-relative">
          <h5 class="card-title text-end font-weight-bold">{cardTitle}</h5>
          <span
            className={`badge bg-info px-2 pb-1 font-small text-white ${CardCss.category}`}>
            {cardCategory == "article" ? "مقاله" : "خبر"}
          </span>
          <p className={`card-text font-13 font-small text-end mt-3 ${CardCss.des}`}>
            {cardDescription}
          </p>
          <div className="d-flex mt-4">
            <div className="des-text font-small mt-1 ms-auto">
              {cardCategory}
            </div>
            <Button
              value="مشاهده خبر"
              color="white"
              path="news"
              objectId={newsId}
            />
          </div>
        </div>
      </div>
    </StyleRoot>
  );
};

export default Card;
