import StudentsImageLoader from '../StudentsImageLoader/StudentsImageLoader';
import StudentActiveDelete from '../StudentActiveDelete/StudentActiveDelete';
import StudentTerms from '../StudentTermsLoader/StudentTerms';
import UpdateStudent from '../UpdateStudent/UpdateStudent';


export const STUDENTS_TABLECOLUMNS = [
    {
        Header: 'عکس دانشجو',
        accessor: '',
        Cell: StudentsImageLoader
    },
    {
        Header: 'نام و نام خانوادگی',
        accessor: 'fullName'
    },
    {
        Header: 'ایمیل',
        accessor: 'email'
    },
    {
        Header: 'شماره تماس',
        accessor: 'phoneNumber'
    },
    {
        Header: 'شماره ملی',
        accessor: 'nationalId'
    },
    {
        Header: 'ترم های اخذ شده',
        accessor: 'terms',
        Cell: StudentTerms
    },
    {
        Header: 'ویرایش',
        accessor: 'UpdateStudent',
        Cell: UpdateStudent,
        getProps: (props) => ({
          setAllData: props.setAllData
      })
    },
    {
        Header: 'وضعیت',
        accessor: 'ActiveDelete',
        Cell: StudentActiveDelete,
        getProps: (props) => ({
          setAllData: props.setAllData
      })
    }
]
