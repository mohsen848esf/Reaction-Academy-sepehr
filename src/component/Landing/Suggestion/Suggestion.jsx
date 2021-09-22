import React from "react";
import { Formik, Form } from "formik";
import { Row, Col } from "reactstrap";
import * as Yup from "yup";
import { toast, ToastContainer } from "react-toastify";
import { Button } from "reactstrap";
import Heading from "../../common/Heading/Heading";
import Input from "../../common/InputCommon/Input";
import suggestPic from "../../../assets/img/suggest.svg";
import SuggestCss from "./Suggestion.module.css";
import { ContactUs } from "../../../core/services/api/contactUs.api";


const sendSuggest = async (comment) => {
  try {
    const result = await ContactUs(comment);
    console.log(result.message[0].message);
    toast.success(result.message[0].message);
  } catch (error) {
    toast.error(error.message[0].message);
  }
}

const formSchema = Yup.object().shape({
  suggest: Yup.string().max(200, "بیشتر از 200 حرف").required("پر کردن فیلد الزامیست"),
  email: Yup.string().email(" آدرس ایمیل نامعتبر").required("پر کردن فیلد الزامیست"),
});

const Suggestion = () => {
  return (
    <div className="container pb-2">
      <ToastContainer />
      <Heading head={" پیشنهادات و شکایات"} />
      <div className="row d-flex justify-content-center mb-5">
        <div className={`col-lg-6 col-10 col-10 mx-auto`}>
          <div className="row">
            <div
              className={`col-lg-9 col-12 shadow mx-auto bg-white py-5 px-4 rounded mt-4 ${SuggestCss.textSize}`}>
              <Formik
                initialValues={{
                  suggest: "",
                  email: "",
                }}
                validationSchema={formSchema}
                onSubmit={(values) => {
                  const commentObj = {
                    email: values.email,
                    comment: values.suggest,
                    name: ""
                  }
                  sendSuggest(commentObj);
                }}
              >
                {({ isSubmitting, errors, touched }) => (
                  <Form className="text-end px-5">
                    <Row className="mb-4">
                      <Col>
                        <Input
                          inputLabel={"ایمیل شما"}
                          name={"email"}
                          id={"email"}
                          placeholder={"Reaction@gmail.com"}
                          errors={errors}
                          touched={touched}
                        />
                      </Col>
                    </Row>
                    <Row className="mb-4">
                      <Col>
                        <Input
                          inputLabel={"نظر شما"}
                          fieldType="textarea"
                          name="suggest"
                          type="text"
                          height={SuggestCss.areaSize}
                          errors={errors}
                          touched={touched}
                        />
                      </Col>
                    </Row>
                    <Row>
                      <Col>
                        <Button
                          type="submit"
                          disabled={isSubmitting}
                          className={`px-4 ${SuggestCss.formBtn}`}>
                          ارسال
                        </Button>
                      </Col>
                    </Row>
                  </Form>
                )}
              </Formik>
            </div>
          </div>
        </div>
        <div className={`col-lg-6 col-10 img-fluid mx-auto align-self-center`}>
          <img
            src={suggestPic}
            className="w-100 d-lg-block d-none "
            alt="Intro"
          />
        </div>
      </div>
    </div>
  );
};

export default Suggestion;
