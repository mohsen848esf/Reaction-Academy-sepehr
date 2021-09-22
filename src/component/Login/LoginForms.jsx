import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Input from "./../common/InputCommon/Input";
import { Button } from "reactstrap";
import { ToastContainer, toast } from "react-toastify";
import UserContext from "../../core/context/UserContext";
import { LoginUser } from "../../core/services/api/auth-student.api";
import { removeItem } from "src/core/services/storage/storage";
import loginInputData from "../../core/LoginInputData";
import { Row, Col } from "reactstrap";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { useHistory, useLocation } from "react-router-dom";

const formSchema = Yup.object().shape({
  email: Yup.string()
    .email("ایمیل اشتباه است")
    .required("پر کردن فیلد الزامیست"),
  password: Yup.string()
    .min(6, "بسیار کوتاه است")
    .required("پر کردن فیلد الزامیست"),
});

const LoginForms = ({ formTitle }) => {
  const location = useLocation();
  const history = useHistory();
  const { setUser, setToken } = useContext(UserContext);

  const { email, password } = location.state ? location.state : "";

  const handleLoggedIn = async (userObj) => {
    try {
      const result = await LoginUser(userObj);
      removeItem("employee");
      setUser(result.result.studentModel);
      setToken(result.result.jwtToken);
      toast.success(result.message[0].message);
      if (result.result.jwtToken) {
        history.push("/");
      }
    } catch (error) {
      toast(error);
    }
  };
  return (
    <section className="col-md-6 col-xs-12 p-5 mt-3">
      <h2 className="mb-5">{formTitle}</h2>
      <ToastContainer />
      <Formik
        initialValues={{
          email: email ? email : "",
          password: password ? password : "",
        }}
        validationSchema={formSchema}
        onSubmit={(values) => {
          const userObj = {
            email: values.email,
            password: values.password,
          };
          handleLoggedIn(userObj);
        }}
      >
        {({ errors, touched }) => (
          <Form className="mt-4 text-end">
            <Row className="my-4">
              <Col>
                {loginInputData.map((data) => (
                  <Input
                    name={data.name}
                    id={data.name}
                    inputLabel={data.value}
                    placeholder={data.placeholder}
                    type={data.type}
                    errors={errors}
                    touched={touched}
                  />
                ))}
              </Col>
            </Row>
            <small className="form-group mt-3">
              <Link to="/forgetpass">رمز عبورم را فراموش کردم</Link>
            </small>
            <div className="mt-4">
              <Button className="px-4 rounded-7" type="submit" color="primary">
                ورود
              </Button>
              <Link to="/register">
                <Button outline className="me-4 px-3 rounded-7" color="info">
                  ثبت نام
                </Button>
              </Link>
            </div>
          </Form>
        )}
      </Formik>
    </section>
  );
};

export default LoginForms;
