import React, { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import {
  deleteStudentById,
  StudentById,
} from "../../../../../../../core/services/api/student-management.api";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import styles from "./StudentDelete.module.css";

const StudentDelete = ({ studentId, setAllData }) => {
  const [modal, setModal] = useState(null);
  const [studentName, setStudentName] = useState("");

  const toggleModal = (id) => {
    if (modal !== id) {
      setModal(id);
    } else {
      setModal(null);
    }
  };

  const getStudentName = async () => {
    try {
      const { result } = await StudentById(studentId);
      setStudentName(result.fullName);
    } catch (error) {
      return error;
    }
  };

  useEffect(() => {
    getStudentName();
  }, [studentName]);

  const handleDelete = async () => {
    try {
      const result = await deleteStudentById(studentId);
      setAllData((prevState) =>
        prevState.filter((stu) => stu._id !== studentId)
      );
      setModal(null);
      toast.success(
        result.message[0].eventId === 200
          ? `${studentName} با موفقیت حذف شد `
          : "مشکلی پیش آمده"
      );
      return result;
    } catch (error) {
      return error;
    }
  };

  return (
    <React.Fragment>
      <ToastContainer />
      <div className="d-inline-block mr-1 mb-1">
        <Button
          color="danger"
          onClick={() => toggleModal(studentId)}
          className={`ms-lg-1 mb-xl-0 mb-1 ${styles.deleteButton}`}
        >
          حذف
        </Button>
      </div>
      <Modal
        isOpen={modal === studentId}
        toggle={() => toggleModal(studentId)}
        className="modal-dialog-centered"
      >
        <ModalHeader
          toggle={() => toggleModal(studentId)}
          className="bg-danger"
        >
          حذف دانشجو
        </ModalHeader>
        <ModalBody className="text-end">
          آیا مایل به حذف{" "}
          <span className="fw-bold">{`" ${studentName} "`}</span> می باشید؟
        </ModalBody>
        <ModalFooter className="text-start">
          <Button color="danger" onClick={handleDelete}>
            بله
          </Button>
        </ModalFooter>
      </Modal>
    </React.Fragment>
  );
};

export default StudentDelete;
