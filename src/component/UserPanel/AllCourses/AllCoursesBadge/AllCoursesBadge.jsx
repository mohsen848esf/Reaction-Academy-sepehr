import React from 'react';

const AllCoursesBadge = (props) => {
    // console.log(props);
    return (
        props.cell.row.values.status ?
            (<span className="badge bg-success">فعال</span>) :
            (<span className="badge bg-danger">غیر فعال</span>)
    );
}

export default AllCoursesBadge;