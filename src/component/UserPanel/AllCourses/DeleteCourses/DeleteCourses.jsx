import React, { useState } from 'react';
import {
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter
} from 'reactstrap';
import { removeStudentFromTerm } from '../../../../core/services/api/course.api';
import { getItem } from '../../../../core/services/storage/storage';
import deleteCourseCss from './DeleteCourses.module.css';
import { useEffect } from 'react';
import { toast } from 'react-hot-toast';
import { Toaster } from 'react-hot-toast';

const DeleteCourses = (props) => {
    const [modal, setModal] = useState(null);

    const termId = props.cell.row.original._id;

    const user = JSON.parse(getItem('user'));

    const toggleModal = id => {
        if (modal !== id) {
            setModal(id)
        } else {
            setModal(null)
        }
    }

    const handleDelete = async () => {
        try {
            const result = await removeStudentFromTerm(user._id, { termId: termId });
            props.setAllData((old) => old.filter(item => item._id !== termId));
            // if (result.success === true || (result.response && result.response.status === 200)) {
            //     toast("دوره با موفقیت حذف شد", {
            //         icon: "🙂",
            //     });
            // } else if (result.response && result.response.status === 404) {
            //     toast.error("حذف دوره با مشکل مواجه شد", {
            //         icon: "☹️",
            //     });
            // }
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
                    className={`ms-lg-1 mb-xl-0 mb-1 ${deleteCourseCss.deleteButton}`}
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
                    حذف
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
            <Toaster
                toastOptions={{
                    success: {
                        style: {
                            background: 'tomato'
                        }
                    },
                    error: {
                        style: {
                            background: '#9de8d0',
                        },
                    }
                }}
            />
        </React.Fragment>
    );
}

export default DeleteCourses;