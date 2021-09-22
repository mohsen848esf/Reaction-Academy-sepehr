import DeleteCourses from '../component/UserPanel/AllCourses/DeleteCourses/DeleteCourses';
import ShamsiDateRender from '../component/UserPanel/AllCourses/ShamsiDateRender/ShamsiDateRender';
import FakeImgCourse from '../component/UserPanel/AllCourses/FakeImgCourse/FakeImgCourse';

export const MYCOURSECOLUMNS = [
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
        Cell: ShamsiDateRender
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
        accessor: 'Delete',
        Cell: DeleteCourses,
        getProps: (props) => ({
            setAllData: props.setAllData
        })
    }
]
