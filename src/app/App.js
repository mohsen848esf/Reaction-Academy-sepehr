import React, { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Route } from "react-router-dom";
import { Redirect } from "react-router";
import { ToastContainer } from "react-toastify";
import AuthenticatedRoutes from "./Route/ApplicationRoutes/AuthenticatedRoutes";
import UnAuthenticatedRoutes from "./Route/ApplicationRoutes/UnAuthenticatedRoutes";
import { getItem } from "../core/manageLocalStorage";
import UserContext from "../core/context/UserContext";
import ConnectionLost from "src/views/ConnectionLost/ConnectionLost";
import EmployeeContext from "src/core/context/EmployeeContext";
import CourseContextProvider from "../core/context/CourseContextProvider";
import NewsContextProvider from "../core/context/NewsContextProvider";
import BackToTop from "../component/common/BackToTop/BackToTop";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../assets/style/main.css";
import "../assets/style/font.css";
import "./App.css";
import "../scss/style.scss";
import Layout from './Route/Layout/Layout';

function App() {
  const [user, setUser] = useState(JSON.parse(getItem("user")));
  const [employee, setEmployee] = useState(JSON.parse(getItem("employee")));
  const [token, setToken] = useState(getItem("token"));

  return (
    <div className="App overflow-hidden">
      <BackToTop />
      <Router>
        <CourseContextProvider>
          <NewsContextProvider>
            {" "}
            <EmployeeContext.Provider
              value={{
                currentEmployee: employee,
                token: token,
                setToken,
                setEmployee,
              }}
            >
              <UserContext.Provider
                value={{ currentUser: user, token: token, setToken, setUser }}
              >
                <ToastContainer />
                {!navigator.onLine ? (
                  <Layout path="/" component={ConnectionLost} /> || (
                    <Redirect to="/connectionLost" />
                  )
                ) : token ? (
                  <AuthenticatedRoutes />
                ) : (
                  <UnAuthenticatedRoutes />
                )}
              </UserContext.Provider>
            </EmployeeContext.Provider>
          </NewsContextProvider>
        </CourseContextProvider>
      </Router>
    </div>
  );
}

export default App;
