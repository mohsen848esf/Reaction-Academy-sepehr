import React, { useState, useEffect } from "react";
import { getAllNews } from "../../../core/services/api/news.api";
import _ from "lodash";
import Heading from "../../common/Heading/Heading";
import BlogsTitle from "./BlogsTitle";
import BlogsLandingCard from "./BlogsLandingCard";
import defaultPic from "../../../assets/img/news1.svg";

const BlogsLanding = () => {
  const [blogs, setBlogs] = useState([]);
  const [articles, setArticles] = useState([]);
  const [news, setNews] = useState([]);

  const getBlogs = async () => {
    const news = await getAllNews();
    setBlogs(news.result);
  };

  const getArticle = () => {
    const farticles = blogs.filter((b) => b.category === "article");
    const article = _(farticles).slice(0).take(2).value();
    setArticles(article);
  };
  const getNews = () => {
    const fNews = blogs.filter((b) => b.category === "news");
    const news = _(fNews).slice(0).take(2).value();
    setNews(news);
  };

  useEffect(() => {
    getBlogs();
  }, []);

  useEffect(() => {
    getArticle();
    getNews();
  }, [blogs]);

  return (
    <div className="container pb-2">
      <Heading head={" اخبار و مقالات "} />
      {blogs ? (
        <div className="row d-flex justify-content-between mb-5">
          <div className="col-lg-6 col-11 mx-auto">
            <BlogsTitle title={" اخبار"} />
            {news.map((news) => (
              <BlogsLandingCard
                key={news._id}
                blogId={news._id}
                blogText={news.text}
                blogTitle={news.title}
                blogPic={news.image}
                fallBackSrc={defaultPic}
              />
            ))}
          </div>
          <div className="col-lg-6 col-11 mx-auto">
            <BlogsTitle title={" مقالات"} />
            {articles.map((article) => (
              <BlogsLandingCard
                key={article._id}
                blogId={article._id}
                blogText={article.text}
                blogTitle={article.title}
                blogPic={article.image}
                fallBackSrc={defaultPic}
              />
            ))}
          </div>
        </div>
      ) : (
        <p>خبری موجود نیست</p>
      )}
    </div>
  );
};

export default BlogsLanding;
