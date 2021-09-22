import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { addStudentToTerm } from '../../../../core/services/api/course.api';
import { getItem } from '../../../../core/services/storage/storage';
import addCourseCss from './AddCourse.module.css';
import { toast } from 'react-hot-toast';
import { Toaster } from 'react-hot-toast';

const AddCourse = (props) => {
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

    const handleAddCourse = async () => {
        try {
            const result = await addStudentToTerm(user._id, { termId: termId });
            console.log(result);
            // if (result.success === true) {
            //     toast("دوره با موفقیت افزوده شد", {
            //         icon: "😍",
            //     });
            // } else if (result.response && result.response.status === 404) {
            //     toast.error("شما این دوره را قبلا به لیست خود افزوده اید", {
            //         icon: "🙄",
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
                    color="success"
                    onClick={() => toggleModal(termId)}
                    className={`ms-lg-1 mb-xl-0 mb-1 ${addCourseCss.deleteButton}`}
                >
                    اخذ ترم
                </Button>
            </div>
            <Modal
                isOpen={modal === termId}
                toggle={() => toggleModal(termId)}
                className="modal-dialog-centered"
            >
                <ModalHeader
                    toggle={() => toggleModal(termId)}
                    className="bg-success"
                >
                    اخذ ترم
                </ModalHeader>
                <ModalBody
                    className="text-end"
                >
                    آیا مایل به اضافه کردن دوره ی انتخاب شده می باشید؟
                </ModalBody>
                <ModalFooter
                    className="justify-content-start"
                >
                    <Button
                        color="success"
                        onClick={handleAddCourse}
                    >
                        بله
                    </Button>
                </ModalFooter>
            </Modal>
            <Toaster
                toastOptions={{
                    error: {
                        style: {
                            background: 'tomato'
                        }
                    },
                    success: {
                        style: {
                            background: '#9de8d0',
                        },
                    }
                }}
            />
        </React.Fragment>
    );
}

export default AddCourse;