import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { Toaster, toast } from "react-hot-toast";
import {
  activeEmployee,
  deActiveEmployee,
} from "../../../../../../../core/services/api/AdminApi/employeeManegment.api";
import styles from "./EmployeeActiveDeactive.module.css";

const EmployeeActiveDeactive = ({ EmployeeId, EmployeeStatus, setAllData }) => {
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
      if (EmployeeStatus === true) {
        const result = await deActiveEmployee(EmployeeId);
        setAllData((prevState) => {
          let state = [...prevState];
          const index = prevState.findIndex((emp) => emp._id === EmployeeId);
          state[index].isActive = false;
          return [...state];
        });
        setModal(null);
        toast.success(result.message[0].message);
        return result;
      } else if (EmployeeStatus === false) {
        const result = await activeEmployee(EmployeeId);
        setAllData((prevState) => {
          let state = [...prevState];
          const index = prevState.findIndex((emp) => emp._id === EmployeeId);
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
          color={EmployeeStatus ? "warning" : "success"}
          onClick={() => toggleModal(EmployeeId)}
          className={`ms-lg-1 mb-xl-0 mb-1 text-white ${
            EmployeeStatus ? styles.deactiveButton : styles.activeButton
          }`}
        >
          {EmployeeStatus ? "غیرفعال" : "فعال"}
        </Button>
      </div>
      <Modal
        isOpen={modal === EmployeeId}
        toggle={() => toggleModal(EmployeeId)}
        className="modal-dialog-centered"
      >
        <ModalHeader
          toggle={() => toggleModal(EmployeeId)}
          className={EmployeeStatus ? "bg-danger" : "bg-success"}
        >
          {EmployeeStatus ? "غیرفعال" : "فعال"} کردن ادمین
        </ModalHeader>
        <ModalBody className="text-end">
          آیا مایل به {EmployeeStatus ? "غیرفعال" : "فعال"} کردن ادمین مد نظر می
          باشید؟
        </ModalBody>
        <ModalFooter className="text-start">
          <Button color={EmployeeStatus ? "danger" : "success"} onClick={handleActiveDeactive}>
            بله
          </Button>
        </ModalFooter>
      </Modal>
    </React.Fragment>
  );
};

export default EmployeeActiveDeactive;
