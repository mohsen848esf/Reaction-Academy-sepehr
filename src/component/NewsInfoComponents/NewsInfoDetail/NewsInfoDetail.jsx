import React, { Fragment, useState, useEffect } from "react";
import { Redirect } from "react-router-dom";
import { Row, Col } from "reactstrap";
import Seperator from "../../common/Seperator/Seperator";
import { NewsById } from "../../../core/services/api/news.api";
import { RingLoader } from "react-spinners";
import { css } from "@emotion/react";
import NewsInfoDetailCss from "./NewsInfoDetail.module.css";
import defaultPic from "../../../assets/img/news1.svg";

const NewsInfoDetail = ({ selectedNews }) => {
  const [news, setNews] = useState([]);
  const [errored, setErrored] = useState(false);
  const [imgSrc, setImgSrc] = useState(null);

  const getNewsData = async () => {
    try {
      const news = await NewsById(selectedNews);
      setNews(news.result);
      setImgSrc(news.result.image);
    } catch (error) {}
  };

  useEffect(() => {
    getNewsData();
  }, []);

  const onError = () => {
    if (!errored) {
      setImgSrc(defaultPic);
      setErrored(true);
    }
  };
  const override = css`
    display: block;
    margin: 100px auto;
  `;
  return !news ? (
    <Redirect to="/notfound" />
  ) : (
    <Fragment>
      {!news?.title ? (
        <RingLoader
          color="#cca349"
          css={override}
          size={150}
          speedMultiplier={2}
        />
      ) : (
        <Row className="justify-content-between">
          <Col md="7">
            <Row className="mb-4 d-flex justify-content-between">
              <Col md="6">
                <h2 className={`fs-6 fw-bold`}>عنوان خبر:</h2>
                <p className={`${NewsInfoDetailCss.courseTitleSize}`}>
                  {news?.title}
                </p>
              </Col>
              <Col md="6">
                <h2 className={`fs-6 fw-bold`}> دسته خبر :</h2>
                <p className={`${NewsInfoDetailCss.courseTitleSize}`}>
                  {news?.category}
                </p>
              </Col>
            </Row>
            <Row className="mb-4">
              <Col>
                <h2 className={`fs-6 fw-bold text-end`}>متن خبر :</h2>
                <p
                  className={`text-end des-text ${NewsInfoDetailCss.courseDecSize} `}
                >
                  {news?.text}
                </p>
              </Col>
            </Row>
            <Row>
              <Col>
                <h2 className={`fs-6 fw-bold text-end mb-3`}>
                  {" "}
                  اطلاعات بیشتر:
                </h2>
                <div className="mb-2">
                  <i
                    className={`fa fa-check-circle ms-2 ${NewsInfoDetailCss.iconColor}`}
                  ></i>
                  <span className={`fw-bold ${NewsInfoDetailCss.detailHead}`}>
                    {" "}
                    تاریخ انتشار خبر:
                  </span>{" "}
                  <span className={`${NewsInfoDetailCss.detailText}`}>
                    1400/5/3
                  </span>
                </div>
                <div className="mb-2">
                  <i
                    className={`fa fa-check-circle ms-2 ${NewsInfoDetailCss.iconColor}`}
                  ></i>
                  <span className={`fw-bold ${NewsInfoDetailCss.detailHead}`}>
                    {" "}
                    دسته بندی:
                  </span>{" "}
                  <span className={`${NewsInfoDetailCss.detailText}`}>
                    مقاله{" "}
                  </span>
                </div>
              </Col>
            </Row>
          </Col>
          <Col md="5">
            <img
              src={imgSrc}
              onError={onError}
              className={`align-self-end d-md-block d-none mt-5 ${NewsInfoDetailCss.picSize}`}
              alt=""
            />
          </Col>
        </Row>
      )}
    </Fragment>
  );
};

export default NewsInfoDetail;
