import React from "react";
import CIcon from "@coreui/icons-react";
import { Book, BookOpen, Clipboard, MessageCircle, Users } from "react-feather";
import { getItem } from "src/core/services/storage/storage";

const { role } = JSON.parse(getItem("employee"));

let _nav;
const adminNav = [
  {
    _tag: "CSidebarNavItem",
    name: "داشبرد",
    to: "/admin/dashboard",
    icon: <CIcon name="cil-speedometer" customClasses="c-sidebar-nav-icon" />,
  },
  { _tag: "CSidebarNavTitle", _children: ["مدیریت محتوا"] },
  {
    _tag: "CSidebarNavDropdown",
    name: "ترم ها",
    route: "/admin/terms",
    className: "",
    icon: <BookOpen size={17} className="AdminsideBarIcons ms-3" />,
    _children: [
      {
        _tag: "CSidebarNavItem",
        name: "اضافه کردن ترم",
        to: "/admin/addterms",
      },
      {
        _tag: "CSidebarNavItem",
        name: "مشاهده  ترم ها",
        to: "/admin/terms",
      },
    ],
  },
  {
    _tag: "CSidebarNavDropdown",
    name: "دوره ها",
    route: "/admin/courses",
    icon: <Book size={17} className="AdminsideBarIcons ms-3" />,
    _children: [
      {
        _tag: "CSidebarNavItem",
        name: "اضافه کردن دوره",
        to: "/admin/addcourses",
      },
      {
        _tag: "CSidebarNavItem",
        name: "مشاهده دوره ها",
        to: "/admin/courses",
      },
    ],
  },
  {
    _tag: "CSidebarNavDropdown",
    name: "مدیریت اخبار",
    route: "/admin/news",
    icon: <Clipboard size={17} className="AdminsideBarIcons ms-3" />,
    _children: [
      {
        _tag: "CSidebarNavItem",
        name: "اضافه کردن خبر",
        to: "/admin/addnews",
      },
      {
        _tag: "CSidebarNavItem",
        name: "مشاهده اخبار",
        to: "/admin/news",
      },
    ],
  },
  {
    _tag: "CSidebarNavDropdown",
    name: "مدیریت کامنت",
    route: "/admin/comments",
    icon: <MessageCircle size={17} className="AdminsideBarIcons ms-3" />,
    _children: [
      {
        _tag: "CSidebarNavItem",
        name: "مشاهده کامنت ها",
        to: "/admin/comments",
      },
    ],
  },
  {
    _tag: "CSidebarNavTitle",
    _children: ["مدیریت کاربران"],
  },
  {
    _tag: "CSidebarNavDropdown",
    name: "مدیریت دانشجویان",
    route: "/admin/allstudents",
    icon: <Users size={17} className="AdminsideBarIcons ms-3" />,
    _children: [
      {
        _tag: "CSidebarNavItem",
        name: "مشاهده دانشجویان",
        to: "/admin/allstudents",
      },
      {
        _tag: "CSidebarNavItem",
        name: " ایجاد دانشجو",
        to: "/admin/createstudent",
      },
    ],
  },
  {
    _tag: "CSidebarNavDropdown",
    name: "مدیریت کارمندان",
    route: "/admin/allemployee",
    icon: <Users size={17} className="AdminsideBarIcons ms-3" />,
    _children: [
      {
        _tag: "CSidebarNavItem",
        name: "مشاهده کارمندان",
        to: "/admin/allemployee",
      },
    ],
  },
  {
    _tag: "CSidebarNavDivider",
  },
  {
    _tag: "CSidebarNavTitle",
    _children: ["حساب کاربری"],
  },
  {
    _tag: "CSidebarNavItem",
    name: "ویرایش پروفایل",
    icon: "cil-user",
    to: "/admin/updateEmployee",
  },
  {
    _tag: "CSidebarNavDivider",
    className: "m-2",
  },
];
const teacherNav = [
  {
    _tag: "CSidebarNavItem",
    name: "داشبرد",
    to: "/admin/dashboard",
    icon: <CIcon name="cil-speedometer" customClasses="c-sidebar-nav-icon" />,
  },
  { _tag: "CSidebarNavTitle", _children: ["مدیریت محتوا"] },
  {
    _tag: "CSidebarNavDropdown",
    name: "ترم ها",
    route: "/admin/terms",
    className: "",
    icon: <BookOpen size={17} className="AdminsideBarIcons ms-3" />,
    _children: [
      {
        _tag: "CSidebarNavItem",
        name: "مشاهده  ترم ها",
        to: "/admin/terms",
      },
    ],
  },
  {
    _tag: "CSidebarNavDropdown",
    name: "دوره ها",
    route: "/admin/courses",
    icon: <Book size={17} className="AdminsideBarIcons ms-3" />,
    _children: [
      {
        _tag: "CSidebarNavItem",
        name: "اضافه کردن دوره",
        to: "/admin/addcourses",
      },
      {
        _tag: "CSidebarNavItem",
        name: "مشاهده دوره ها",
        to: "/admin/courses",
      },
    ],
  },

  {
    _tag: "CSidebarNavDropdown",
    name: "مدیریت اخبار",
    route: "/admin/news",
    icon: <Clipboard size={17} className="AdminsideBarIcons ms-3" />,
    _children: [
      {
        _tag: "CSidebarNavItem",
        name: "اضافه کردن خبر",
        to: "/admin/addnews",
      },
      {
        _tag: "CSidebarNavItem",
        name: "مشاهده اخبار",
        to: "/admin/news",
      },
    ],
  },
  {
    _tag: "CSidebarNavDropdown",
    name: "مدیریت کامنت",
    route: "/admin/comments",
    icon: <MessageCircle size={17} className="AdminsideBarIcons ms-3" />,
    _children: [
      {
        _tag: "CSidebarNavItem",
        name: "مشاهده کامنت ها",
        to: "/admin/comments",
      },
    ],
  },
  {
    _tag: "CSidebarNavDivider",
  },
  {
    _tag: "CSidebarNavTitle",
    _children: ["حساب کاربری"],
  },
  {
    _tag: "CSidebarNavItem",
    name: "ویرایش پروفایل",
    icon: "cil-user",
    to: "/admin/updateEmployee",
  },
  {
    _tag: "CSidebarNavDivider",
    className: "m-2",
  },
];

{
  role === "admin" ? (_nav = adminNav) : (_nav = teacherNav);
}

export default _nav;
