import React, { useState, useContext } from "react";
import UserContext from "./../../../core/context/UserContext";
import Heading from "../../common/Heading/Heading";
import Input from "../../common/InputCommon/Input";
import { UpdateStudentById } from "../../../core/services/api/student-management.api";
import { Button, Row, Col } from "reactstrap";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import PanelProfileInputData from "../../../core/PanelProfileInputData";
import ProfileCss from "./PanelProfile.module.css";
import { ToastContainer, toast } from "react-toastify";
import { setItem } from "../../../core/services/storage/storage";
import { ModernDatePicker } from "persian-date-picker-mj";

const formSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, "نام باید بیشتر از 2 کاراکتر باشد")
    .max(20, "بسیار طولانی است")
    .required("پر کردن فیلد الزامیست"),
  role: Yup.string()
    .min(2, "نقش باید بیشتر از 2 کاراکتر باشد")
    .max(20, "بسیار طولانی است")
    .required("پر کردن فیلد الزامیست"),
  email: Yup.string()
    .email(" آدرس ایمیل نامعتبر")
    .required("پر کردن فیلد الزامیست"),
  birthDate: Yup.date().required("پر کردن فیلد الزامیست"),
  phone: Yup.number().required("پر کردن فیلد الزامیست"),
  nationalId: Yup.number().required("پر کردن فیلد الزامیست")
});

function PanelProfile({ user }) {
  const [student, setStudent] = useState(user);

  const { setUser } = useContext(UserContext);

  const UpdateStudent = async (userId, userObj) => {
    try {
      const result = await UpdateStudentById(userId, userObj);
      toast.success(result.message[0].message);
      setStudent(result.result);
      setUser(result.result);
      console.log("student:", result);
      setItem("user", JSON.stringify(result.result));
    } catch (error) { }
  };

  return (
    <div className={` ${ProfileCss.profilText}`}>
      <Heading className={`${ProfileCss.heading}`} head={"حساب کاربری"} />
      <ToastContainer />
      <Formik
        initialValues={{
          firstName: student ? student.fullName : "",
          role: student ? student.role : "",
          birthDate: student ? student.birthDate : "",
          email: student ? student.email : "",
          phone: student ? student.phoneNumber : "",
          nationalId: student ? student.nationalId : "",
        }}
        enableReinitialize={true}
        validationSchema={formSchema}
        onSubmit={(values) => {
          const userObj = {
            fullName: values.firstName,
            email: values.email,
            phoneNumber: values.phone,
            birthDate: values.birthDate,
            nationalId: values.nationalId,
          };
          UpdateStudent(user._id, userObj);
        }}
      >
        {({ errors, touched }) => (
          <Form className="text-end px-5">
            <Row className="mb-md-4 mb-3">
              {PanelProfileInputData.map((d) => (
                <Col md="6" className="my-3 mb-md-0">
                  {
                  d.name === "birthDate" ? (
                    <ModernDatePicker
                      name={d.name}
                      id={d.name}
                      initialValue={student.birthDate}
                      inputClassName="form-control text-end rounded-7 my-2"
                      wrapperClassName="w-100"
                      lableText={d.value}
                    />
                  ) :
                   d.name === "role" ? (
                    <Input
                      disabled={true}
                      inputLabel={d.value}
                      name={d.name}
                      id={d.name}
                      placeholder={d.placeholder}
                      errors={errors}
                      touched={touched}
                    />
                  ) : (
                    <Input
                      inputLabel={d.value}
                      name={d.name}
                      placeholder={d.placeholder}
                      type={d.type}
                      errors={errors}
                      touched={touched}
                    />
                  )}
                </Col>
              ))}
            </Row>
            <Row className="mt-5">
              <Col className="text-md-end text-center mb-2">
                <Button className={`ms-2 px-4 ${ProfileCss.ButtonReg}`}>
                  ویرایش
                </Button>
              </Col>
            </Row>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default PanelProfile;
