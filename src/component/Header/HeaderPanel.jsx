import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
import { getItem } from "../../core/services/storage/storage";
import NavData from "../../core/NavData";
import avatar from "../../assets/img/avatar.png";
import headerCss from "./Header.module.css";

const HeaderPanel = ({ backGround }) => {
  const { pathname: pageLocation } = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  const [dropdownOpen, setDropdownOpen] = useState(false);

  const togglle = () => setDropdownOpen((prevState) => !prevState);

  // const user = JSON.parse(getItem("user"));
  // const token = getItem("token");

  return (
    <Navbar
      id="reactionHeader"
      expand="lg"
      className={`h3 bg-white py-3 px-2 d-flex justify-content-between ${
        headerCss.menu
      } ${backGround && headerCss.headBack}`}
      color="light"
      light
    >
      <NavbarBrand>
        <img
          className={`ms-2 me-1 d-inline ${headerCss.avatar}`}
          src={avatar}
          alt="#"
        />
        <h5
          className={`me-1 pt-3 fs-6 d-none d-sm-inline ${headerCss.bahrText}`}
        >
          آکادمی بحر
        </h5>
      </NavbarBrand>

      <NavbarToggler
        className={`ms-3 fs-6 ${headerCss.navIcon}`}
        onClick={toggle}
      />

      <Collapse isOpen={isOpen} navbar>
        <ul className={`navbar-nav mx-auto h5 px-sm-0 ${headerCss.menuItems}`}>
          {NavData.map((data) => {
            let navClass = "nav-link fs-6 ms-lg-2 ms-0";
            if (pageLocation == data.route) {
              console.log(pageLocation, ":", data.route);
              navClass += " navActive";
            }
            return (
              <li className="nav-item">
                <Link to={data.route} className={navClass}>
                  {data.title}
                </Link>
              </li>
            );
          })}
        </ul>
        <>
          <Dropdown className={`ms-2`} isOpen={dropdownOpen} toggle={togglle}>
            <DropdownToggle className={headerCss.dropdownpanel} caret>
              <span className="ms-1">حساب کاربری</span>
            </DropdownToggle>
            <DropdownMenu className={`ms-2 ${headerCss.dropdownMenu}`}>
              <DropdownItem>مشاهده حساب کاربری</DropdownItem>
              <Link className="text-decoration-none" to="/logout">
                <DropdownItem> خروج از سایت </DropdownItem>
              </Link>
            </DropdownMenu>
          </Dropdown>
        </>
      </Collapse>
    </Navbar>
  );
};

export default HeaderPanel;
