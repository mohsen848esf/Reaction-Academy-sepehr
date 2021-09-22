import Http from "../../interceptor/interceptor";

const MainUrl = process.env.REACT_APP_PUBLIC_PATH;

const UploadingPicture = async (pic) => {
  let formData = new FormData();
  formData.append('image', pic);

  try {
    const { data } = await Http.post(`${MainUrl}upload/image`, formData, {
      headers: {
        "Content-Type": "multipart/form-data"
      }
    });
    return data.result;
  } catch (error) {
    return error;
  }
};


export { UploadingPicture };
