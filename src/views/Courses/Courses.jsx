import React, { Fragment, useEffect, useState } from "react";
import { Terms, paginateTerm } from "../../core/services/api/terms.api";
import PageSearch from "../../component/common/PageSearch/PageSearch";
import Card from "../../component/Courses/Cards/Card";
import {
  useCourseSetState,
  useCourseActions,
} from "../../core/context/CourseContextProvider";
import InfiniteScroll from "react-infinite-scroll-component";
import PreRingLoader from "../../component/common/PreLoader/PreRingLoader";
import defaultPic from "../../assets/img/2.png";
import PageSearchPic from "../../assets/img/2.png";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import styles from "./Courses.module.css";

const masterOptions = [
  { value: "مهدی اصغری", label: "مهدی اصغری", isFixed: true },
  { value: "محمدحسین بحر", label: "محمدحسین بحر", isFixed: true },
  { value: "حیدر صفری", label: "حیدر صفری", isFixed: true },
  { value: "حامد نظری", label: "حامد نظری", isFixed: false },
  { value: "مهدی ولیزاده", label: "مهدی ولیزاده", isFixed: false },
  { value: "محسن اسفندیاری", label: "محسن اسفندیاری", isFixed: false },
];

const Courses = () => {
  const { setCourses } = useCourseSetState();

  const [page, setPage] = useState(2);
  const [hasMore, setHasMore] = useState(true);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const pageSize = 4;

  const { onHandleChange, getFilterData, handleSelectedValue } = useCourseActions();

  const getCourses = async () => {
    try {
      const courses = await paginateTerm(1, pageSize);
      if (courses.result) {
        setCourses(courses.result.terms);
      }
    } catch (error) { }
  };

  const fetchCourses = async () => {
    try {
      const courses = await paginateTerm(page, pageSize);
      return courses;
    } catch (error) {
      return error;
    }
  }

  const fetchData = async () => {
    const coursesFromServer = await fetchCourses();
    if (coursesFromServer.success) {
      setCourses(prevState => [...prevState, ...coursesFromServer.result.terms]);
    }
    else {
      setHasMore(false);
    }
    setPage(page + 1);
  }

  const updateWith = () => {
    setWindowWidth(window.innerWidth)
  }
  //Component DidMount
  useEffect(() => {
    getCourses();
  }, []);

  useEffect(() => {
    window.addEventListener("resize", updateWith, false);
  },[]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { count, filteredItems } = getFilterData();

  return (
    <Fragment>
      <TransitionGroup>
        <CSSTransition
          in={true}
          appear={true}
          timeout={3000}
          classNames={{
            appear: styles.transitionAppear,
            appearActive: styles.transitionAppearActive,
          }}
        >
          <PageSearch
            title="دوره های آموزشی"
            placeHolder="جستجوی دوره . . ."
            onHandleChange={onHandleChange}
            PageSearchPic={PageSearchPic}
            optionsData={masterOptions}
            handleSelectedValue={handleSelectedValue}
          />
        </CSSTransition>
      </TransitionGroup>
      <div className="container d-flex flex-column mt-3">
        {(windowWidth < 767) ?
          <InfiniteScroll
            className='overflow-hidden'
            dataLength={filteredItems.length}
            next={fetchData}
            hasMore={hasMore}
            loader={<PreRingLoader />}
            endMessage={
              <p >
                <b>شما همه دوره ها را مشاهده کرده اید</b>
              </p>
            }
          >
            <div className="row justify-content-around">
              {!count ? (
                <PreRingLoader />
              ) : (
                filteredItems.map((card) => (
                  <Card
                    key={card._id}
                    courseId={card._id}
                    cardPic={card.course.image}
                    cardTitle={card.course.courseName}
                    cardTeacher={card.teacher.fullName}
                    cardDate={card.startDate}
                    courseStatus={card.status}
                    courses={card}
                    fallBackSrc={defaultPic}
                  />
                ))
              )}
            </div>
          </InfiniteScroll>
          :
          <div className="row justify-content-around">
            {!count ? (
              <PreRingLoader />)
              :
              (filteredItems.map((card) => (
                <Card
                  key={card._id}
                  courseId={card._id}
                  cardPic={card.course.image}
                  cardTitle={card.course.courseName}
                  cardTeacher={card.teacher.fullName}
                  cardDate={card.startDate}
                  courseStatus={card.status}
                  courses={card}
                  fallBackSrc={defaultPic}
                />
              ))
              )
            }
            {hasMore ? <div className="row justify-content-center">
              <div className="col ">
                <button className={`btn rounded-5 mx-1 px-3 mb-5 ${styles.bigBtnGold}`} onClick={fetchData}>
                  بیشتر
                </button>
              </div>
            </div> :
              <p >
                <b>شما همه دوره ها را مشاهده کرده اید</b>
              </p>
            }
          </div>
        }
      </div>
    </Fragment>
  );
};

export default Courses;
