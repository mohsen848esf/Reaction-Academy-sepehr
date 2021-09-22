import React, { useState, useEffect } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { ToastContainer, toast } from "react-toastify";
import {
  EmployeeById,
  DeleteEmployee,
} from "src/core/services/api/AdminApi/employeeManegment.api";
import styles from "./EmployeeDelete.module.css";

const EmployeeDelete = ({ EmployeeId, setAllData }) => {
  const [modal, setModal] = useState(null);
  const [employeeName, setEmployeeName] = useState("");

  const toggleModal = (id) => {
    if (modal !== id) {
      setModal(id);
    } else {
      setModal(null);
    }
  };

  const getEmployeeName = async () => {
    try {
      const { result } = await EmployeeById(EmployeeId);
      setEmployeeName(result.fullName);
    } catch (error) {
      return error;
    }
  };

  useEffect(() => {
    getEmployeeName();
  }, [employeeName]);

  const handleDelete = async () => {
    try {
      const result = await DeleteEmployee(EmployeeId);
      setAllData((prevState) =>
        prevState.filter((emp) => emp._id !== EmployeeId)
      );
      setModal(null);
      toast.success(
        result.message[0].eventId === 200
          ? `با موفقیت حذف شد ${employeeName}`
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
          onClick={() => toggleModal(EmployeeId)}
          className={`ms-lg-1 mb-xl-0 mb-1 ${styles.deleteButton}`}
        >
          حذف
        </Button>
      </div>
      <Modal
        isOpen={modal === EmployeeId}
        toggle={() => toggleModal(EmployeeId)}
        className="modal-dialog-centered"
      >
        <ModalHeader
          toggle={() => toggleModal(EmployeeId)}
          className="bg-danger"
        >
          حذف ادمین
        </ModalHeader>
        <ModalBody className="text-end">
          آیا مایل به حذف{" "}
          <span className="fw-bold">{`" ${employeeName} "`}</span> می باشید؟
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

export default EmployeeDelete;
