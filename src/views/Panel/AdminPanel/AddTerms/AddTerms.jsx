import React, { useState, Fragment, useEffect } from "react";
import { Toaster, toast } from "react-hot-toast";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { Row, Col, Button, Label, FormGroup } from "reactstrap";
import Input from "../../../../component/common/InputCommon/Input";
import AddTermsFormData from "../../../../core/AdminInputsData/AddTermsFormData";
import { addterms } from "../../../../core/services/api/terms.api";
import { Courses } from "../../../../core/services/api/course.api";
import { Teachers } from "../../../../core/services/api/teachers.api";
import { ModernDatePicker } from "persian-date-picker-mj";
import { adminShamsiFormater } from "../utils/ShamsiDateExchanger";
import styles from "./AddTerms.module.css";

const formSchema = Yup.object().shape({
  title: Yup.string()
    .min(2, "نام باید بیشتر از 2 کاراکتر باشد")
    .max(20, "بسیار طولانی است")
    .required("پر کردن فیلد الزامیست"),
  cost: Yup.number().required("پر کردن فیلد الزامیست"),
  startDate: Yup.date().required("پر کردن فیلد الزامیست"),
  endDate: Yup.date().required("پر کردن فیلد الزامیست"),
  capacity: Yup.number().required("پر کردن فیلد الزامیست"),
  course: Yup.string().required("پر کردن فیلد الزامیست"),
  teacher: Yup.string().required("پر کردن فیلد الزامیست"),
});

const AddTerms = () => {
  const [getCourses, setCourses] = useState([]);
  const [getTeachers, setTeachers] = useState([]);

  const handleSubmit = async (termObj) => {
    try {
      const result = await addterms(termObj);
      toast.success("دوره مورد نظر با موفقیت ساخته شد");
      return result;
    } catch (error) {
      toast.error(error);
    }
  };

  //get All Courses
  const getAllCourses = async () => {
    const { result } = await Courses();
    setCourses(result);
  };

  //get All Teachers
  const getAllTeachers = async () => {
    const { data } = await Teachers();
    setTeachers(data.result);
  };

  useEffect(() => {
    getAllCourses();
    getAllTeachers();
  }, []);

  return (
    <Fragment>
      <section className={` mx-auto p-5 ${styles.termSection}`}>
        <h2>اضافه کردن ترم</h2>
        <Toaster />
        <Formik
          initialValues={{
            title: "",
            cost: "",
            startDate: "",
            endDate: "",
            capacity: "",
            course: "",
            teacher: "",
          }}
          validationSchema={formSchema}
          onSubmit={(values) => {
            const termObj = {
              title: values.title,
              cost: values.cost,
              endDate: values.endDate,
              startDate: values.startDate,
              capacity: values.capacity,
              teacher: values.teacher,
              course: values.course,
            };
            handleSubmit(termObj);
          }}
        >
          {({ errors, touched }) => (
            <Form className="row mt-4 text-end">
              <Row>
                {AddTermsFormData.map((data) => (
                  <Col className="justify-content-center col-sm-6 col-12 my-2">
                    {
                      <Input
                        fieldType={data.filedType}
                        inputLabel={data.value}
                        name={data.name}
                        id={data.name}
                        placeholder={data.placeholder}
                        type={data.type}
                        errors={errors}
                        touched={touched}
                      />
                    }
                  </Col>
                ))}
                <Col className="justify-content-center my-2">
                  <FormGroup>
                    <Label for="course" className="mb-1 pe-2">
                      انتخاب دوره
                    </Label>
                    <Field
                      as="select"
                      name="course"
                      id="course"
                      className={`form-control rounded-7 my-2 ${
                        errors.required && touched.required && "is-invalid"
                      }`}
                      errors={errors}
                      touched={touched}
                    >
                      <option value="" selected disabled>
                        دوره را انتخاب کنید
                      </option>
                      {getCourses &&
                        getCourses.map((item) => (
                          <option value={item._id}>
                            {`${item.courseName} / ${adminShamsiFormater(
                              item.createDate
                            )}`}
                          </option>
                        ))}
                    </Field>
                  </FormGroup>
                </Col>
                <Col className="justify-content-center my-2">
                  <FormGroup>
                    <Label for="teacher" className="mb-1 pe-2">
                      انتخاب استاد
                    </Label>
                    <Field
                      as="select"
                      name="teacher"
                      id="teacher"
                      className={`form-control rounded-7 my-2 ${
                        errors.required && touched.required && "is-invalid"
                      }`}
                      errors={errors}
                      touched={touched}
                    >
                      <option value="" selected disabled>
                        استاد مورد نظر را انتخاب کنید
                      </option>
                      {getTeachers &&
                        getTeachers.map((item) => (
                          <option value={item._id}>{`${item.fullName}`}</option>
                        ))}
                    </Field>
                  </FormGroup>
                </Col>
                <Col className="justify-content-center col-sm-6 col-12 my-2">
                  <ModernDatePicker
                    name="startDate"
                    forcePosition="top"
                    hasMaximum={false}
                    wrapperClassName="w-100"
                    inputClassName="form-control col-12 text-end rounded-7 my-2"
                    placeholder="تاریخ شروع دوره انتخاب شود"
                    lableText="تاریخ شروع دوره"
                  />
                </Col>
                <Col className="justify-content-center col-sm-6 col-12 my-2">
                  <ModernDatePicker
                    name="endDate"
                    forcePosition="top"
                    hasMaximum={false}
                    wrapperClassName="w-100"
                    inputClassName="form-control col-12 text-end rounded-7 my-2"
                    placeholder="تاریخ پایان دوره انتخاب شود"
                    lableText="تاریخ پایان دوره"
                  />
                </Col>
              </Row>
              <div className="mt-4 text-center flex-sm-row flex-column ">
                <Button
                  className="px-md-4 px-3 rounded-7"
                  type="submit"
                  color="success"
                >
                  ثبت ترم
                </Button>
              </div>
            </Form>
          )}
        </Formik>
      </section>
    </Fragment>
  );
};

export default AddTerms;
