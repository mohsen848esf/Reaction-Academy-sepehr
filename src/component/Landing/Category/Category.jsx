import React from 'react';
import Heading from '../../common/Heading/Heading';
import web from '../../../assets/img/web.svg';
import network from '../../../assets/img/network.svg';
import AI from '../../../assets/img/AI.png';
import Robotic from '../../../assets/img/Robotic.png';
import CategoryCss from './Category.module.css';

const Category = () => {
    return (
        <div className='container pb-3'>
           <Heading head={' دسته بندی'} />
            <div className="row d-flex justify-content-center mb-5">
                <div className={`col-6 col-sm-4 col-lg-2 mb-4 m-4 rounded shadow pointer ${CategoryCss.itemBackground}`}>
                    <img src={web} className={`mb-3 ${CategoryCss.imgSize}`} alt="" />
                    <h6> طراحی وب </h6>
                </div>
                <div className={`col-6 col-sm-4 col-lg-2 mb-4 m-4 rounded shadow pointer ${CategoryCss.itemBackground}`}>
                    <img src={network} className={`mb-3 ${CategoryCss.imgSize}`} alt="" />
                    <h6> امنیت و شبکه </h6>
                </div>
                <div className={`col-6 col-sm-4 col-lg-2 mb-4 m-4 rounded shadow pointer ${CategoryCss.itemBackground}`}>
                    <img src={AI} className={`mb-3 ${CategoryCss.imgSize}`} alt="" />
                    <h6> هوش مصنوعی </h6>
                </div>
                <div className={`col-6 col-sm-4 col-lg-2 mb-4 m-4 rounded shadow pointer ${CategoryCss.itemBackground}`}>
                    <img src={Robotic} className={`mb-3 ${CategoryCss.imgSize}`} alt="" />
                    <h6> رباتیک </h6>
                </div>
                
            </div>
        </div>
    );
};

export default Category;