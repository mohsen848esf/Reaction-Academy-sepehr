import Http from "../interceptor/interceptor";

const MainUrl = process.env.REACT_APP_PUBLIC_PATH;

const Like = async (obj) => {
  try {
    const result = await Http.post(`${MainUrl}term/like`, obj);
    return result.data;
  } catch (error) {
    return error;
  }
};

const DisLike = async (obj) => {
  try {
    const result = await Http.post(`${MainUrl}term/dislike`, obj);
    return result.data;
  } catch (error) {
    return error;
  }
};
const LikeCount = async (termId) => {
  try {
    const result = await Http.get(`${MainUrl}term/likeCount/${termId}`);
    return result.data
  } catch (error) {
    return error;
  }
};
export { Like, DisLike, LikeCount };
