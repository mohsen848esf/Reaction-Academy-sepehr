import React, { useState, Fragment, useEffect } from "react";
import {
  Button,
  Modal,
  ModalBody,
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";
import StudentAllTermsModal from "./AllTerms/StudentAllTermsModal";
import { Terms } from '../../../../../../../core/services/api/terms.api';
import styles from "./StudentTermsModal.module.css";
import StudentTermsModalData from "./StudentTermsModalData";

const StudentTermsModal = ({ studentId, studentTerms }) => {
  const [modal, setModal] = useState(null);
  const [getTerms, setTerms] = useState([]);
  const [getFilterTerms, setFilterTerms] = useState([]);
  const [active, setActive] = useState("1");

  const studentFilteredTerms = async () => {
    const data = await Terms();
    setTerms(data.result);
    const filterData = data.result.filter(item => item.students.find(el => el._id === studentId));
    setFilterTerms(filterData);
  };

  useEffect(() => {
    studentFilteredTerms();
  }, [getTerms])

  const toggle = (tab) => {
    if (active !== tab) {
      setActive(tab);
    }
  };
  const toggleModal = (id) => {
    if (modal !== id) {
      setModal(id);
    } else {
      setModal(null);
    }
  };

  return (
    <React.Fragment>
      {studentTerms.length === 0 ? (
        <div className="d-inline-block mr-1 mb-1">
          <Button
            color="secondary"
            className={`ms-lg-1 mb-xl-0 mb-1 text-white ${styles.secondaryButton}`}
          >
            ترمی اخذ نشده ⛔️
          </Button>
        </div>
      ) : (
        <Fragment>
          <div className="d-inline-block mr-1 mb-1">
            <Button
              color="info"
              onClick={() => toggleModal(studentId)}
              className={`ms-lg-1 mb-xl-0 mb-1 ${styles.infoButton}`}
            >
              مشاهده ترم ها
            </Button>
          </div>{" "}
          <Modal
            isOpen={modal === studentId}
            toggle={() => toggleModal(studentId)}
            className={`modal-dialog-centered`}
          >
            <Nav tabs className={`${styles.modalSize}`}>
              <NavItem>
                <NavLink
                  className={active === "1" ?
                    `bg-secondary text-black ${styles.elementsCursor}` :
                    `bg-light ${styles.elementsCursor}`
                  }
                  active={active === "1"}
                  onClick={() => {
                    toggle("1");
                  }}
                  toggle={() => toggleModal(studentId)}
                >
                  همه ترم ها
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  className={active === "2" ?
                    `bg-secondary text-black ${styles.elementsCursor}` :
                    `bg-light ${styles.elementsCursor}`
                  }
                  active={active === "2"}
                  onClick={() => {
                    toggle("2");
                  }}
                  toggle={() => toggleModal(studentId)}
                >
                  ترم های اخذ شده دانشجو
                </NavLink>
              </NavItem>

              <ModalBody className="text-end p-4">
                <TabContent
                  className={`text-end text-justify`}
                  activeTab={active}
                >
                  <TabPane tabId="1">
                    <StudentAllTermsModal studentId={studentId} allTerms={getTerms} />
                  </TabPane>
                  <TabPane tabId="2">
                    <StudentTermsModalData studentTerms={getFilterTerms} />
                  </TabPane>
                </TabContent>
              </ModalBody>
            </Nav>
          </Modal>
        </Fragment>
      )}
    </React.Fragment>
  );
};

export default StudentTermsModal;
