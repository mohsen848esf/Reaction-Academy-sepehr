import React, { useState, useEffect, Fragment } from "react";
import Card from "../../component/NewsCard/card";
import PageSearch from "./../../component/common/PageSearch/PageSearch";
import { getAllNews, paginateNews } from "../../core/services/api/news.api";
// import { getNewsFilteredData } from "../../core/utils/getFilteredData";
import { useNewsSetState, useNewsActions } from '../../core/context/NewsContextProvider';
import InfiniteScroll from "react-infinite-scroll-component";
import PageSearchPic from "../../assets/img/Course_News_1.png";
import PreRingLoader from "../../component/common/PreLoader/PreRingLoader";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { textSlicerFunction } from '../../views/Panel/AdminPanel/utils/textSlicer';
import styles from "./News.module.css";

const categoryOptions = [
  { value: "article", label: "مقاله", isFixed: true },
  { value: "news", label: "خبر", isFixed: true },
];


const News = () => {
  const { setNews } = useNewsSetState();

  const [page, setPage] = useState(2);
  const [hasMore, setHasMore] = useState(true);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const pageSize = 3;

  const { onHandleChange, getFilterData, handleSelectedValue } = useNewsActions();

  const getNews = async () => {
    try {
      const news = await paginateNews(1, pageSize);
      if (news.result) {
        setNews(news.result.newsList);
        console.log(news.result);
      }
    } catch (error) { }
  };

  const fetchNews = async () => {
    const news = await paginateNews(page, pageSize);
    return news;
  }

  const fetchData = async () => {
    const newsFromServer = await fetchNews();
    console.log("newsFromServer", newsFromServer);
    console.log("page", page);
    if (newsFromServer.success) {
      setNews(prevState => [...prevState, ...newsFromServer.result.newsList]);
    }
    else {
      setHasMore(false);
    }
    setPage(page + 1);
  }

  const updateWith = () => {
    setWindowWidth(window.innerWidth)
  }
  
  useEffect(() => {
    getNews();
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    window.addEventListener("resize", updateWith, false);
  },[]);

  //get Filtered Data
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
            title="  اخبار و مقالات"
            placeHolder="جستجوی دوره . . ."
            onHandleChange={onHandleChange}
            PageSearchPic={PageSearchPic}
            optionsData={categoryOptions}
            handleSelectedValue={handleSelectedValue}
          />
        </CSSTransition>
      </TransitionGroup>
      <div className="container d-flex flex-column mt-3">
        {(windowWidth < 767) ?
          <InfiniteScroll
            dataLength={filteredItems.length}
            next={fetchData}
            hasMore={hasMore}
            loader={<PreRingLoader />}
            endMessage={
              <p>
                <b>شما همه دوره ها را مشاهده کرده اید</b>
              </p>
            }
          >
            <div className="row container mx-auto p-5 pt-2">
              {!count ? (
                <PreRingLoader />
              ) : (
                filteredItems.map((card) => (
                  <Card
                    key={card._id}
                    newsId={card._id}
                    cardTitle={card.title}
                    cardPicture={card.image}
                    cardLike={card.__v}
                    cardCategory={card.category}
                    cardDescription={textSlicerFunction(card.text, 107)}
                  />
                ))
              )}
            </div>
          </InfiniteScroll>
          :
          <div className="row container mx-auto p-5 pt-2">
            {!count ? (
              <PreRingLoader />
            ) : (
              filteredItems.map((card) => (
                <Card
                  key={card._id}
                  newsId={card._id}
                  cardTitle={card.title}
                  cardPicture={card.image}
                  cardLike={card.__v}
                  cardCategory={card.category}
                  cardDescription={textSlicerFunction(card.text, 107)}
                />
              ))
            )}
            {hasMore ? <div className="row justify-content-center">
              <div className="col ">
                <button className={`btn rounded-5 mx-1 px-3 mt-4 ${styles.bigBtnGold}`} onClick={fetchData}>
                  بیشتر
                </button>
              </div>
            </div> :
              <p >
                <b>شما همه  اخبار و مقالات را مشاهده کرده اید</b>
              </p>
            }
          </div>
        }

      </div>
    </Fragment>
  );
};

export default News;
