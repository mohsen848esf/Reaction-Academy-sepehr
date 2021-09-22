import React, { useState, Fragment, useRef, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { Toaster, toast } from "react-hot-toast";
import * as Yup from "yup";
import { Row, Col, Button, Label, FormGroup } from "reactstrap";
import Input from "../../../../../../component/common/InputCommon/Input";
import EditCourseFormData from "./EditCourseFormData";
import { UploadingPicture } from "../../../../../../core/services/api/AdminApi/uploadPicApi";
import {
  editCourse,
  getCourseById,
} from "../../../../../../core/services/api/course.api";
import PreRingLoader from "../../../../../../component/common/PreLoader/PreRingLoader";
import styles from "./EditCourse.module.css";

const formSchema = Yup.object().shape({
  courseName: Yup.string()
    .min(2, "نام باید بیشتر از 2 کاراکتر باشد")
    .max(20, "بسیار طولانی است")
    .required("پر کردن فیلد الزامیست"),
  description: Yup.string()
    .min(20, "توضیحات خبر باید حداقل بیشتر از 20 کارکتر باشد")
    .required("پر کردن فیلد الزامیست"),
});

const EditCourse = () => {
  const { id } = useParams();
  const [inputValue, setInputValue] = useState("");
  const [getCourse, setCourse] = useState([]);
  const [getImg, setImg] = useState(null);
  let [topicsData, setTopicsData] = useState([]);
  let [flag, setFlag] = useState(false);
  let myRef = useRef(null);
  const history = useHistory();

  //get current Course
  const getCurrentCourse = async () => {
    const { result } = await getCourseById(id);
    setCourse(result);
    setTopicsData(result.topics);
    setImg(result.image);
    setFlag(true);
  };

  useEffect(() => {
    getCurrentCourse();
  }, [flag]);

  const handleSubmit = async (courseObj) => {
    try {
      if (topicsData.length === 0) toast.error("حداقل یک موضوع انتخاب کنید");
      else {
        const result = await editCourse(id, courseObj);
        toast.success("دوره مورد نظر با موفقیت ویرایش شد");
        history.replace("/admin/courses");
        return result;
      }
    } catch (error) {
      toast.error(error);
    }
  };

  // Uploadin Image
  const uploadingImage = (event) => {
    if (event.target.files && event.target.files[0]) {
      let img = event.target.files[0];
      setImg(URL.createObjectURL(img));
    } else {
      setImg(getCourse.image);
    }
  };

  // ==== Topics Functions ====
  const handleValue = (e) => {
    e.preventDefault();
    setInputValue(e.target.value);
  };

  const handleTopics = () => {
    if (inputValue === "") toast.error("موضوع نمی تواند خالی باشد");
    else {
      let topic = topicsData.concat(inputValue);
      setTopicsData(topic);
      setInputValue("");
      myRef.current.value = "";
    }
  };

  const handleDelete = (e) => {
    let element = e.target.innerText;
    let arr = [...topicsData];
    arr = arr.filter((item) => item !== element);
    setTopicsData(arr);
  };

  return (
    <Fragment>
      <section className={`mx-auto p-5 ${styles.courseSection}`}>
        <h2 className="mb-5">ویرایش کردن دوره</h2>
        <Toaster />
        {flag === false ? (
          <PreRingLoader />
        ) : (
          <Formik
            initialValues={{
              courseName: getCourse ? getCourse.courseName : "",
              topics: topicsData,
              description: getCourse ? getCourse.description : "",
              image: getCourse ? getCourse.image : "",
            }}
            validationSchema={formSchema}
            onSubmit={async (values) => {
              const courseObj = {
                courseName: values.courseName,
                topics: topicsData,
                description: values.description,
                image:
                  values.image && typeof values.image !== "string"
                    ? await UploadingPicture(values.image)
                    : getCourse.image,
              };
              handleSubmit(courseObj);
            }}
          >
            {({ errors, touched, setFieldValue }) => (
              <Form className="row mt-4 text-end">
                <img
                  className={`img-fluid img-thumbnail mx-auto mb-3 ${styles.courseImg}`}
                  src={getImg}
                  alt="NO_PIC"
                />
                <Row>
                  <Col className="justify-content-center col-sm-6 col-12 my-2">
                    <FormGroup>
                      <Label for="topics" className="mb-1 pe-2">
                        موضوعات
                      </Label>
                      {topicsData.length >= 5 ? (
                        <div className="input-group mt-2">
                          <Field
                            disabled
                            name="topics"
                            className={`form-control rounded-7 ${styles.topicRadius}`}
                            placeholder="موضوعات"
                            aria-describedby="basic-addon1"
                          />
                          <div class="input-group-append">
                            <button class="btn btn-secondary" type="button">
                              +
                            </button>
                          </div>
                        </div>
                      ) : (
                        <div class="input-group mt-2">
                          <input
                            name="topics"
                            ref={myRef}
                            className={`form-control rounded-7 ${styles.topicRadius}`}
                            placeholder="موضوعات"
                            aria-describedby="basic-addon1"
                            onChange={(e) => {
                              handleValue(e);
                            }}
                          />
                          <div class="input-group-append">
                            <button
                              class="btn btn-secondary"
                              type="button"
                              onClick={() => {
                                handleTopics();
                              }}
                            >
                              +
                            </button>
                          </div>
                        </div>
                      )}{" "}
                      {topicsData.map((topic) => (
                        <span
                          title="حذف موضوع"
                          className={`badge py-2 px-3 bg-info rounded mx-1 mt-1 pointer ${styles.topicSpan}`}
                          onClick={(e) => handleDelete(e)}
                        >
                          {topic}
                        </span>
                      ))}
                      <ErrorMessage
                        name="topics"
                        component="div"
                        className="field-error my-1 font-small text-danger"
                      />
                    </FormGroup>
                  </Col>

                  {EditCourseFormData.map((data) => (
                    <Col className="justify-content-center col-sm-6 col-12 my-2">
                      {
                        <Input
                          fieldType={data.filedType}
                          height={
                            data.filedType === "textarea"
                              ? `${styles.areaSize}`
                              : null
                          }
                          width={
                            data.filedType === "textarea"
                              ? `${styles.areaSize}`
                              : null
                          }
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
                  <Col className="justify-content-center col-sm-6 col-12 my-2">
                    <FormGroup className="mt-1 d-flex">
                      <div className={`text-center pr-2 ${styles.uploadPic}`}>
                        <h2 className={`text-end ${styles.fileTitle}`}>
                          تصویر دوره
                        </h2>
                        <input
                          onChange={(e) =>
                            setFieldValue("image", e.target.files[0]) &&
                            uploadingImage(e)
                          }
                          name="image"
                          type="file"
                          id="file_pic"
                          className={styles.proPic}
                        />
                        <label className={styles.picLable} for="file_pic">
                          {" "}
                          آپلود{" "}
                        </label>
                      </div>
                    </FormGroup>
                  </Col>
                </Row>
                <div className="mt-4 text-center flex-sm-row flex-column ">
                  <Button
                    className="px-md-4 px-3 rounded-7"
                    type="submit"
                    color="success"
                  >
                    ثبت ویرایش
                  </Button>
                </div>
              </Form>
            )}
          </Formik>
        )}
      </section>
    </Fragment>
  );
};

export default EditCourse;
