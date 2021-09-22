import React, { useState } from 'react';
import { Verify } from '../../../../../core/services/api/comment.api'
import {
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter
} from 'reactstrap';
import { AnswerComment } from "../../../../../core/services/api/comment.api";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import Input from "../../../../../component/common/InputCommon/Input";
import { ToastContainer, toast } from 'react-toastify';
import styles from './Answer.module.css';

function Answer(props) {

    const formSchema = Yup.object().shape({
        answerField: Yup.string()
            .max(200, "بیشتر از 200 حرف")
            .required("فیلد خالی"),
    });

    const AdminAnswer = async (comment) => {
        try {
            const result = await AnswerComment(comment);
            toast.success(result.data.message);
        } catch (error) {
            return error;
        }
    }

    const { _id: commentId, comment } = props.cell.row.original;

    const [modal, setModal] = useState(null);

    const toggleModal = id => {
        if (modal !== id) {
            setModal(id)
        } else {
            setModal(null)
        }
    }

    return (
        <React.Fragment>
            <ToastContainer />
            <div className="d-inline-block mr-1 mb-1">
                <Button
                    color={"success"}
                    onClick={() => toggleModal(commentId)}
                    className={`ms-lg-1 mb-xl-0 mb-1 text-white ${styles.answerButton}`}
                >
                    پاسخ
                </Button>
            </div>

            <Modal
                isOpen={modal === commentId}
                toggle={() => toggleModal(commentId)}
                className="modal-dialog-centered"
            >
                <ModalHeader
                    toggle={() => toggleModal(commentId)}
                    className="bg-primary"
                >
                    پاسخ به کامنت کاربر
                </ModalHeader>
                <ModalBody
                    className="text-end"
                >
                    <div className="me-5 mb-2"> متن کامنت</div>
                    <div class="alert alert-dark mx-5 mb-3" role="alert">
                        {comment}
                    </div>
                    <Formik
                        initialValues={{
                            answerField: "",
                        }}
                        validationSchema={formSchema}
                        onSubmit={(values) => {
                            const commentObj = {
                                id: commentId,
                                answer: values.answerField,
                            }
                            AdminAnswer(commentObj);
                        }}
                    >
                        {({ errors, touched }) => (
                            <Form className="text-end px-5">
                                <Input
                                    inputLabel={'ثبت پاسخ'}
                                    fieldType="textarea"
                                    name="answerField"
                                    type="text"
                                    placeholder="پاسخ خود را وارد کنید"
                                    height={styles.areaSize}
                                    errors={errors}
                                    touched={touched}
                                />
                                <div className="text-start mt-3">
                                    <Button
                                        type="submit"
                                        className={`px-4 text-start text-white ${styles.btnColor}`}>
                                        ثبت پاسخ
                                    </Button>
                                </div>
                            </Form>
                        )}
                    </Formik>
                </ModalBody>
            </Modal>
        </React.Fragment>
    );
}

export default Answer;