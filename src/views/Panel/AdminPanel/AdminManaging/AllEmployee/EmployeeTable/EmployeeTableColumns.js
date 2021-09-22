import EmployeeImageLoader from "../EmployeeImageLoader/EmployeeImageLoader";
import EmployeeActiveDelete from "../EmployeeActiveDelete/EmployeeActiveDelete";
import EmployeeRole from '../EmployeeRole/EmployeeRole';
import EmployeeTerms from "../EmployeeTermLoader/EmployeeTerms";

export const EMPLOYEE_TABLECOLUMNS = [
  {
    Header: "عکس ادمین",
    accessor: "",
    Cell: EmployeeImageLoader,
  },
  {
    Header: "نام و نام خانوادگی",
    accessor: "fullName",
  },
  {
    Header: "ایمیل",
    accessor: "email",
  },
  {
    Header: "شماره تماس",
    accessor: "phoneNumber",
  },
  {
    Header: "مقام",
    accessor: "role",
    Cell: EmployeeRole,
  },
  {
    Header: 'ترم های ارائه شده',
    accessor: 'terms',
    Cell: EmployeeTerms
},
  {
    Header: "ویرایش",
    accessor: "ActiveDelete",
    Cell: EmployeeActiveDelete,
    getProps: (props) => ({
      setAllData: props.setAllData,
    }),
  },
];
