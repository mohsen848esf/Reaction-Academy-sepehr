import React, { Fragment } from "react";
import Style from './ButtonsKind.module.css';
import { Link } from 'react-router-dom';

const MoreButton = (props) => {
    const {status: btnStatus, path} = props;

    const btnKind = (status) => {
        switch (status) {
            case 'Reg':
                return (<Link to={`/${path}/${props.courseId}`} className={`btn  ${Style.btnRegister}`}>ثبت دوره</Link>)
            case 'Soon':
                return (<Link to={`/${path}/${props.courseId}`} className={`btn shadow ${Style.btnSoon}`}>به زودی</Link>)
            case 'More':
                return (<Link to={`/${path}/${props.courseId}`} className={`btn px-4 py-2 ${Style.btnRegister}`}>بیشتر</Link>)
            case 'SeeCorses':
                return (<Link to={`/${path}/${props.courseId}`} className={`btn mt-4 ${Style.allCourseBtn}`}>مشاهده دوره ها</Link>)
            default: return null;
        }
    };
    return (
        <Fragment>
            {btnKind(btnStatus)}
        </Fragment>
    )
}

export default MoreButton;