import AddCourse from "../../../../component/UserPanel/AllCourses/AddCourse/AddCourse";
import ShamsiDateRender from "../../../../component/UserPanel/AllCourses/ShamsiDateRender/ShamsiDateRender";
import FakeImgCourse from "../../../../component/UserPanel/AllCourses/FakeImgCourse/FakeImgCourse";
import TermsEditDelete from "./EditDelete/TermsEditDelete";
import { getItem } from "src/core/services/storage/storage";

const { role } = JSON.parse(getItem("employee"));
const adminColumns = [
  {
    Header: "عکس ترم",
    accessor: "",
    Cell: FakeImgCourse,
  },
  {
    Header: "نام ترم",
    accessor: "course.courseName",
  },
  {
    Header: "مدرس",
    accessor: "teacher.fullName",
  },
  {
    Header: "نام دوره",
    accessor: "title",
  },
  {
    Header: "تاریخ شروع",
    accessor: "date",
    Cell: ShamsiDateRender,
  },
  {
    Header: "قیمت",
    accessor: "cost",
  },
  {
    Header: "ظرفیت",
    accessor: "capacity",
  },
  {
    Header: "ویرایش",
    accessor: "EditDelete",
    Cell: TermsEditDelete,
    getProps: (props) => ({
      setAllData: props.setAllData,
    }),
  },
];
const teacherColumns = [
  {
    Header: "عکس ترم",
    accessor: "",
    Cell: FakeImgCourse,
  },
  {
    Header: "نام ترم",
    accessor: "course.courseName",
  },
  {
    Header: "مدرس",
    accessor: "teacher.fullName",
  },
  {
    Header: "نام دوره",
    accessor: "title",
  },
  {
    Header: "تاریخ شروع",
    accessor: "date",
    Cell: ShamsiDateRender,
  },
  {
    Header: "قیمت",
    accessor: "cost",
  },
  {
    Header: "ظرفیت",
    accessor: "capacity",
  },
];
let ADMIN_ALLTERMSCOLUMNS;

{
  role === "admin"
    ? (ADMIN_ALLTERMSCOLUMNS = adminColumns)
    : (ADMIN_ALLTERMSCOLUMNS = teacherColumns);
}

export default ADMIN_ALLTERMSCOLUMNS;
