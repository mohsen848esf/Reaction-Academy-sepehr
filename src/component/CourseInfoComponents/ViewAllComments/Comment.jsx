import React from 'react';
import CommentsCss from "./ViewAllComments.module.css";
import mediaImg1 from "../../../assets/img/prof.jpg";

function Comment({text, name, date}) {
    return (
        <div className="row mb-3">
            <div className="col-0 col-sm-2 mt-3 ms-md-1 ms-3 text-center">
                <img
                    object
                    className={`rounded-circle d-none d-sm-block ${CommentsCss.imgSize}`}
                    src={mediaImg1}
                    alt="Generic placeholder image"
                />
            </div>
            <div className="col-11 col-sm-9 bg-white py-3 font-15 rounded-7">
                <div className="d-flex">
                    <h5 className="mb-3 fs-6 fw-md-bold">{name}</h5>
                    <h5
                        className={`des-text fs-6 mb-3 me-2 pe-2 pt-1 ${CommentsCss.sendText}`}>
                        ارسال در {date}
                    </h5>
                </div>
                <p className={`des-text ${CommentsCss.text}`}>{text}</p>
            </div>
        </div>
    );
}

export default Comment;