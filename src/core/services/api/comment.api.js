import Http from "../interceptor/interceptor";

const MainUrl = process.env.REACT_APP_PUBLIC_PATH;

const SendComment = async (obj) => {
  try {
    const {data}=  await Http.post(`${MainUrl}comment/send`, obj);
    return data;
  } catch (error) {
    
  }
};

const AllComments = async () => {
  try {
    const {data}=  await Http.get(`${MainUrl}comment/`);
    return data;
  } catch (error) {
    
  }
};

const AnswerComment = async (obj) => {
  try {
    const result=  await Http.post(`${MainUrl}comment/answer`, obj);
    return result;
  } catch (error) {
    
  }
};

const VerifyComment = async (obj) => {
  try {
    const result=  await Http.post(`${MainUrl}comment/verify`, obj);
    return result;
  } catch (error) {
    
  }
};

export { SendComment, AllComments, AnswerComment, VerifyComment };
