import React, { lazy, Suspense } from "react";
import { Switch } from "react-router";
import { Redirect, Route } from "react-router-dom";
import PreRingLoader from "src/component/common/PreLoader/PreRingLoader";
import Layout from "../Layout/Layout";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import styles from "./AllRoutes.module.css";

const login = lazy(() =>
  import("../../../views/Authentication/User/Login/Login")
);
const register = lazy(() =>
  import("../../../views/Authentication/User/Register/Register")
);
const forgetPass = lazy(() =>
  import("../../../views/Authentication/User/ForgetPassword/ForgetPass")
);
const courses = lazy(() => import("../../../views/Courses/Courses"));
const courseInfo = lazy(() => import("../../../views/CourseInfo/CourseInfo"));
const news = lazy(() => import("../../../views/News/News"));
const newsInfo = lazy(() => import("../../../views/NewsInfo/NewsInfo"));

const notFound = lazy(() =>
  import("../../../component/common/NotFound/NotFound")
);
const landing = lazy(() => import("../../../views/Landing/Landing"));
const contactUs = lazy(() =>
  import("../../../component/ContactingtUs/ContactingtUs")
);
const ourServices = lazy(() =>
  import("../../../component/common/OurServices/OurServices")
);
const AdminLogin = React.lazy(() => import("../../../views/pages/login/Login"));
const AdminRegister = React.lazy(() =>
  import("../../../views/pages/register/Register")
);

const override = `
  display: block;
  margin: 300px auto;
`;

const UnAuthenticatedRoutes = () => {
  return (
    <Suspense fallback={<PreRingLoader />}>
      <Route
        exact
        render={({ location }) => (
          <TransitionGroup>
            <CSSTransition
              in={true}
              appear={true}
              timeout={3000}
              key={location.pathname}
              classNames={{
                appear: styles.transitionAppear,
                appearActive: styles.transitionAppearActive,
              }}
            >
              <Switch>
                {/* Employee Auth Routes */}
                <Layout
                  exact
                  path="/admin/login"
                  name="Login Page"
                  render={(props) => <AdminLogin {...props} />}
                  footer={false}
                />
                <Layout
                  exact
                  path="/admin/register"
                  name="Register Page"
                  render={(props) => <AdminRegister {...props} />}
                  footer={false}
                />

                {/* User Routes */}
                <Layout
                  path="/login"
                  component={login}
                  footer={false}
                  backGround={false}
                />
                <Layout
                  path="/register"
                  component={register}
                  footer={false}
                  backGround={false}
                />
                <Layout
                  path="/forgetpass"
                  component={forgetPass}
                  footer={false}
                  backGround={false}
                />
                <Layout exact path="/courses" component={courses} />
                <Layout exact path="/news" component={news} />
                <Layout path="/course/:id?" component={courseInfo} />
                <Layout path="/news/:id?" component={newsInfo} />
                <Layout path="/contactus" component={contactUs} />
                <Layout path="/ourservices" component={ourServices} />
                <Layout
                  path="/notfound"
                  component={notFound}
                  backGround={false}
                />
                <Layout exact path="/" component={landing} />
                <Redirect to="/notfound" />
              </Switch>
            </CSSTransition>
          </TransitionGroup>
        )}
      />
    </Suspense>
  );
};

export default UnAuthenticatedRoutes;
