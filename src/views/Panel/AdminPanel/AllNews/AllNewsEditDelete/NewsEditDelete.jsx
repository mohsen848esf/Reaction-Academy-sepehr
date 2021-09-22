import React from "react";
import { Link } from "react-router-dom";
import DeleteSelectedNews from "./DeleteNews/DeleteSelectedNews";
import styles from "./EditNews/EditNews.module.css"

const NewsEditDelete = (props) => {
  const newsId = props.cell.row.original._id;
  return (
    <div>
      <Link to={`/admin/editnews/${newsId}`}>
        <button
          className={`ms-lg-1 mb-xl-0 mb-1 p-1 px-2 rounded text-white ${styles.editButton}`}
        >
          ویرایش
        </button>
      </Link>
      <DeleteSelectedNews newsId={newsId} setAllData={props.setAllData} />
    </div>
  );
};

export default NewsEditDelete;
