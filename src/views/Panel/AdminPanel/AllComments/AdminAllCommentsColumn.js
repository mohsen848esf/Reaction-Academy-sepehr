// import NewsImageLoader from './NewsImageLoader/NewsImageLoader';
// import NewsEditDelete from './AllNewsEditDelete/NewsEditDelete';
// import AllNewsCategory from './NewsCategory';
import CommentVerify from "./CommentVerify/CommentVerify";
import AdminShamsiDateRender from "./AdminShamsiDateRender/AdminShamsiDateRender";
import CourseOrNews from './CourseOrNews/CourseOrNews';
import Answer from './Answer/Answer'
import AllCommentsText from "./AllCommentsText/AllCommentsText";

export const ADMIN_ALLCOMMENTSCOLUMNS = [
  {
    Header: " متن کامنت",
    accessor: "comment",
    Cell: AllCommentsText,
  },
  {
    Header: " ایمیل فرستنده",
    accessor: "email",
  },
  {
    Header: "نوع کامنت",
    accessor: "postId",
    Cell: CourseOrNews,
  },
  {
    Header: "تاریخ ارسال",
    accessor: "createDate",
    Cell: AdminShamsiDateRender,
  },
  {
    Header: "پاسخ ",
    accessor: '_id',
    Cell: Answer,
    getProps: (props) => ({
      setAllData: props.setAllData})
  },
  {
    Header: 'ویرایش',
    accessor: 'verified',
    Cell: CommentVerify,
    getProps: (props) => ({
      setAllData: props.setAllData
  })
}
];
