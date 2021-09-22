import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  CCreateElement,
  CSidebar,
  CSidebarBrand,
  CSidebarNav,
  CSidebarNavDivider,
  CSidebarNavTitle,
  CSidebarMinimizer,
  CSidebarNavDropdown,
  CSidebarNavItem,
} from "@coreui/react";
import { NavbarBrand } from "reactstrap";
import { Link } from 'react-router-dom';
import avatar from "../assets/img/avatar.png";
import headerCss from "../component/Header/Header.module.css";
import CIcon from "@coreui/icons-react";

// sidebar nav config
import navigation from "./_nav";

const TheSidebar = () => {
  const dispatch = useDispatch();
  const show = useSelector((state) => state.sidebarShow);

  return (
    <CSidebar
      show={show}
      onShowChange={(val) => dispatch({ type: "set", sidebarShow: val })}
    >
      <CSidebarBrand className="d-md-down-none pointer">
        <NavbarBrand className="ms-4 ps-4">
          <Link to="admin/dashboard">
            <img
              className={`ms-2 me-1 d-inline ${headerCss.panelAvatar}`}
              src={avatar}
              alt="#"
            />
          </Link>
          <h5 className={`me-1 pt-3 fs-6 d-none d-sm-inline`}>آکادمی بحر</h5>{" "}
        </NavbarBrand>
      </CSidebarBrand>
      <CSidebarNav>
        <CCreateElement
          items={navigation}
          components={{
            CSidebarNavDivider,
            CSidebarNavDropdown,
            CSidebarNavItem,
            CSidebarNavTitle,
          }}
        />
      </CSidebarNav>
      {/* <CSidebarMinimizer className="c-d-md-down-none" /> */}
    </CSidebar>
  );
};

export default React.memo(TheSidebar);
