import Http from "../interceptor/interceptor";

const MainUrl = process.env.REACT_APP_PUBLIC_PATH;

const getAllNews = async () => {
  try {
    const result = await Http.get(`${MainUrl}news`);
    return result.data;
  } catch (error) {
    return error;
  }
};

const NewsById = async (newsId) => {
  try {
    const result = await Http.get(`${MainUrl}news/${newsId}`);
    return result.data;
  } catch (error) {
    return error;
  }
};

const CreateNews = async (newsObj) => {
  try {
    const result = await Http.post(`${MainUrl}news`, newsObj);
    return result.data;
  } catch (error) {
    return error;
  }
};

const UpdateNews = async (newsId, newsObj) => {
  try {
    const result = await Http.put(`${MainUrl}news/${newsId}`, newsObj);
    return result.data;
  } catch (error) {
    return error;
  }
};

const DeleteNews = async (newsId) => {
  try {
    const result = await Http.delete(`${MainUrl}news/${newsId}`);
    return result.data;
  } catch (error) {
    return error;
  }
};

const paginateNews = async (pageNum, pageSize) => {
  try {
    const result = await Http.get(`${MainUrl}news/list?pagenumber=${pageNum}&pagesize=${pageSize}`);
    //console.log(result);
    return result.data
  } catch (error) {
    return error
  }
}

export { getAllNews, NewsById, CreateNews, UpdateNews, DeleteNews, paginateNews };
