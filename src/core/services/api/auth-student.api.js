import Http from "../interceptor/interceptor";
import { setItem, clearStorage } from "../storage/storage";

const MainUrl = process.env.REACT_APP_PUBLIC_PATH;

const LoginUser = async (obj) => {
  try {
    const result = await Http.post(`${MainUrl}auth/login`, obj);

    const token = result.data.result.jwtToken;
    const user = result.data.result.studentModel;

    setItem("token", token);
    setItem("user", JSON.stringify(user));

    return result.data;
  } catch (error) {
    return false;
  }
};

const RegisterUser = async (obj) => {
  try {
    const result = await Http.post(`${MainUrl}auth/register`, obj);
    return result;
  } catch (error) {}
};

const logout = () => {
    try {
        clearStorage();
    } catch (error) {  
    }

}

export { LoginUser, RegisterUser, logout };
