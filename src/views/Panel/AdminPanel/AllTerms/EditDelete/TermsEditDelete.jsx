import React from 'react';
import DeleteTerms from './DeleteTerms/DeleteTerms';
import { Link } from 'react-router-dom';
import styles from "./EditTerms/EditTerm.module.css"

const EditDelete = (props) => {
  const termId = props.cell.row.original._id;
  // console.log(termId);
  return (
    <div>
      <Link to={`/admin/editterm/${termId}`}>
      <button className={`ms-lg-1 mb-xl-0 mb-1 p-1 px-2 rounded text-white ${styles.editButton}`}>
          ویرایش 
        </button>
      </Link>
      <DeleteTerms
        termId={termId}
        setAllData={props.setAllData}
      />
    </div>
  );
}

export default EditDelete;
