import Http from "../interceptor/interceptor";
import { setItem, clearStorage } from "../storage/storage";

const MainUrl = process.env.REACT_APP_PUBLIC_PATH;

const LoginEmployee = async (obj) => {
  try {
    const result = await Http.post(`${MainUrl}auth/employee/login`, obj);

    const token = result.data.result.jwtToken;
    const employee = result.data.result.employeeModel;

    setItem("token", token);
    setItem("employee", JSON.stringify(employee));

    return result.data;
  } catch (error) {
    return false;
  }
};

const RegisterEmployee = async (obj) => {
  try {
    const result = await Http.post(`${MainUrl}auth/employee/register`, obj);
    return result;
  } catch (error) {}
};

const logout = () => {
  try {
    clearStorage();
  } catch (error) {}
};

export { LoginEmployee, RegisterEmployee, logout };
