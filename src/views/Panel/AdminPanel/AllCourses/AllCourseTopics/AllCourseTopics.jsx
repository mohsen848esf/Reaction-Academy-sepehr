import React, { useState, Fragment } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ListGroup,
  ListGroupItem,
} from "reactstrap";
import styles from "./AllCourseTopics.module.css";

const AllCourseTopics = (props) => {
  const topicsArr = props.cell.row.original.topics;
  const id = props.cell.row.original._id;
  const [modal, setModal] = useState(null);

  const toggleModal = (id) => {
    if (modal !== id) {
      setModal(id);
    } else {
      setModal(null);
    }
  };

  return (
    <Fragment>
      <div className="d-inline-block mr-1 mb-1">
        <Button
          color="info"
          onClick={() => toggleModal(id)}
          className={`ms-lg-1 mb-xl-0 mb-1 ${styles.infoButton}`}
        >
          موضوعات
        </Button>
      </div>
      <Modal
        isOpen={modal === id}
        toggle={() => toggleModal(id)}
        className="modal-dialog-centered"
      >
        <ModalHeader toggle={() => toggleModal(id)} className="bg-info">
          ترم های ارائه شده
        </ModalHeader>
        <ModalBody className="text-end p-4">
          <ListGroup>
            {topicsArr.map((item) => (
              <ListGroupItem
                key={item}
                action
                className="justify-content-between text-dark"
              >
                {item}
              </ListGroupItem>
            ))}
          </ListGroup>
        </ModalBody>
      </Modal>
    </Fragment>
  );
};

export default AllCourseTopics;
