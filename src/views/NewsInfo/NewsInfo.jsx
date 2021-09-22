import { useState } from "react";
import { useRouteMatch } from "react-router-dom";
import {
  Container,
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink,
  Badge,
} from "reactstrap";
import ViewComments from "../../component/NewsInfoComponents/ViewAllComments/ViewComments";
import SubmitComment from "../../component//NewsInfoComponents/SubmitComment/SubmitComment";
import NewsInfoDetail from "../../component/NewsInfoComponents/NewsInfoDetail/NewsInfoDetail";
import CourseInfoCss from "./NewsInfo.module.css";

const NewsInfo = () => {
  const [active, setActive] = useState("1");
  const selectedNews = useRouteMatch().params.id;

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
            جزئیات اخبار
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
          <NewsInfoDetail selectedNews={selectedNews} />
        </TabPane>

        <TabPane tabId="2">
          <ViewComments selectedNews={selectedNews} />
        </TabPane>

        <TabPane tabId="3">
          <SubmitComment selectedNews={selectedNews} />
        </TabPane>
      </TabContent>
    </Container>
  );
};

export default NewsInfo;
