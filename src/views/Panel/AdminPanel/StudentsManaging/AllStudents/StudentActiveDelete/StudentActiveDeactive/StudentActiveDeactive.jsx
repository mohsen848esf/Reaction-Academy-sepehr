import React, { useState } from "react";
import { Toaster, toast } from "react-hot-toast";
import {
  activeStudent,
  deActiveStudent,
} from "../../../../../../../core/services/api/student-management.api";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import styles from "./StudentActiveDeactive.module.css";

const StudentActiveDeactive = ({ studentId, studentStatus, setAllData }) => {
  const [modal, setModal] = useState(null);

  const toggleModal = (id) => {
    if (modal !== id) {
      setModal(id);
    } else {
      setModal(null);
    }
  };

  const handleActiveDeactive = async () => {
    try {
      if (studentStatus === true) {
        const result = await deActiveStudent(studentId);
        setAllData((prevState) => {
          let state = [...prevState];
          const index = prevState.findIndex((stu) => stu._id === studentId);
          state[index].isActive = false;
          return [...state];
        });
        setModal(null);
        toast.success(result.message[0].message);
        return result;
      } else if (studentStatus === false) {
        const result = await activeStudent(studentId);
        setAllData((prevState) => {
          let state = [...prevState];
          const index = prevState.findIndex((stu) => stu._id === studentId);
          state[index].isActive = true;
          return [...state];
        });
        setModal(null);
        toast.success(result.message[0].message);
        return result;
      }
    } catch (error) {
      return error;
    }
  };

  return (
    <React.Fragment>
      <Toaster />
      <div className="d-inline-block mr-1 mb-1">
        <Button
          color={studentStatus ? "warning" : "success"}
          onClick={() => toggleModal(studentId)}
          className={`ms-lg-1 mb-xl-0 mb-1 text-white ${
            studentStatus ? styles.deactiveButton : styles.activeButton
          }`}
        >
          {studentStatus ? "غیرفعال" : "فعال"}
        </Button>
      </div>
      <Modal
        isOpen={modal === studentId}
        toggle={() => toggleModal(studentId)}
        className="modal-dialog-centered"
      >
        <ModalHeader
          toggle={() => toggleModal(studentId)}
          className={studentStatus ? "bg-danger" : "bg-success"}
        >
          {studentStatus ? "فعال" : "غیرفعال"} کردن دانشجو
        </ModalHeader>
        <ModalBody className="text-end">
          آیا مایل به {studentStatus ? "غیرفعال" : "فعال"} کردن دانشجوی مد نظر
          می باشید؟
        </ModalBody>
        <ModalFooter className="text-start">
          <Button
            color={studentStatus ? "danger" : "success"}
            onClick={handleActiveDeactive}
          >
            بله
          </Button>
        </ModalFooter>
      </Modal>
    </React.Fragment>
  );
};

export default StudentActiveDeactive;
