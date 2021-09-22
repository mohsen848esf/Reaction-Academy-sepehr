import React from 'react';
import CourseInfoDetailCss from './CourseInfoDetail.module.css';

function RelatedCourses({pic, title, year}) {
    return (
        <div className={`bg-white py-4 text-center d-flex flex-column`}>
            <img src={pic} className='rounded-circle w-25 d-block align-self-center mb-3' alt="" />
            <span className={`fw-bold mb-2 ${CourseInfoDetailCss.relTitle}`}>{title}</span>
            <span className={`${CourseInfoDetailCss.relyear}`}>{year} </span>
        </div>
    );
}

export default RelatedCourses;