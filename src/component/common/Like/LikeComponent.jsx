import React, { useState, useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";
import { ThumbsUp, ThumbsDown } from "react-feather";
import { getItem } from "../../../core/services/storage/storage";
import {
  DisLike,
  Like,
  LikeCount,
} from "../../../core/services/api/likeTerm.api";

const LikeComponent = ({ termId }) => {
  const user = JSON.parse(getItem("user"));
  const employee = JSON.parse(getItem("employee"));
  let [likeFlag, setLikeFlag] = useState(0);
  const [likeCountData, setLikeCountData] = useState([]);

  const likeObj = {
    termId: termId,
    userId: user._id,
  };

  const LikeTerm = async (likeObj) => {
    try {
      if (!user && !employee) toast.error("لطفا وارد حساب خود شوید");
      else if (employee) {
        toast.error("آخه ادمین چرا باید دوره لایک کنه؟", { icon: "😒" });
      }
      const result = await Like(likeObj);
      setLikeFlag(++likeFlag);
      if (result.message[0].message === "شما قبلا این دوره را لایک کردید")
        toast(result.message[0].message, {
          icon: "🤪",
        });
    } catch (error) {
      toast.error(error);
    }
  };

  const DisLikeTerm = async (likeObj) => {
    try {
      if (!user && !employee) toast.error("لطفا وارد حساب خود شوید");
      else if (employee) {
        toast.error("آخه ادمین چرا باید دوره دیسلایک کنه؟", { icon: "😒" });
      }
      const result = await DisLike(likeObj);
      setLikeFlag(--likeFlag);
      if (result.message[0].message === "شما قبلا این دوره را دیسلایک کردید")
        toast(result.message[0].message, {
          icon: "🤪",
        });
    } catch (error) {
      toast.error(error);
    }
  };

  const CountLike = async (termId) => {
    try {
      const data = await LikeCount(termId);
      setLikeCountData(data.result);
    } catch (error) {
      toast.error(error);
    }
  };

  useEffect(() => {
    CountLike(termId);
  }, [likeFlag]);

  return (
    <div className="d-flex justify-content-center col mb-3 mb-xl-0 text-center">
      <div onClick={() => LikeTerm(likeObj)}>
        <span className="ms-1 mt-1 pt-1 badge bg-success rounded-pill pointer">
          {likeCountData?.like}
        </span>
        <ThumbsUp color="#6aca56" className="pointer ms-2" size={21} />
      </div>
      <div onClick={() => DisLikeTerm(likeObj)}>
        <span className="me-2 ms-1 mt-1 pt-1 badge bg-danger rounded-pill pointer">
          {likeCountData?.dislike}
        </span>
        <ThumbsDown color="#dd4c4c" className="mt-1 pointer" size={21} />
      </div>
      <Toaster />
    </div>
  );
};

export default LikeComponent;
