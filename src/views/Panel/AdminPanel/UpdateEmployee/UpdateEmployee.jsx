import React, { useState, useEffect } from "react";
import { useHistory } from 'react-router-dom';
import { getItem } from '../../../../core/services/storage/storage';
import { EmployeeById, UpdateEmployeeById } from '../../../../core/services/api/AdminApi/employeeManegment.api';
import Heading from "../../../../component/common/Heading/Heading";
import Input from "../../../../component/common/InputCommon/Input";
import { Button, Row, Col } from "reactstrap";
import { Formik, Form } from "formik";
import EmployeeInputData from "./EmployeeInputData";
import * as Yup from "yup";
import { ModernDatePicker } from "persian-date-picker-mj";
import PreRingLoader from '../../../../component/common/PreLoader/PreRingLoader';
import { Toaster, toast } from "react-hot-toast";
import ProfileCss from "./UpdateEmployee.module.css";

const formSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, "نام باید بیشتر از 2 کاراکتر باشد")
    .max(20, "بسیار طولانی است")
    .required("پر کردن فیلد الزامیست"),
  email: Yup.string()
    .email(" آدرس ایمیل نامعتبر")
    .required("پر کردن فیلد الزامیست"),
  phone: Yup.number().required("پر کردن فیلد الزامیست"),
  nationalId: Yup.number().required("پر کردن فیلد الزامیست"),
  date: Yup.date().required("پر کردن فیلد الزامیست"),
  address: Yup.string()
    .min(5, "آدرس باید بیشتر از 5 کاراکتر باشد")
    .required("پر کردن فیلد الزامیست"),
});

const UpdateEmployee = () => {
  const [userData, setUserData] = useState(null);
  const history = useHistory()
  let [flag, setFlag] = useState(false);
  const user = JSON.parse(getItem('employee'));

  const UpdateProfile = async (obj) => {
    try {
      const result = await UpdateEmployeeById(userData._id, obj);
      if (result.success === true) {
        toast.success("پروفایل با موفقیت ویرایش شد");
        localStorage.setItem('employee', JSON.stringify(result.result));
        history.replace('/admin');
      }
      else {
        toast.error("خطایی رخ داده است");
      }
    } catch (error) {
      return error;
    }
  };

  const getUserData = async () => {
    const { result } = await EmployeeById(user._id);
    setUserData(result);
    setFlag(true);
  }

  useEffect(() => {
    getUserData();
  }, [flag]);

  return (
    <section className="mx-auto p-4 bg-white rounded-7 ">
      <div className={` ${ProfileCss.profilText}`}>
        <Heading className={`${ProfileCss.heading}`} head={"حساب کاربری"} />
        {flag === false ? (
          <PreRingLoader />
        ) : (
          <Formik
            initialValues={{
              firstName: userData ? userData.fullName : "",
              date: userData ? userData.birthDate : "",
              email: userData ? userData.email : "",
              phone: userData ? userData.phoneNumber : "",
              nationalId: userData ? userData.nationalId : "",
              address: userData ? userData.address : "",
            }}
            validationSchema={formSchema}
            onSubmit={(values) => {
              const EmployeeObj = {
                fullName: values.firstName,
                phoneNumber: values.phone,
                birthDate: values.date,
                email: values.email,
                nationalId: values.nationalId,
                address: values.address,
              };
              UpdateProfile(EmployeeObj);
            }}
          >
            {({ errors, touched }) => (
              <Form className="text-end px-5">
                <Row className="mb-md-4 mb-3">
                  {EmployeeInputData.map((d) => (
                    d.name === "date" ? (
                      <Col className="justify-content-center col-sm-6 col-12 my-2">
                        <ModernDatePicker
                          name="date"
                          initialValue={userData.birthDate}
                          hasMaximum={false}
                          forcePosition="bottom"
                          wrapperClassName="w-100"
                          inputClassName="form-control col-12 text-end rounded-7 my-2"
                          placeholder="تاریخ تولد انتخاب شود"
                          lableText="تاریخ تولد"
                        />
                      </Col>
                    ) : (
                      <Col md="6" className="my-3 mb-md-0">
                        <Input
                          inputLabel={d.value}
                          name={d.name}
                          placeholder={d.placeholder}
                          type={d.type}
                          errors={errors}
                          touched={touched}
                        />
                      </Col>
                    ))
                  )}
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
        )}
      </div>
    </section>
  );
};

export default UpdateEmployee;
