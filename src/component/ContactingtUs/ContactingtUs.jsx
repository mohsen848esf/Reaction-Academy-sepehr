import React, { useState } from "react";
import { Formik, Form } from "formik";
import { Row, Col } from "reactstrap";
import * as Yup from "yup";
import { toast, ToastContainer } from "react-toastify";
import { Button } from "reactstrap";
import Heading from "../common/Heading/Heading";
import Input from "../common/InputCommon/Input";
import { Search, MinusCircle, PlusCircle, MapPin } from 'react-feather';
import contactUsCss from "./ContactingtUs.module.css";
import { ContactUs } from "../../core/services/api/contactUs.api";


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

const ContacingtUs = () => {
  const mapObj = {
    key: "service.MeftN7Lu6g8vE9NJHKXEETubQAOePngISXqE51Gm",
    type: "osm-bright",
    // type: "standard-day",
    zoom: 16,
    lat: "36.567170",
    long: "53.062184",
    width: 550,
    height: 320,
    marker: "red"
  }
  const [getMapObj, setMapObj] = useState(mapObj);

  const mapZoomInOut = (e) => {
    if (e.target.name === "zoomIn") {
      let newMapObj = { ...getMapObj };
      newMapObj.zoom++;
      setMapObj(newMapObj);
    } else if (e.target.name === "zoomOut") {
      let newMapObj = { ...getMapObj };
      newMapObj.zoom--;
      setMapObj(newMapObj);
    }
  }

  const mapUrl = `https://api.neshan.org/v2/static?key=${getMapObj.key}&type=${getMapObj.type}&zoom=${getMapObj.zoom}&center=${getMapObj.lat},${getMapObj.long}&width=${getMapObj.width}&height=${getMapObj.height}&marker=${getMapObj.marker}`

  return (
    <div className="container pb-2">
      <ToastContainer />
      <Heading head={"تماس و ارتباط با ما"} />
      <div className="row d-flex flex-lg-row flex-column justify-content-center mb-5">
        <div className={`col-lg-6 col-10 col-10 mx-auto`}>
          <div className="row">
            <div
              className={`col-lg-9 col-12 shadow mx-auto py-5 px-4 rounded mt-4 ${contactUsCss.textSize}`}>
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
                          inputLabel={"انتقادات و پیشنهادات شما"}
                          fieldType="textarea"
                          name="suggest"
                          type="text"
                          height={contactUsCss.areaSize}
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
                          className={`px-4 ${contactUsCss.formBtn}`}>
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
        <div className={`col-lg-6 col-10 position-relative shadow mt-3 img-fluid mx-auto align-self-center pe-auto`}>
          <img
            src={mapUrl}
            className="mt-2 img-thumbnail"
            alt="NO_IMAGE"
          />
          <div className={`position-absolute ${contactUsCss.zoomHolder}`}>
            <button
              name="zoomIn"
              type="button"
              disabled={getMapObj.zoom >= 19 ? true : false}
              className="badge rounded-7 btn-outline-success mx-1 px-2 py-1"
              onClick={(e) => mapZoomInOut(e)}
            >
              +
            </button>
            <button
              name="zoomOut"
              type="button"
              disabled={getMapObj.zoom > 15 ? false : true}
              className="badge rounded-7 btn-outline-success mx-1 px-2 py-1"
              onClick={(e) => mapZoomInOut(e)}
            >
              -
            </button>
          </div>
          <p className="m-2 pb-2" style={{ width: "100%" }}>
            <MapPin color="#ff4545" size={24} /> آدرس :
            <span className={`mt-2 mx-1 ${contactUsCss.textSize}`}> ساری - خیابان 18 دی - روبروی خیام - کوچه مدرس - مجتمع مازیار - واحد 15 </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContacingtUs;

