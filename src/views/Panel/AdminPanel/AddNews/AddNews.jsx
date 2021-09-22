import React, { Fragment, useState } from "react";
import { useHistory } from "react-router-dom";
import { Toaster, toast } from "react-hot-toast";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { Row, Col, Button, Label, FormGroup } from "reactstrap";
import Input from "../../../../component/common/InputCommon/Input";
import AddNewsFormData from "../../../../core/AdminInputsData/AddNewsFormData";
import { CreateNews } from "src/core/services/api/news.api";
import { UploadingPicture } from "../../../../core/services/api/AdminApi/uploadPicApi";
import styles from "./AddNews.module.css";

const formSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "نام باید بیشتر از 2 کاراکتر باشد")
    .max(20, "بسیار طولانی است")
    .required("پر کردن فیلد الزامیست"),
  text: Yup.string()
    .min(20, "توضیحات خبر باید حداقل بیشتر از 20 کارکتر باشد")
    .required("پر کردن فیلد الزامیست"),
  category: Yup.string().required("پر کردن فیلد الزامیست"),
});

const AddNews = () => {
  const [getImg, setImg] = useState(null);
  const history = useHistory();
  const defaultImg =
    "http://res.cloudinary.com/df9w7u89a/image/upload/v1631641036/mslqznqizkabd2hcrqib.jpg";

  const handleSubmit = async (newsObj) => {
    try {
      const result = await CreateNews(newsObj);
      toast.success("خبر با موفقیت ساخته شد");
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
      setImg(defaultImg);
    }
  };

  return (
    <Fragment>
      <section className={` mx-auto rounded py-3 px-5 bg-white`}>
        <h2 className="mb-5">اضافه کردن خبر</h2>{" "}
        <img
          className={`img-fluid img-thumbnail mb-3 ${styles.newsImg}`}
          src={
            getImg
              ? getImg
              : "http://res.cloudinary.com/df9w7u89a/image/upload/v1631641036/mslqznqizkabd2hcrqib.jpg"
          }
          alt="NO_PIC"
        />
        <Toaster />
        <Formik
          initialValues={{
            name: "",
            category: "",
            image: "",
            text: "",
          }}
          validationSchema={formSchema}
          onSubmit={async (values) => {
            const imgAddress =
              values.image && typeof values.image !== "string"
                ? await UploadingPicture(values.image)
                : "http://res.cloudinary.com/df9w7u89a/image/upload/v1631641036/mslqznqizkabd2hcrqib.jpg";
            const newsObj = {
              title: values.name,
              category: values.category,
              image: imgAddress,
              text: values.text,
            };
            handleSubmit(newsObj);
          }}
        >
          {({ errors, touched, setFieldValue }) => (
            <Form className="row mt-4 text-end">
              <Row>
                {AddNewsFormData.map((data) => (
                  <Col className="justify-content-center col-sm-6 col-12 my-2">
                    {data.name === "category" ? (
                      <FormGroup>
                        <Label for="category" className="mb-1 pe-2">
                          دسته بندی
                        </Label>
                        <Field
                          as="select"
                          name="category"
                          id="category"
                          className={`form-control rounded-7 my-2 ${
                            errors.required && touched.required && "is-invalid"
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
                  className="px-md-4 px-3 mb-3 rounded-7"
                  type="submit"
                  color="success"
                >
                  ثبت خبر
                </Button>
              </div>
            </Form>
          )}
        </Formik>
      </section>
    </Fragment>
  );
};

export default AddNews;
