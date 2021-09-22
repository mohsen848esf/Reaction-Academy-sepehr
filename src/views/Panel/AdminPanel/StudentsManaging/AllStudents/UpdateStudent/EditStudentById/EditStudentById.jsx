import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody } from "reactstrap";
import { Row, Col } from "reactstrap";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { ToastContainer, toast } from "react-toastify";
import { UpdateStudentById } from "../../../../../../../core/services/api/student-management.api";
import Input from "../../../../../../../component/common/InputCommon/Input";
import RegisterInputData from "../../../../../../../core/UpdateStudentInputData ";
import { ModernDatePicker } from "persian-date-picker-mj";
import styles from "./EditStudentById.module.css";

const EditStudentById = ({ student, setAllData }) => {
  const formSchema = Yup.object().shape({
    name: Yup.string()
      .min(2, "نام باید بیشتر از 2 کاراکتر باشد")
      .max(20, "بسیار طولانی است")
      .required("پر کردن فیلد الزامیست"),
    phoneNum: Yup.number().required("پر کردن فیلد الزامیست"),
    nationalID: Yup.number().required("پر کردن فیلد الزامیست"),
    birthDate: Yup.date().required("پر کردن فیلد الزامیست"),
    email: Yup.string()
      .email("ایمیل اشتباه است")
      .required("پر کردن فیلد الزامیست"),
  });

  const [modal, setModal] = useState(null);

  const EditStudent = async (studentId, studentObj) => {
    try {
      const result = await UpdateStudentById(studentId, studentObj);
      setAllData((prevState) => {
        let state = [...prevState];
        const index = prevState.findIndex((stu) => stu._id === studentId);
        state[index].fullName = studentObj.fullName;
        state[index].email = studentObj.email;
        state[index].phoneNumber = studentObj.phoneNumber;
        state[index].nationalId = studentObj.nationalId;
        state[index].birthDate = studentObj.birthDate;
        return [...state];
      });
      setModal(null);
      toast.success(result.message[0].message);
      return result;
    } catch (error) {}
  };

  const toggleModal = (id) => {
    if (modal !== id) {
      setModal(id);
    } else {
      setModal(null);
    }
  };

  return (
    <React.Fragment>
      <ToastContainer />
      <div className="d-inline-block mr-1 mb-1">
        <Button
          color={"success"}
          onClick={() => toggleModal(student._id)}
          className={`ms-lg-1 mb-xl-0 mb-1 text-white ${styles.secondaryButton}`}
        >
          ویرایش دانشجو
        </Button>
      </div>

      <Modal
        isOpen={modal === student._id}
        toggle={() => toggleModal(student._id)}
        className="modal-dialog-centered"
      >
        <ModalHeader
          toggle={() => toggleModal(student._id)}
          className="bg-primary"
        >
          ویرایش اطلاعات دانشجو
        </ModalHeader>
        <ModalBody className="me-3">
          <Formik
            initialValues={{
              name: student ? student.fullName : "",
              birthDate: student ? student.birthDate : "",
              email: student ? student.email : "",
              phoneNum: student ? student.phoneNumber : "",
              nationalID: student ? student.nationalId : "",
            }}
            validationSchema={formSchema}
            onSubmit={(values) => {
              const studentObj = {
                fullName: values.name,
                email: values.email,
                phoneNumber: values.phoneNum,
                birthDate: values.birthDate,
                nationalId: values.nationalID,
              };
              EditStudent(student._id, studentObj);
            }}
          >
            {({ errors, touched }) => (
              <Form className="row mt-4 text-end">
                <Row className="mb-0">
                  {RegisterInputData.map((data) => (
                    <Col className="col-sm-6 col-12 my-1">
                      {data.name === "birthDate" ? (
                        <ModernDatePicker
                          name={data.name}
                          id={data.name}
                          initialValue={student.birthDate}
                          inputClassName="form-control text-end rounded-7 my-2"
                          wrapperClassName="w-100"
                          lableText={data.value}
                        />
                      ) : (
                        <Input
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
                </Row>
                <div className="text-center mt-4 mb-2 flex-sm-row flex-column ">
                  <Button color="primary" className="px-md-4 px-3 rounded-7">
                    ویرایش
                  </Button>
                </div>
              </Form>
            )}
          </Formik>
        </ModalBody>
      </Modal>
    </React.Fragment>
  );
};

export default EditStudentById;
