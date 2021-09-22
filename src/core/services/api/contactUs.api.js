import Http from "../interceptor/interceptor";

const MainUrl = process.env.REACT_APP_PUBLIC_PATH;

const ContactUs = async (obj) => {
  try {
    const {data}=  await Http.post(`${MainUrl}contactUs`, obj);
    return data;
  } catch (error) {
    
  }
};

export { ContactUs };
