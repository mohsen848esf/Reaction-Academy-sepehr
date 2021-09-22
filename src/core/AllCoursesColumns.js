import AddCourse from '../component/UserPanel/AllCourses/AddCourse/AddCourse';
import ShamsiDateRender from '../component/UserPanel/AllCourses/ShamsiDateRender/ShamsiDateRender';
import FakeImgCourse from '../component/UserPanel/AllCourses/FakeImgCourse/FakeImgCourse';

export const ALLCOLUMNS = [
    {
        Header: 'عکس دوره',
        accessor: '',
        Cell: FakeImgCourse
    },
    {
        Header: 'نام ترم',
        accessor: 'course.courseName'
    },
    {
        Header: 'مدرس',
        accessor: 'teacher.fullName'
    },
    {
        Header: 'نام دوره',
        accessor: 'title'
    },
    {
        Header: 'تاریخ شروع',
        accessor: 'date',
        Cell: ShamsiDateRender,
    },
    {
        Header: 'قیمت',
        accessor: 'cost'
    },
    {
        Header: 'ظرفیت',
        accessor: 'capacity'
    },
    {
        Header: 'ویرایش',
        accessor: 'EditDelete',
        Cell: AddCourse
    }
]
