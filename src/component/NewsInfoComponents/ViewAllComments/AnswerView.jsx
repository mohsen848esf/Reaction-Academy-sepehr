import React, { Fragment } from "react";
import CommentsCss from "./ViewAllComments.module.css";
import avatar from "../../../assets/img/avatar.png";

function AnswerView({ answer, date }) {
  return (
    <div className="row me-3">
      {answer ? (
        <Fragment>
          <div className="col-0 col-sm-2 mt-3 ms-md-2 ms-3 text-center">
            <img
              object
              className={`rounded-circle d-none d-sm-block ${CommentsCss.imgSize}`}
              src={avatar}
              alt="Generic placeholder image"
            />
          </div>
          <div className="col-11 col-sm-9 bg-white py-3 font-15 rounded-7">
            <div className="d-flex">
              <h5 className="mb-3 fs-6 fw-md-bold">ادمین</h5>
              <h5
                className={`des-text fs-6 mb-3 me-2 pe-2 pt-1 ${CommentsCss.sendText}`}
              >
                پاسخ در {date}
              </h5>
            </div>
            <p className={`des-text ${CommentsCss.text}`}>{answer}</p>
          </div>{" "}
        </Fragment>
      ) : (
        <Fragment></Fragment>
      )}
    </div>
  );
}

export default AnswerView;
