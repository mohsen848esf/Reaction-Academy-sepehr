import React, { useState } from "react";
import { Row, Col, Label, FormGroup } from "reactstrap";
import {
  CButton,
  CCard,
  CCardBody,
  CCardFooter,
  CCol,
  CContainer,
  CRow,
} from "@coreui/react";
import Input from "../../../component/common/InputCommon/Input";
import AdminRegisterData from "../../../core/AdminRegisterData";
import ReCAPTCHA from 'react-google-recaptcha';
import { Button } from "reactstrap";
import { toast } from "react-toastify";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { Link, useHistory } from "react-router-dom";
import { ModernDatePicker } from "persian-date-picker-mj";
import { RegisterEmployee } from "src/core/services/api/auth-employee.api";

const formSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "نام باید بیشتر از 2 کاراکتر باشد")
    .max(20, "بسیار طولانی است")
    .required("پر کردن فیلد الزامیست"),
  phoneNum: Yup.number().required("پر کردن فیلد الزامیست"),
  nationalID: Yup.number().required("پر کردن فیلد الزامیست"),
  birthDate: Yup.date().required("پر کردن فیلد الزامیست"),
  address: Yup.string()
    .min(5, "آدرس باید بیشتر از 5 کاراکتر باشد")
    .required("پر کردن فیلد الزامیست"),
  email: Yup.string()
    .email("ایمیل اشتباه است")
    .required("پر کردن فیلد الزامیست"),
  password: Yup.string()
    .required("پر کردن فیلد الزامیست")
    .min(8, "بسیار کوتاه است")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
      "پسوود باید دارای هشت کاراکتر، با حرف بزرگ شروع و دارای حروف کوچک و یک کاراکتر باشد"
    ),
  role: Yup.string().required("پر کردن فیلد الزامیست"),
});

const Register = () => {
  const [isVerify, setIsVerify] = useState(false);
  const history = useHistory();
  const SendEmployee = async (employee) => {
    try {
      const result = await RegisterEmployee(employee);
      console.log(result);
      toast.success(result.data.message[0].message);
      if (result.status === 200)
        history.push({
          pathname: "/admin/login",
          state: { email: employee.email, password: employee.password },
        });
    } catch (error) { }
  };

  const handleOnRecaptchaChange = (value) => {
    if (value) {
      setIsVerify(true);
    } else {
      setIsVerify(false);
      toast.error("لطفا دوباره امتحان کنید");
    }
  }

  return (
    <div className="c-app c-default-layout flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md="9" lg="7" xl="6" className="mt-5">
            <CCard>
              <CCardBody className="pe-5 rounded-7">
                <h2>ثبت نام</h2>
                <Formik
                  initialValues={{
                    name: "",
                    email: "",
                    phoneNum: "",
                    nationalID: "",
                    address: "",
                    birthDate: "",
                    password: "",
                    role: "",
                  }}
                  validationSchema={formSchema}
                  onSubmit={(values) => {
                    console.log(values.role);
                    const employeeObj = {
                      fullName: values.name,
                      email: values.email,
                      password: values.password,
                      phoneNumber: values.phoneNum,
                      birthDate: values.birthDate,
                      nationalId: values.nationalID,
                      address: values.address,
                      role: values.role,
                    };
                    SendEmployee(employeeObj);
                  }}
                >
                  {({ errors, touched }) => (
                    <Form className="row mt-4 text-end">
                      <Row>
                        {AdminRegisterData.map((data) => (
                          <Col className="col-sm-6 col-12 my-1">
                            {data.name === "birthDate" ? (
                              <ModernDatePicker
                                name="birthDate"
                                inputClassName="form-control text-end rounded-7 my-2"
                                placeholder="تاریخ را انتخاب نمایید"
                                lableText="تاریخ تولد"
                              />
                            ) : (
                              <Input
                                inputLabel={data.value}
                                name={data.name}
                                id={data.name}
                                placeholder={data.placeholder}
                                type={data.type}
                                errors={errors}
                                touched={touched}
                              />
                            )}
                          </Col>
                        ))}
                        <Col>
                          <FormGroup className="mt-1">
                            <Label for="role" className="mb-1 pe-2">
                              مقام
                            </Label>
                            <Field
                              as="select"
                              name="role"
                              id="role"
                              className={`form-control rounded-7 my-2 ${errors.required &&
                                touched.required &&
                                "is-invalid"
                                }`}
                            >
                              <option value="" disabled>
                                مقام خود را انتخاب کنید
                              </option>
                              <option value="admin">ادمین</option>
                              <option value="teacher">استاد</option>
                            </Field>
                          </FormGroup>
                        </Col>
                      </Row>
                      <ReCAPTCHA
                        className="mb-3 mt-1 pt-1 text-center mx-auto"
                        sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
                        onChange={handleOnRecaptchaChange}
                      />
                      <div className="mt-4 flex-sm-row flex-column text-center">
                        <Button
                          disabled={!isVerify ? "disabled" : null}
                          className="px-md-4 px-3 rounded-7"
                          type="submit"
                          color="primary"
                        >
                          ثبت نام
                        </Button>
                        <Link to="/admin/login">
                          <Button
                            outline
                            className="me-md-4 me-2 px-md-4 px-3 rounded-7"
                            color="info"
                          >
                            ورود
                          </Button>
                        </Link>
                      </div>
                    </Form>
                  )}
                </Formik>
              </CCardBody>
              <CCardFooter className="p-4">
                <CRow>
                  <CCol xs="12" sm="6">
                    <CButton className="btn-facebook mb-1" block>
                      <span>facebook</span>
                    </CButton>
                  </CCol>
                  <CCol xs="12" sm="6">
                    <CButton className="btn-twitter mb-1" block>
                      <span>twitter</span>
                    </CButton>
                  </CCol>
                </CRow>
              </CCardFooter>
            </CCard>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  );
};

export default Register;
