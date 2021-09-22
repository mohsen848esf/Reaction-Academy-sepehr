import React from "react";
import Input from "../common/InputCommon/Input";
import { FormGroup, Button } from "reactstrap";
import { Formik, Form } from "formik";
import * as Yup from "yup";

const formSchema = Yup.object().shape({
  required: Yup.string().required("پر کردن فیلد الزامیست"),
  email: Yup.string()
    .email("ایمیل اشتباه است")
    .required("پر کردن فیلد الزامیست"),
});

const ForgetPassForms = ({ formTitle }) => {
  return (
    <section className="col-md-6 col-xs-12 p-5">
      <h2>{formTitle}</h2>
      <Formik
        initialValues={{
          required: "",
          email: "",
        }}
        validationSchema={formSchema}>
        {({ errors, touched }) => (
          <Form className="mt-4 pt-2 text-end">
            <FormGroup className="my-4">
              <Input
                name="email"
                inputLabel="ایمیل"
                placeholder="shayan@gmail.com"
                type="email"
                errors={errors}
                touched={touched}
              />
              {errors.required && touched.required ? (
                <div className="invalid-tooltip mt-25">{errors.required}</div>
              ) : null}
            </FormGroup>
            <div className="mt-4 text-center">
              {" "}
              <Button className="me-4 px-4 rounded-7" color="primary">
                ارسال
              </Button>
            </div>
          </Form>
        )}
      </Formik>
    </section>
  );
};

export default ForgetPassForms;
