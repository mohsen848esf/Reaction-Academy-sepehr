import React, { Fragment } from 'react';
import Style from './Footer.module.css';
import { toast, ToastContainer } from 'react-toastify';
import { useState } from 'react';

const Footer = () => {
    const [email, setEmail] = useState("");

    const onChangeInp = (e) => {
        setEmail(e.target.value);
        console.log(email);
    };

    const onClickbtn = (userEmail) => {
        userEmail && userEmail !== null ? (
            toast.success("ایمیل شما با موفقیت ارسال شد")
        ) : (
            toast.error("ایمیل خود را وارد نمایید")
        )
        setEmail("");
    };

    return (
        <Fragment>
            <ToastContainer />
            <div className="mt-3">
                <footer className={Style.footer}>
                    <div className="row d-flex justify-content-evenly">
                        <div className={`col-6 mx-auto col-sm-6 my-3 col-md-3 col-lg-2 mt-sm-3 mt-0`}>
                            <h5 className={`mt-5 fs-6 fw-bolder text-center ${Style.link}`}>لینک ها</h5>
                            <ul className={`text-md-end text-center pointer ${Style.footerUl}`}>
                                <li className="p-0">صفحه اصلی</li>
                                <li>آموزش</li>
                                <li>مالی</li>
                                <li>خدمات</li>
                            </ul>
                        </div>
                        <div className={`col-10 mx-auto my-3 col-sm-6 col-md-3 col-lg-4 text-center ${Style.contactHolder}`}>
                            <h5 className={`mt-sm-5 mt-3 fs-6 fw-bolder mb-4`}>ارتباط با ما </h5>
                            <ul className={Style.Tamas}>
                                <li><i className='fa fa-phone ms-2'></i>011-33119999</li>
                                <li> <i className="fa fa-envelope ms-2"></i> Reaction@gmail.com</li>
                            </ul>
                        </div>
                        <div className={`col-10 mx-auto my-3 col-sm-8 px-5 px-md-0 col-md-4 col-lg-3 mt-5 text-center ${Style.emailHolder}`}>
                            <p className={`mt-3 ${Style.khabarname}`}>
                                برای دریافت اخبار از طریق ایمیل ثبت نام کنید
                            </p>
                            <div className="input-group">
                                <div className="input-group-append">
                                    <button
                                        className={`p-2 ${Style.footerBtn}`}
                                        type="button"
                                        onClick={() => onClickbtn(email)}
                                    >
                                        ارسال
                                    </button>
                                </div>
                                <input
                                    type="text"
                                    className={`form-control text-start ${Style.footerInput}`}
                                    placeholder="Reaction@gmail.com"
                                    value={email}
                                    aria-label="Recipient's username"
                                    aria-describedby="basic-addon2"
                                    onChange={(e) => onChangeInp(e)}
                                />
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        </Fragment>
    );;
}

export default Footer;