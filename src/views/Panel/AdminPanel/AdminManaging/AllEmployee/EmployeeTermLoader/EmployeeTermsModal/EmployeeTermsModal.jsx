import React, { useState, Fragment } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ListGroup,
  ListGroupItem,
} from "reactstrap";
import styles from "./EmployeeTermsModal.module.css";

const EmployeeTermsModal = ({ employeeId, employeeTerms }) => {
  const [modal, setModal] = useState(null);

  const toggleModal = (id) => {
    if (modal !== id) {
      setModal(id);
    } else {
      setModal(null);
    }
  };

  return (
    <React.Fragment>
      {employeeTerms.length === 0 ? (
        <div className="d-inline-block mr-1 mb-1">
          <Button
            color="secondary"
            className={`ms-lg-1 mb-xl-0 mb-1 text-white ${styles.secondaryButton}`}
          >
            ترمی ارائه نشده ⛔️
          </Button>
        </div>
      ) : (
        <Fragment>
          <div className="d-inline-block mr-1 mb-1">
            <Button
              color="info"
              onClick={() => toggleModal(employeeId)}
              className={`ms-lg-1 mb-xl-0 mb-1 ${styles.infoButton}`}
            >
              مشاهده ترم ها
            </Button>
          </div>
          <Modal
            isOpen={modal === employeeId}
            toggle={() => toggleModal(employeeId)}
            className="modal-dialog-centered"
          >
            <ModalHeader
              toggle={() => toggleModal(employeeId)}
              className="bg-info"
            >
              ترم های ارائه شده
            </ModalHeader>
            <ModalBody className="text-end p-4">
              <ListGroup>
                {employeeTerms.map((term) => (
                  <ListGroupItem key={term.course._id} action className="justify-content-between text-dark">
                    {term.course.courseName}
                  </ListGroupItem>
                ))}
              </ListGroup>
            </ModalBody>
          </Modal>
        </Fragment>
      )}
    </React.Fragment>
  );
};

export default EmployeeTermsModal;
