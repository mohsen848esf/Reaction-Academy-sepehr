import React, { useState, useEffect } from "react";
import PanelCss from "./UserPanel.module.css";
import ProfPic from "../../../assets/img/prof.jpg";
import PanelProfile from "../../../component/UserPanel/PanelProfile/PanelProfile";
import AccardionCss from "../UserPanel/Accardion.module.css";
import Dashboard from "../../../component/UserPanel/Dashboard/Dashboard";
import AllCourses from "./../../../component/UserPanel/AllCourses/AllCourses";
import MyCourses from "./../../../component/UserPanel/MyCourses/MyCourses";
import {
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink,
  Collapse,
} from "reactstrap";
import { getItem } from "../../../core/services/storage/storage";

const UserPanel = () => {
  const [active, setActive] = useState(1);
  const [collapseID, setCollapseID] = useState(1);

  const toggle = (tab) => {
    if (active !== tab) setActive(tab);
  };

  const toggleCollapse = (NewCollapseID) => {
    if (collapseID !== NewCollapseID) setCollapseID(NewCollapseID);
    else setCollapseID(1);
  };

  const user = JSON.parse(getItem("user"));

  return (
    <div
      className={`container row mx-auto px-0 mb-5 justify-content-center ${PanelCss.main}`}
    >
      <div
        className={`col-lg-3 col-11 mb-2 mb-lg-0 ms-lg-2 ${PanelCss.rightHolder}`}
      >
        <div className={`text-white mx-auto ${PanelCss.profBox}`}>
          <img
            className={`rounded-circle mb-4 ${PanelCss.profile}`}
            src={ProfPic}
            alt=""
          />
          <h5 className="fs-5">{user.fullName}</h5>
          <p className="font-15 mt-3">
            {user.role === "student" ? "دانشجو" : null}
          </p>
        </div>

        <Nav
          tabs
          className={`nav-left pe-0 pb-5 pb-lg-0 ${AccardionCss.accardionHolder}`}
        >
          <NavItem className="w-100 my-1 text-end pointer">
            <NavLink
              className={`w-100 textBlack font-17 ${AccardionCss.navLink}`}
              active={active === 1}
              onClick={() => {
                toggle(1);
              }}
            >
              <i class="fa fa-clone ms-2 fs-6"></i>
              داشبورد
            </NavLink>
          </NavItem>
          <NavItem className="my-1 text-light border-0 pointer">
            <NavLink
              onClick={() => toggleCollapse(2)}
              className="d-flex border-0 px-3"
            >
              <div className="lead textBlack w-100 collapse-title collapsed ms-5 font-17 pointer">
                <i class="fa fa-clone ms-2 fs-6"></i>
                دوره ها
              </div>
            </NavLink>
            <Collapse isOpen={2 == collapseID}>
              <div className="d-flex flex-column p-1 font-15">
                <a className="mt-2 mb-1 des-text text-lg-end pe-2 text-decoration-none pointer">
                  <NavItem
                    className={`w-100 text-lg-end ${AccardionCss.navItem}`}
                  >
                    <NavLink
                      className={`w-100 ${AccardionCss.navLink}`}
                      active={active === 2}
                      onClick={() => {
                        toggle(2);
                      }}
                    >
                      <i class="fa fa-edit ms-2"></i>
                      همه دوره ها
                    </NavLink>
                  </NavItem>
                </a>
                <a className="mb-2 text-lg-end des-text pe-2 text-decoration-none pointer">
                  <NavItem>
                    <NavLink
                      className={`w-100 ${AccardionCss.navLink}`}
                      active={active === 3}
                      onClick={() => {
                        toggle(3);
                      }}
                    >
                      <i class="fa fa-edit ms-2"></i>
                      لیست دوره های من
                    </NavLink>
                  </NavItem>{" "}
                </a>
              </div>
            </Collapse>
          </NavItem>
          <NavItem className={`w-100 my-1 text-end pointer ${AccardionCss.navItem}`}>
            <NavLink
              className={`w-100 textBlack font-17 ${AccardionCss.navLink}`}
              active={active === 4}
              onClick={() => {
                toggle(4);
              }}
            >
              <i class="fa fa-clone ms-2 fs-6"></i>
              ویرایش پروفایل
            </NavLink>
          </NavItem>
        </Nav>
      </div>
      <div className={`col-lg-8 col-11 bg-white ${PanelCss.leftHolder}`}>
        <TabContent activeTab={active}>
          <TabPane tabId={1}>
            <p>
              <Dashboard />
            </p>
          </TabPane>
          <TabPane tabId={2}>
            <AllCourses active={active} />
          </TabPane>
          <TabPane tabId={3}>
            <MyCourses active={active} />
          </TabPane>
          <TabPane tabId={4}>
            <PanelProfile user={user} />
          </TabPane>
        </TabContent>
      </div>
    </div>
  );
};

export default UserPanel;
