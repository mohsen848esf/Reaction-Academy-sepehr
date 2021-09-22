import React, { useState } from "react";
import Input from "../../../../../component/common/InputCommon/Input";
import { Button } from "reactstrap";
import { RegisterUser } from "../../../../../core/services/api/auth-student.api";
import { Toaster, toast } from "react-hot-toast";
import RegisterInputData from "../../../../../core/RegisterInputData";
import { Row, Col } from "reactstrap";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import ReCAPTCHA from "react-google-recaptcha";
import { Link, useHistory } from "react-router-dom";
import { ModernDatePicker } from "persian-date-picker-mj";
import styles from "./CreateStudent.module.css";

const formSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "نام باید بیشتر از 2 کاراکتر باشد")
    .max(20, "بسیار طولانی است")
    .required("پر کردن فیلد الزامیست"),
  phoneNum: Yup.number().required("پر کردن فیلد الزامیست"),
  nationalID: Yup.number().required("پر کردن فیلد الزامیست"),
  birthDate: Yup.date().required("پر کردن فیلد الزامیست"),
  email: Yup.string()
    .email("ایمیل اشتباه است")
    .required("پر کردن فیلد الزامیست"),
  password: Yup.string()
    .min(6, "بسیار کوتاه است")
    .required("پر کردن فیلد الزامیست"),
});

const CreateStudent = (props) => {
  const [isVerify, setIsVerify] = useState(false);

  const history = useHistory();
  const SendUser = async (user) => {
    try {
      console.log(user);
      const result = await RegisterUser(user);
      console.log(result);
      toast(result.data.message[0].message);
      // if (result.status === 200)
      //   history.push({
      //     pathname: "/login",
      //     state: { email: user.email, password: user.password },
      //   });
    } catch (error) {}
  };

  const handleOnRecaptchaChange = (value) => {
    if (value) {
      setIsVerify(true);
    } else {
      setIsVerify(false);
      toast.error("لطفا دوباره امتحان کنید");
    }
  };
  return (
    <section className={`mx-auto p-5 ${styles.courseSection}`}>
      <h2> ایجاد دانشجو</h2>
      <Toaster />
      <Formik
        initialValues={{
          name: "",
          phoneNum: "",
          nationalID: "",
          birthDate: "",
          email: "",
          password: "",
        }}
        validationSchema={formSchema}
        onSubmit={(values) => {
          const userObj = {
            fullName: values.name,
            email: values.email,
            password: values.password,
            phoneNumber: values.phoneNum,
            birthDate: values.birthDate,
            nationalId: values.nationalID,
          };
          SendUser(userObj);
        }}
      >
        {({ errors, touched }) => (
          <Form className="row mt-4 text-end">
            <Row className="mb-0">
              {RegisterInputData.map((data) => (
                <Col className="col-sm-6 col-12 my-1">
                  {data.name === "birthDate" ? (
                    <ModernDatePicker
                      name="birthDate"
                      inputClassName="form-control text-end rounded-7 my-2"
                      wrapperClassName="w-100"
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
            </Row>
            <div className="mt-4 flex-sm-row flex-column ">
              <ReCAPTCHA
                className="mb-3 mt-1 pt-1"
                sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
                onChange={handleOnRecaptchaChange}
              />
              <Button
                disabled={!isVerify ? "disabled" : null}
                className={`px-md-4 px-3 rounded-7`}
                type="submit"
                color="success"
              >
                ثبت نام
              </Button>
            </div>
          </Form>
        )}
      </Formik>
    </section>
  );
};

export default CreateStudent;
