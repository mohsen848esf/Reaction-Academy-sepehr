import React, { useState } from "react";
import { DeleteNews } from "src/core/services/api/news.api";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import styles from "./DeleteSelectedNews.module.css";

const DeleteSelectedNews = ({ newsId, setAllData }) => {
  const [modal, setModal] = useState(null);

  const toggleModal = (id) => {
    if (modal !== id) {
      setModal(id);
    } else {
      setModal(null);
    }
  };

  const handleDelete = async () => {
    try {
      const result = await DeleteNews(newsId);
      setAllData((old) => old.filter((item) => item._id !== newsId));
      setModal(null);
      return result;
    } catch (error) {
      return error;
    }
  };

  return (
    <React.Fragment>
      <div className="d-inline-block mr-1 mb-1">
      <Button
          color="danger"
          onClick={() => toggleModal(newsId)}
          className={`ms-lg-1 mb-xl-0 mb-1 ${styles.deleteButton}`}
        >
          حذف
        </Button>
      </div>
      <Modal
        isOpen={modal === newsId}
        toggle={() => toggleModal(newsId)}
        className="modal-dialog-centered"
      >
        <ModalHeader toggle={() => toggleModal(newsId)} className="bg-danger">
          حذف خبر
        </ModalHeader>
        <ModalBody className="text-end">
          آیا مایل به حذف خبر انتخاب شده می باشید؟
        </ModalBody>
        <ModalFooter className="justify-content-start">
          <Button color="danger" onClick={handleDelete}>
            بله
          </Button>
        </ModalFooter>
      </Modal>
    </React.Fragment>
  );
};

export default DeleteSelectedNews;
