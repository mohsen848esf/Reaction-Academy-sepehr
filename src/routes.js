import React from 'react';

const Toaster = React.lazy(() => import('./views/notifications/toaster/Toaster'));
const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'));
const AllTerms = React.lazy(() => import('./views/Panel/AdminPanel/AllTerms/AllTerms'));
const AllCourses = React.lazy(() => import('./views/Panel/AdminPanel/AllCourses/AdminAllCourses'));
const AllComments = React.lazy(() => import('./views/Panel/AdminPanel/AllComments/AdminAllComments'));
const AllEmployee = React.lazy(() => import('./views/Panel/AdminPanel/AdminManaging/AllEmployee/EmployeeTable/EmployeeTable'));
const AllTeachers = React.lazy(() => import('./views/Panel/AdminPanel/AdminManaging/AllTeachers/AllTeachers'));
const AllStudents = React.lazy(() => import('./views/Panel/AdminPanel/StudentsManaging/AllStudents/StudentsTable/StudentsTable'));
const CreateStudent = React.lazy(() => import('./views/Panel/AdminPanel/StudentsManaging/CreateStudent/CreateStudent'));
const AllNews = React.lazy(() => import('./views/Panel/AdminPanel/AllNews/AdminAllNews'))
const AddTerms = React.lazy(() => import('./views/Panel/AdminPanel/AddTerms/AddTerms'));
const EditTerm = React.lazy(() => import('./views/Panel/AdminPanel/AllTerms/EditDelete/EditTerms/EditTerms'));
const EditCourse = React.lazy(() => import('./views/Panel/AdminPanel/AllCourses/AllCoursesEditDelete/EditCourse/EditCourse'));
const EditNews = React.lazy(() => import('./views/Panel/AdminPanel/AllNews/AllNewsEditDelete/EditNews/EditNews'));
const AddNews = React.lazy(() => import('./views/Panel/AdminPanel/AddNews/AddNews'));
const AddCourses = React.lazy(() => import('./views/Panel/AdminPanel/AddCourses/AddCourses'));
const UpdateEmployee = React.lazy(() => import('./views/Panel/AdminPanel/UpdateEmployee/UpdateEmployee'));

const routes = [
  { path: '/admin/', exact: true, name: 'داشبرد' },
  { path: '/admin/dashboard', component: Dashboard },
  { path: '/admin/terms', name: 'ترم ها', component: AllTerms },
  { path: '/admin/addterms', name: 'ایجاد ترم', component: AddTerms },
  { path: '/admin/editterm/:id', name: 'ویرایش ترم', component: EditTerm },
  { path: '/admin/courses', name: 'دوره ها', component: AllCourses },
  { path: '/admin/addcourses', name: 'ایجاد دوره', component: AddCourses },
  { path: '/admin/editcourse/:id', name: 'ویرایش دوره', component: EditCourse },
  { path: '/admin/news', name: 'اخبار', component: AllNews },
  { path: '/admin/addnews', name: 'ایجاد خبر', component: AddNews },
  { path: '/admin/editnews/:id', name: 'ویرایش خبر', component: EditNews },
  { path: '/admin/comments', name: 'نظرات', component: AllComments },
  { path: '/admin/teachers', name: 'اساتید', component: AllTeachers },
  { path: '/admin/allemployee',  name: 'کارمندان', component: AllEmployee },
  { path: '/admin/allstudents',  name: 'دانشجویان', component: AllStudents },
  { path: '/admin/createstudent',  name: 'ایجاد دانشجو', component: CreateStudent },
  { path: '/admin/updateEmployee', exact: true, name: 'ویرایش پروفایل', component: UpdateEmployee },
];

export default routes;
