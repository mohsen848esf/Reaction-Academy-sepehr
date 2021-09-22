import React, { useState } from 'react';
import { deleteTerm } from '../../../../../../core/services/api/terms.api';
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter
} from 'reactstrap';
import styles from './DeleteTerms.module.css';

const DeleteTerms = ({ termId, setAllData }) => {
  const [modal, setModal] = useState(null);

  const toggleModal = id => {
    if (modal !== id) {
      setModal(id)
    } else {
      setModal(null)
    }
  }

  const handleDelete = async () => {
    try {
      const result = await deleteTerm(termId);
      setAllData((old) => old.filter(item => item._id !== termId));
      setModal(null)
      return result;
    } catch (error) {
      return error;
    }
  }

  return (
    <React.Fragment>
      <div className="d-inline-block mr-1 mb-1">
        <Button
          color="danger"
          onClick={() => toggleModal(termId)}
          className={`ms-lg-1 mb-xl-0 mb-1 ${styles.deleteButton}`}
        >
          حذف
        </Button>
      </div>
      <Modal
        isOpen={modal === termId}
        toggle={() => toggleModal(termId)}
        className="modal-dialog-centered"
      >
        <ModalHeader
          toggle={() => toggleModal(termId)}
          className="bg-danger"
        >
          حذف ترم
        </ModalHeader>
        <ModalBody
          className="text-end"
        >
          آیا مایل به حذف ترم انتخاب شده می باشید؟
        </ModalBody>
        <ModalFooter
          className="justify-content-start"
        >
          <Button
            color="danger"
            onClick={handleDelete}
          >
            بله
          </Button>
        </ModalFooter>
      </Modal>
    </React.Fragment>
  );
}

export default DeleteTerms;
