import React, { useState } from "react";
import { VerifyComment } from "../../../../../core/services/api/comment.api";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { Toaster, toast } from "react-hot-toast";
import styles from "./CommentVerify.module.css";

function CommentVerify(props) {
  const { _id: commentId, verified } = props.cell.row.original;
  // console.log(commentId);
  // console.log(verified);

  const [modal, setModal] = useState(null);

  const toggleModal = (id) => {
    if (modal !== id) {
      setModal(id);
    } else {
      setModal(null);
    }
  };

  const handleVerify = async () => {
    try {
      const commentIdObj = {
        id: commentId,
      };
      const result = await VerifyComment(commentIdObj);
      props.setAllData((prevState) => {
        let state = [...prevState];
        const index = prevState.findIndex((cmt) => cmt._id === commentId);
        state[index].verified = true;
        return [...state];
      });
      setModal(null);
      toast.success(result.data.message);
      return result;
    } catch (error) {
      return error;
    }
  };

  return (
    <React.Fragment>
      <Toaster />
      <div className="d-inline-block mr-1 mb-1">
        <Button
          color={verified ? "success" : "warning"}
          onClick={() => toggleModal(commentId)}
          className={`ms-lg-1 mb-xl-0 mb-1 text-white ${styles.verifiedButton}`}
        >
          {verified == true ? "تایید شده" : "تایید نشده"}
        </Button>
      </div>
      {verified ? (
        <Modal
          isOpen={modal === commentId}
          toggle={() => toggleModal(commentId)}
          className="modal-dialog-centered"
        >
          <ModalHeader
            toggle={() => toggleModal(commentId)}
            className="bg-info"
          >
            تایید کردن کامنت
          </ModalHeader>
          <ModalBody className="text-end">
            این کامنت قبلا تایید شده است.
          </ModalBody>
        </Modal>
      ) : (
        <Modal
          isOpen={modal === commentId}
          toggle={() => toggleModal(commentId)}
          className="modal-dialog-centered"
        >
          <ModalHeader
            toggle={() => toggleModal(commentId)}
            className="bg-info"
          >
            تایید کردن کامنت
          </ModalHeader>
          <ModalBody className="text-end">
            آیا مایل به تایید کردن کامنت مد نظر می باشید؟
          </ModalBody>
          <ModalFooter className="text-start">
            <Button className="text-start" color="info" onClick={handleVerify}>
              بله
            </Button>
          </ModalFooter>
        </Modal>
      )}
    </React.Fragment>
  );
}

export default CommentVerify;
