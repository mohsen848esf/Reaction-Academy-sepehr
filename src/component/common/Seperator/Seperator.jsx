import React from 'react';
import {Col} from 'reactstrap';
import seperatorCss from './Seperator.module.css'

function Seperator({ title }) {
    return (
        <Col>
            <div className={`mt-5 ${seperatorCss.separator}`}></div>
            <div className={`mx-auto px-4 ${seperatorCss.separatorText}`}>{title}  </div>
        </Col>
    );
}

export default Seperator;