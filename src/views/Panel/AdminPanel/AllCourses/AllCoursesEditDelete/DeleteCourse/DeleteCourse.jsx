import React, { useState } from 'react';
import { DeleteCourse } from '../../../../../../core/services/api/course.api';
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter
} from 'reactstrap';
import styles from './DeleteCourse.module.css';

const DeleteCourses = ({ courseId, setAllData }) => {
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
      const result = await DeleteCourse(courseId);
      setAllData((old) => old.filter(item => item._id !== courseId));
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
          onClick={() => toggleModal(courseId)}
          className={`ms-lg-1 mb-xl-0 mb-1 ${styles.deleteButton}`}
        >
          حذف
        </Button>
      </div>
      <Modal
        isOpen={modal === courseId}
        toggle={() => toggleModal(courseId)}
        className="modal-dialog-centered"
      >
        <ModalHeader
          toggle={() => toggleModal(courseId)}
          className="bg-danger"
        >
          حذف دوره
        </ModalHeader>
        <ModalBody
          className="text-end"
        >
          آیا مایل به حذف دوره ی انتخاب شده می باشید؟
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

export default DeleteCourses;
