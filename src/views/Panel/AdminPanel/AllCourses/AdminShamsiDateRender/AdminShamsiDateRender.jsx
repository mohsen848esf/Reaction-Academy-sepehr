import React, { Fragment } from 'react';
import { adminShamsiFormater } from '../../utils/ShamsiDateExchanger';


const AdminShamsiDateRender = (props) => {
  const time = props.cell.row.original.createDate;
  return <Fragment>{adminShamsiFormater(time)}</Fragment>;
}

export default AdminShamsiDateRender;
