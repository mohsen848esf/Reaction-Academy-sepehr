import React from "react";
import { Container, Button } from "reactstrap";
import {ToastContainer, toast} from 'react-toastify';
import {getItem} from '../../../core/services/storage/storage';
import {SendComment} from '../../../core/services/api/comment.api';
import { Formik, Form } from "formik";
import * as Yup from "yup";
import Input from "../../common/InputCommon/Input";
import CommentCss from "./SubmitComment.module.css";

const SubmitComment = ({selectedCourse}) => {
  const formSchema = Yup.object().shape({
    commentField: Yup.string()
      .max(200, "بیشتر از 200 حرف")
      .required("فیلد خالی"),
  });


  const user = JSON.parse(getItem("user"));

  const UserComment = async (comment) => {
    try {
      const result = await SendComment(comment);
      toast(result.message);
    } catch (error) {
       toast.error(error);
    }
  }

  return (
    <Container className="pb-5">
      <ToastContainer />
      <Formik
        initialValues={{
          commentField: "",
        }}
        validationSchema={formSchema}
        onSubmit={(values) => {
          const commentObj = {
            email:user.email,
            comment: values.commentField,
            postId :selectedCourse,
            username:user.fullName ,
          }
          user ? UserComment(commentObj) : toast(" برای درج نظر باید در سایت ثبت نام کنید");
        }}
        >
        {({ errors, touched }) => (
          <Form className="text-end px-5">
            <Input
              inputLabel={'ثبت نظر'}
              fieldType="textarea"
              name="commentField"
              type="text"
              placeholder="نظر خود را وارد کنید"
              height={CommentCss.areaSize}
              errors={errors}
              touched={touched}
            />
            <div className="text-start mt-3">
              <Button
                type="submit"
                className={`px-4 text-start ${CommentCss.btnColor}`}>
                ثبت دیدگاه
              </Button>
            </div>
          </Form>
        )}
      </Formik>
    </Container>
  );
};

export default SubmitComment;
