import React, { useState, useEffect } from "react";
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
import { CTooltip } from "@coreui/react";
import { getItem } from "../../core/services/storage/storage";
import NavData from "../../core/NavData";
import avatar from "../../assets/img/avatar.png";
import headerCss from "./Header.module.css";
import profOn from "../../assets/img/profOn.png";
import profOff from "../../assets/img/profOff.png";

const Header = ({ backGround }) => {
  const { pathname: pageLocation } = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  const [dropdownOpen, setDropdownOpen] = useState(false);

  const togglle = () => setDropdownOpen((prevState) => !prevState);

  const [user, setUser] = useState("");
  const [employee, setEmployee] = useState("");
  const [token, setToken] = useState("");

  useEffect(() => {
    const user = JSON.parse(getItem("user"));
    setUser(user);
    const employee = JSON.parse(getItem("employee"));
    setEmployee(employee);
    const token = getItem("token");
    setToken(token);
  }, [pageLocation]);

  return (
    <Navbar
      id="reactionHeader"
      expand="lg"
      className={`h3 py-3 px-2 d-flex justify-content-between ${
        headerCss.menu
      } ${backGround && headerCss.headBack}`}
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
        <ul className={`navbar-nav mx-auto h5 px-0 ${headerCss.menuItems}`}>
          {NavData.map((data) => {
            let navClass = `nav-link fs-6 ms-lg-2 ms-0 navLink`;
            if (pageLocation == data.route) {
              navClass += " navActive";
            }
            return (
              <li key={data.title} className="nav-item">
                <Link to={data.route} className={navClass}>
                  {data.title}
                </Link>
              </li>
            );
          })}
        </ul>
        {token ? (
          <>
            <Dropdown className={`ms-2`} isOpen={dropdownOpen} toggle={togglle}>
              <DropdownToggle className={`py-2 ${headerCss.dropdown}`} caret>
                <span className="ms-1">
                  {" "}
                  {user
                    ? user.fullName + ` (${user.role})`
                    : employee.fullName + ` (${employee.role})`}
                </span>
              </DropdownToggle>
              <DropdownMenu className={`ms-2 ${headerCss.dropdownMenu}`}>
                {employee ? (
                  <Link className="text-decoration-none" to="/admin">
                    <DropdownItem>پنل </DropdownItem>
                  </Link>
                ) : (
                  <Link className="text-decoration-none" to="/userpanel">
                    <DropdownItem>پنل </DropdownItem>
                  </Link>
                )}

                <Link className="text-decoration-none" to="/logout">
                  <DropdownItem> خروج از سایت </DropdownItem>
                </Link>
              </DropdownMenu>
            </Dropdown>
            <CTooltip content={navigator.onLine ? "آنلاین" : "آفلاین"}>
              <img
                className={`ms-2 me-1 p-1 rounded-circle d-inline ${headerCss.userPic}`}
                src={navigator.onLine ? profOn : profOff}
                alt="#"
              />
            </CTooltip>
          </>
        ) : (
          <div className="ms-3 my-2">
            <Link to="/login">
              <button className={`btn-sm px-3 py-2 ${headerCss.loginBtn}`}>
                ورود
              </button>
            </Link>
            <Link to="/register">
              <button className={`btn-sm px-3 py-2 ${headerCss.registerBtn}`}>
                ثبت نام
              </button>
            </Link>
          </div>
        )}
      </Collapse>
    </Navbar>
  );
};

export default Header;
