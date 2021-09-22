import React, { useState, Fragment, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { Row, Col, Button, Label, FormGroup } from "reactstrap";
import { NewsById, UpdateNews } from "src/core/services/api/news.api";
import Input from "../../../../../../component/common/InputCommon/Input";
import PreRingLoader from "src/component/common/PreLoader/PreRingLoader";
import EditNewsFormData from "./EditNewsFormData";
import { UploadingPicture } from "../../../../../../core/services/api/AdminApi/uploadPicApi";
import styles from "./EditNews.module.css";

const formSchema = Yup.object().shape({
  title: Yup.string()
    .min(2, "نام باید بیشتر از 2 کاراکتر باشد")
    .max(20, "بسیار طولانی است")
    .required("پر کردن فیلد الزامیست"),
  text: Yup.string()
    .min(20, "توضیحات خبر باید حداقل بیشتر از 20 کارکتر باشد")
    .required("پر کردن فیلد الزامیست"),
  category: Yup.string().required("پر کردن فیلد الزامیست"),
});

const EditNews = () => {
  const { id } = useParams();
  const [getNews, setNews] = useState([]);
  const [getImg, setImg] = useState(null);
  const history = useHistory();
  let [flag, setFlag] = useState(false);

  //get current News
  const getCurrentNews = async () => {
    const { result } = await NewsById(id);
    setNews(result);
    setImg(result.image);
    setFlag(true);
  };

  const handleSubmit = async (newsObj) => {
    try {
      const result = await UpdateNews(id, newsObj);
      toast.success("خبر مورد نظر با موفقیت ویرایش شد");
      history.replace("/admin/news");
      return result;
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
      setImg(getNews.image);
    }
  };

  useEffect(() => {
    getCurrentNews();
  }, [flag]);

  return (
    <Fragment>
      <section className={` mx-auto p-5 ${styles.newsSection}`}>
        <h2 className="mb-5">ویرایش کردن خبر</h2>
        <ToastContainer />{" "}
        {flag === false ? (
          <PreRingLoader />
        ) : (
          <Formik
            initialValues={{
              title: getNews ? getNews.title : "",
              category: getNews ? getNews.category : "",
              text: getNews ? getNews.text : "",
              image: getNews ? getNews.image : "",
            }}
            validationSchema={formSchema}
            onSubmit={async (values) => {
              const newsObj = {
                title: values.title,
                category: values.category,
                text: values.text,
                image:
                  values.image && typeof values.image !== "string"
                    ? await UploadingPicture(values.image)
                    : getNews.image,
              };
              handleSubmit(newsObj);
            }}
          >
            {({ errors, touched, setFieldValue }) => (
              <Form className="row mt-4 text-end">
                {" "}
                <img
                  className={`img-fluid img-thumbnail mx-auto mb-3 ${styles.newsImg}`}
                  src={getImg}
                  alt="NO_PIC"
                />
                <Row>
                  {EditNewsFormData.map((data) => (
                    <Col className="justify-content-center col-sm-6 col-12 my-2">
                      {data.name === "category" ? (
                        <FormGroup>
                          <Label for={data.name} className="mb-1 pe-2">
                            دسته بندی
                          </Label>
                          <Field
                            as={data.filedType}
                            name={data.name}
                            id={data.name}
                            className={`form-control rounded-7 my-2 ${
                              errors.required &&
                              touched.required &&
                              "is-invalid"
                            }`}
                          >
                            <option value="" selected disabled>
                              دسته بندی را انتخاب کنید
                            </option>
                            <option value="news">خبر</option>
                            <option value="article">مقاله</option>
                          </Field>
                        </FormGroup>
                      ) : (
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
                      )}
                    </Col>
                  ))}
                  <Col className="justify-content-center col-sm-6 col-12 my-2">
                    <FormGroup className="mt-1 d-flex">
                      <div className={`text-center pr-2 ${styles.uploadPic}`}>
                        <h2 className={`text-end ${styles.fileTitle}`}>
                          تصویر خبر
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
                        <label
                          className={`mt-3 ${styles.picLable}`}
                          for="file_pic"
                        >
                          آپلود
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
                    ثبت تغییرات
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

export default EditNews;
