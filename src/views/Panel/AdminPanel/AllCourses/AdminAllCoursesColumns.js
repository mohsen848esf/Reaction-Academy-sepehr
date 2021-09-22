import AddCourse from '../../../../component/UserPanel/AllCourses/AddCourse/AddCourse';
import AdminShamsiDateRender from '../AllCourses/AdminShamsiDateRender/AdminShamsiDateRender';
import AllCourseTopics from '../AllCourses/AllCourseTopics/AllCourseTopics';
import FakeImgCourse from '../../../../component/UserPanel/AllCourses/FakeImgCourse/FakeImgCourse';
import CourseImageLoader from './CoursesImageLoader/CourseImageLoader';
import CourseEditDelete from './AllCoursesEditDelete/CourseEditDelete';
import AllCoursesText from './AllCoursesText/AllCoursesText';

export const ADMIN_ALLCOURSESCOLUMNS = [
  {
    Header: 'عکس دوره',
    accessor: 'image',
    Cell: CourseImageLoader
  },
  {
    Header: 'نام دوره',
    accessor: 'courseName'
  },
  {
    Header: 'تاریخ ساخت',
    accessor: 'createDate',
    Cell: AdminShamsiDateRender,
  },
  {
    Header: ' توضیحات دوره',
    accessor: 'description',
    Cell: AllCoursesText
  },
  {
    Header: 'موضوعات',
    accessor: 'topics',
    Cell: AllCourseTopics
  },
  {
    Header: 'ویرایش',
    accessor: 'EditDelete',
    Cell: CourseEditDelete,
    getProps: (props) => ({
      setAllData: props.setAllData
    })
  }
]
