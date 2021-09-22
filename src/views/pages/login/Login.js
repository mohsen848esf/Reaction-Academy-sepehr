import React, { useContext, useState } from "react";
import { Link, useHistory, useLocation } from "react-router-dom";
import Input from "../../../component/common/InputCommon/Input";
import { Row, Col, Button } from "reactstrap";
import {
  CButton,
  CCard,
  CCardBody,
  CCardGroup,
  CCol,
  CContainer,
  CRow,
} from "@coreui/react";
import { ToastContainer, toast } from "react-toastify";
import { removeItem } from "src/core/services/storage/storage";
import { LoginEmployee } from "src/core/services/api/auth-employee.api";
import EmployeeContext from "./../../../core/context/EmployeeContext";
import { Formik, Form } from "formik";
import * as Yup from "yup";

const formSchema = Yup.object().shape({
  email: Yup.string()
    .email("ایمیل اشتباه است")
    .required("پر کردن فیلد الزامیست"),
  password: Yup.string().required("پر کردن فیلد الزامیست"),
});
const Login = () => {
  const location = useLocation();
  const history = useHistory();
  const { setEmployee, setToken } = useContext(EmployeeContext);

  const { email, password } = location.state ? location.state : "";
  const handleLoggedIn = async (employeeObj) => {
    try {
      const result = await LoginEmployee(employeeObj);
      setEmployee(result.result);
      setToken(result.result.jwtToken);
      toast.success(result.message[0].message);
      if (result.result.jwtToken) {
        removeItem("user")
        history.push("/admin");
      }
    } catch (error) {
      toast.error(error);
    }
  };

  return (
    <div className="c-app c-default-layout flex-row align-items-center">
      <ToastContainer />
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md="10">
            <CCardGroup>
              <CCard className="p-4">
                <CCardBody>
                  <Formik
                    initialValues={{
                      email: email ? email : "",
                      password: password ? password : "",
                    }}
                    validationSchema={formSchema}
                    onSubmit={(values) => {
                      const employeeObj = {
                        email: values.email,
                        password: values.password,
                      };
                      handleLoggedIn(employeeObj);
                    }}
                  >
                    {({ errors, touched }) => (
                      <Form className="mt-4 text-end">
                        <div className="row my-2">
                          <Col>
                            <Input
                              name="email"
                              inputLabel="ایمیل"
                              placeholder="Shayan@gmail.com"
                              type="email"
                              errors={errors}
                              touched={touched}
                            />
                          </Col>
                        </div>
                        <div className="row my-2">
                          <Col>
                            <Input
                              name="password"
                              inputLabel="پسوورد"
                              placeholder="483549"
                              type="password"
                              errors={errors}
                              touched={touched}
                            />
                          </Col>
                        </div>
                        <small className="form-group mt-3">
                          <Link to="/forgetpass">رمز عبورم را فراموش کردم</Link>
                        </small>
                        <div className="mt-4">
                          <Button
                            className="px-4 rounded-7"
                            type="submit"
                            color="primary"
                          >
                            ورود
                          </Button>
                        </div>
                      </Form>
                    )}
                  </Formik>
                </CCardBody>
              </CCard>
              <CCard
                className="text-white bg-info py-5 d-md-down-none"
                style={{ width: "44%" }}
              >
                <CCardBody className="text-center">
                  <div>
                    <h2 className="mt-0">ثبت نام</h2>
                    <p className="mt-3 mb-2">حساب کاربری نداری؟</p>
                    <p> همین حالا ثبت نام کن تا به درآمد برسی</p>
                    <Link to="/admin/register">
                      <CButton
                        color="light"
                        className="mt-3 px-3"
                        active
                        tabIndex={-1}
                      >
                        ثبت نام
                      </CButton>
                    </Link>
                  </div>
                </CCardBody>
              </CCard>
            </CCardGroup>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  );
};

export default Login;
