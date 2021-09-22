import React from 'react';
import defaultPic from '../../../../assets/img/02.png';

const FakeImgCourse = () => {
    return (  
        <img
            src={defaultPic}
            alt="No_IMAGE"
            className="img img-fluid"
            style={{width:"80px", height:"50px"}}
        />
    );
}
 
export default FakeImgCourse;