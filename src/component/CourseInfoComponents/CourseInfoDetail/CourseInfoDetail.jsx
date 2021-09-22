import React, { Fragment, useState, useEffect } from "react";
import { Redirect, Link } from "react-router-dom";
import { Row, Col, Badge, Button } from "reactstrap";
import Seperator from "../../common/Seperator/Seperator";
import { TermById } from "../../../core/services/api/terms.api";
import { addStudentToTerm } from "src/core/services/api/course.api";
import { getItem } from "../../../core/services/storage/storage";
import { toShamsiDate } from "../../../core/utils/toShamsiDate";
import CourseInfoDetailCss from "./CourseInfoDetail.module.css";
import SuggestCss from "../../../component/Landing/Suggestion/Suggestion.module.css";
import defaultPic from "../../../assets/img/2.png";
import PreRingLoader from "./../../common/PreLoader/PreRingLoader";
import { toast } from "react-toastify";

const CourseInfoDetail = ({ selectedCourse }) => {
  const [term, setTerm] = useState([]);
  const [course, setCourse] = useState([]);
  const [errored, setErrored] = useState(false);
  const [imgSrc, setImgSrc] = useState(null);
  const [flag, setFlag] = useState(false);

  const user = JSON.parse(getItem("user"));
  const employee = JSON.parse(getItem("employee"));

  const getCourseData = async () => {
    try {
      const data = await TermById(selectedCourse);
      setTerm(data.result);
      setCourse(data.result.course);
      setImgSrc(data.result.course.image);
      if (data.result.students.find((u) => u._id === user._id)) setFlag(true);
    } catch (error) {}
  };
  const buyCourse = async () => {
    try {
      const result = await addStudentToTerm(user._id, { termId: term._id });
      if (result.success) {
        setFlag(true);
        toast.success(result.message[0].message);
      }
    } catch (error) {}
  };

  useEffect(() => {
    getCourseData();
  }, [flag]);

  const onError = () => {
    if (!errored) {
      setImgSrc(defaultPic);
      setErrored(true);
    }
  };

  return !term ? (
    <Redirect to="/notfound" />
  ) : (
    <Fragment>
      {!term?.title ? (
        <PreRingLoader />
      ) : (
        <Row className=" justify-content-between pe-2">
          <Col md="7">
            <Row className="mb-4 d-flex justify-content-between">
              <Col md="6">
                <h2 className={`fs-6 fw-bold`}>عنوان دوره:</h2>
                <p className={`${CourseInfoDetailCss.courseTitleSize}`}>
                  {course?.courseName}
                </p>
              </Col>
              <Col md="6">
                <h2 className={`fs-6 fw-bold`}> مدرس دوره:</h2>
                <p className={`${CourseInfoDetailCss.courseTitleSize}`}>
                  {term.teacher?.fullName}
                </p>
              </Col>
            </Row>
            <Row className="mb-4">
              <Col>
                <h2 className={`fs-6 fw-bold text-end`}>درباره دوره:</h2>
                <p
                  className={`text-end ${CourseInfoDetailCss.courseTitleSize}`}
                >
                  {course?.description}
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
                    className={`fa fa-check-circle ms-2 ${CourseInfoDetailCss.iconColor}`}
                  ></i>
                  <span className={`fw-bold ${CourseInfoDetailCss.detailHead}`}>
                    شهریه دوره:
                  </span>{" "}
                  <span className={`${CourseInfoDetailCss.detailText}`}>
                    {term?.cost} تومان
                  </span>
                  <Badge className={`me-2 text-white pt-1 ${CourseInfoDetailCss.badgeBack}`}>
                    20%
                  </Badge>
                </div>
                <div className="mb-2">
                  <i
                    className={`fa fa-check-circle ms-2 ${CourseInfoDetailCss.iconColor}`}
                  ></i>
                  <span className={`fw-bold ${CourseInfoDetailCss.detailHead}`}>
                    ترم ارائه شده دوره:
                  </span>{" "}
                  <span className={`${CourseInfoDetailCss.detailText}`}>
                    {term?.title}
                  </span>
                </div>
                <div className="mb-2">
                  <i
                    className={`fa fa-check-circle ms-2 ${CourseInfoDetailCss.iconColor}`}
                  ></i>
                  <span className={`fw-bold ${CourseInfoDetailCss.detailHead}`}>
                    {" "}
                    تاریخ شروع دوره:
                  </span>{" "}
                  <span className={`${CourseInfoDetailCss.detailText}`}>
                    {toShamsiDate(term?.startDate)}
                  </span>
                </div>
                <div className="mb-2">
                  <i
                    className={`fa fa-check-circle ms-2 ${CourseInfoDetailCss.iconColor}`}
                  ></i>
                  <span className={`fw-bold ${CourseInfoDetailCss.detailHead}`}>
                    {" "}
                    تاریخ پایان دوره:
                  </span>{" "}
                  <span className={`${CourseInfoDetailCss.detailText}`}>
                    {toShamsiDate(term?.endDate)}
                  </span>
                </div>
                <div className="mb-2">
                  <i
                    className={`fa fa-check-circle ms-2 ${CourseInfoDetailCss.iconColor}`}
                  ></i>
                  <span className={`fw-bold ${CourseInfoDetailCss.detailHead}`}>
                    {" "}
                    ظرفیت دوره:
                  </span>{" "}
                  <span className={`${CourseInfoDetailCss.detailText}`}>
                    {term?.capacity} نفر
                  </span>
                </div>
                <div className="mb-4">
                  <i
                    className={`fa fa-check-circle ms-2 ${CourseInfoDetailCss.iconColor}`}
                  ></i>
                  <span className={`fw-bold ${CourseInfoDetailCss.detailHead}`}>
                    تعداد دانشجویان دوره :
                  </span>{" "}
                  <span className={`${CourseInfoDetailCss.detailText}`}>
                    {term.students?.length} نفر
                  </span>
                </div>
                {user ? (
                  <Fragment>
                    {flag === true ? (
                      <Button
                        disabled
                        onClick={() => buyCourse()}
                        className={`btn px-5 ${SuggestCss.formBtn}`}
                      >
                        خرید دوره
                      </Button>
                    ) : (
                      <Button
                        onClick={() => buyCourse()}
                        className={`btn px-5 ${SuggestCss.formBtn}`}
                      >
                        خرید دوره
                      </Button>
                    )}
                  </Fragment>
                ) : (
                  <Fragment>
                    {employee ? (
                      <Button
                        onClick={() =>
                          toast.error("امکان خرید دوره برای ادمین وجود ندارد")
                        }
                        className={`btn px-5 ${SuggestCss.formBtn}`}
                      >
                        خرید دوره
                      </Button>
                    ) : (
                      <Button
                        onClick={() => toast.error("لطفا وارد حسابتان شوید")}
                        className={`btn px-5 ${SuggestCss.formBtn}`}
                      >
                        خرید دوره
                      </Button>
                    )}
                  </Fragment>
                )}
              </Col>
            </Row>
          </Col>
          <Col md="4 mt-5">
            <img
              src={imgSrc}
              onError={onError}
              className={`align-self-end d-md-block d-none ${CourseInfoDetailCss.imgSize}`}
              alt=""
            />
          </Col>
        </Row>
      )}
    </Fragment>
  );
};

export default CourseInfoDetail;
