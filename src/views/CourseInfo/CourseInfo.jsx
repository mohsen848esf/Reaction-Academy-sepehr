import { useEffect, useState } from "react";
import {
  Container,
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink,
  Badge,
} from "reactstrap";
import CourseInfoDetail from "../../component/CourseInfoComponents/CourseInfoDetail/CourseInfoDetail";
import CourseInfoCss from "./CourseInfo.module.css";
import SubmitComment from "../../component/CourseInfoComponents/SubmitComment/SubmitComment";
import ViewComments from "../../component/CourseInfoComponents/ViewAllComments/ViewComments";
import { useRouteMatch } from "react-router-dom";

const CourseInfo = () => {
  const [active, setActive] = useState("1");

  const selectedCourse = useRouteMatch().params.id;

  const toggle = (tab) => {
    if (active !== tab) {
      setActive(tab);
    }
  };
  return (
    <Container>
      <Nav tabs className={`mt-5 pe-0 ${CourseInfoCss.tabHeader}`}>
        <NavItem>
          <NavLink
            className={`${CourseInfoCss.tabLink}`}
            active={active === "1"}
            onClick={() => {
              toggle("1");
            }}
          >
            جزئیات دوره
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={`${CourseInfoCss.tabLink}`}
            active={active === "2"}
            onClick={() => {
              toggle("2");
            }}
          >
            نظرات
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={`${CourseInfoCss.tabLink}`}
            active={active === "3"}
            onClick={() => {
              toggle("3");
            }}
          >
            درج نظر
          </NavLink>
        </NavItem>
      </Nav>
      <TabContent
        className={`pt-5 px-4 text-end text-justify mb-5 ${CourseInfoCss.tabContent}`}
        activeTab={active}
      >
        <TabPane tabId="1">
          <CourseInfoDetail selectedCourse={selectedCourse} />
        </TabPane>
        <TabPane tabId="2">
          <ViewComments selectedCourse={selectedCourse} />
        </TabPane>
        <TabPane tabId="3">
          <SubmitComment selectedCourse={selectedCourse} />
        </TabPane>
      </TabContent>
    </Container>
  );
};

export default CourseInfo;
