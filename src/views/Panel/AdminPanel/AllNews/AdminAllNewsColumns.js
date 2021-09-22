import NewsImageLoader from './NewsImageLoader/NewsImageLoader';
import NewsEditDelete from './AllNewsEditDelete/NewsEditDelete';
import AllNewsCategory from './NewsCategory';
import AllNewsText from './AllNewsText/AllNewsText';

export const ADMIN_ALLNEWSCOLUMNS = [
  {
    Header: 'عکس خبر',
    accessor: 'image',
    Cell: NewsImageLoader
  },
  {
    Header: 'عنوان خبر',
    accessor: 'title'
  },
  {
    Header: ' متن خبر',
    accessor: 'text',
    Cell: AllNewsText
  },
  {
    Header: ' دسته بندی',
    accessor: 'category',
    Cell: AllNewsCategory
  },
  {
    Header: 'ویرایش',
    accessor: 'EditDelete',
    Cell: NewsEditDelete,
    getProps: (props) => ({
      setAllData: props.setAllData
    })
  }
]
