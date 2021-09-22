import React, { Fragment, useState } from "react";
import {
  Modal,
  ModalHeader,
  ModalBody
} from 'reactstrap';
import { textSlicerFunction } from "../../utils/textSlicer";

const AllCommentsText = (props) => {
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
    <Fragment>
      <a
        className="mt-3 font-small no-wrap pointer"
        onClick={() => toggleModal(commentId)}
      >
        {/* {comment.slice(0, 80) + "..."} */}
        {textSlicerFunction(comment, 6)}
      </a>
      <Modal
        isOpen={modal === commentId}
        toggle={() => toggleModal(commentId)}
        className="modal-dialog-centered"
      >
        <ModalHeader
          toggle={() => toggleModal(commentId)}
          className="bg-info"
        >
          متن کامل کامنت
        </ModalHeader>
        <ModalBody className="text-end p-4">
          {comment}
        </ModalBody>
      </Modal>
    </Fragment>
  );
};

export default AllCommentsText;
