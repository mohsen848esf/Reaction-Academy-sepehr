import React from 'react';
import intropic from '../../../assets/img/introPic.svg';
import Button from '../../common/Button';
import IntroCss from "./Intro.module.css";
import TextAnimator from 'src/component/common/TextAnimator/TextAnimator';

const Inro = () => {
    return (
        <section className="container pb-4">
            <div className="row d-flex justify-content-between">
                <div className={`col-md-6 col-10 img-fluid mx-auto align-self-center`}>
                    <img src={intropic} className={`${IntroCss.imgWidth}`} alt="Intro" />
                </div>
                <div className={`col-lg-5 col-md-6 col-10 mx-auto text-md-right ${IntroCss.introTextHolder}`}>
                    <h2 className={`${IntroCss.textSize}`}><span className={`${IntroCss.headColor}`}>پژوهشگاه</span> <span>سپهر</span></h2>
                    <TextAnimator>
                      <p className='mt-4 mb-4 text-justify'>پژوهشگاه سپهر با هدف تولید و انتشار محتوای با کیفیت آموزشی و همچنین آشنایی جامعه با فضای کسب و کار
                          در فضای مجازی ایجاد شده و امید داریم بتوانیم با راهکارهای نوین فرصتی برای افراد خواهان پیشرفت فراهم کنیم
                      </p>
                    </TextAnimator>
                    {/* <button type="button" className={`btn px-3 py-2 mt-4 ${IntroCss.btnColor}`}>مشاهده دوره ها</button> */}
                    <Button
                        color="bigGold"
                        value="مشاهده دوره ها"
                        path="courses"
                        objectId = ""

                    />
                </div>
            </div>
        </section>
    );
}

export default Inro;
