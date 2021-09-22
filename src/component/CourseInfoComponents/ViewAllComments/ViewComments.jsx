import React, { useState, useEffect } from "react";
import { Container, Button } from "reactstrap";
import Comment from "./Comment";
import AnswerView from "./AnswerView";
import NotAnswered from "./NotAnswered";
import { AllComments } from "../../../core/services/api/comment.api";
import { toShamsiDate } from "src/core/utils/toShamsiDate";
import CommentsCss from "./ViewAllComments.module.css";

const ViewComments = ({ selectedCourse }) => {
  const [comments, setComments] = useState([]);

  const getAllComments = async () => {
    try {
      const result = await AllComments();
      const commentForCourse = result.filter(
        (c) => c.postId == selectedCourse && c.verified
      );
      // console.log("commentForCourse:", commentForCourse);
      setComments(commentForCourse);
    } catch (error) {}
  };

  useEffect(() => {
    getAllComments();
  }, []);

  return comments.length !== 0 ? (
    <Container className="pb-5">
      {comments.map((comment) => (
        <div className="mb-5">
          <Comment
            text={comment.comment}
            date={toShamsiDate(comment.createDate)}
            name={comment.username}
          />
          {comment.answer ? (
            <AnswerView
              answer={comment.answer}
              date={toShamsiDate(comment.createDate)}
            />
          ) : (
            <NotAnswered />
          )}
        </div>
      ))}
    </Container>
  ) : (
    <Container className="pb-5">
      <div class={`alert alert-primary text-center`} role="alert">
        نظری برای این دوره ثبت نشده
      </div>
    </Container>
  );
};

export default ViewComments;
