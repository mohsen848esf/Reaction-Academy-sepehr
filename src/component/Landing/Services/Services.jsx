import React from 'react';
import Heading from '../../common/Heading/Heading';
import Service1Pic from "../../../assets/img/service1.svg";
import Service2Pic from "../../../assets/img/service2.svg";
import Service3Pic from "../../../assets/img/service3.svg";
import Service4Pic from "../../../assets/img/service4.svg";
import ServiceCss from "./Services.module.css";

const Services = () => {
    return (
        <div className='container pb-2'>
            <Heading head={'  خدمات ما '} />
            <div className={`row pt-3 ${ServiceCss.serviceBack}`}>
                <div className="col-7 col-sm-6 col-lg-3 mx-auto text-center my-3">
                    <a href="#" className="rounded-circle">
                        <img src={Service1Pic} className='w-50' alt="" />
                    </a>
                    <h6 className="font-weight-bolder my-3">مشاوره</h6>
                    <div className={`${ServiceCss.serviceUnderline}`}></div>
                    <p className={`w-75 mx-auto text-muted ${ServiceCss.textSize}`}>تیم ما مشاوره های لازم
                        را به شما می دهد </p>
                </div>
                <div className="col-7 col-sm-6 col-lg-3 mx-auto text-center my-3">
                    <a href="#" className="rounded-circle">
                        <img src={Service2Pic} className='w-50' alt="" />
                    </a>
                    <h6 className="font-weight-bolder my-3">امتحان</h6>
                    <div className={`${ServiceCss.serviceUnderline}`}></div>
                    <p className={`w-75 mx-auto text-muted ${ServiceCss.textSize}`}>تیم ما مشاوره های لازم
                        را به شما می دهد </p>
                </div>
                <div className="col-7 col-sm-6 col-lg-3 mx-auto text-center my-3">
                    <a href="#" className="rounded-circle">
                        <img src={Service3Pic} className='w-50' alt="" />
                    </a>
                    <h6 className="font-weight-bolder my-3">فرصت های شغلی</h6>
                    <div className={`${ServiceCss.serviceUnderline}`}></div>
                    <p className={`w-75 mx-auto text-muted ${ServiceCss.textSize}`}>تیم ما مشاوره های لازم
                        را به شما می دهد </p>
                </div>
                <div className="col-7 col-sm-6 col-lg-3 mx-auto text-center my-3">
                    <a href="#" className="rounded-circle">
                        <img src={Service4Pic} className='w-50' alt="" />
                    </a>
                    <h6 className="font-weight-bolder my-3">مدرک معتبر</h6>
                    <div className={`${ServiceCss.serviceUnderline}`}></div>
                    <p className={`w-75 mx-auto text-muted ${ServiceCss.textSize}`}>تیم ما مشاوره های لازم
                        را به شما می دهد </p>
                </div>
            </div>
        </div>
    );
};

export default Services;