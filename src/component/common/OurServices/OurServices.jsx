import React from 'react';
import { Card, CardHeader, CardTitle, CardBody } from "reactstrap";
import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CContainer,
  CJumbotron,
  CRow,
  CEmbed,
  CEmbedItem
} from '@coreui/react';
import { Fragment } from 'react';
import { useHistory } from 'react-router-dom';
import TextAnimator from '../TextAnimator/TextAnimator';
// import Swiper from "react-id-swiper";
// import img1 from "../../../assets/img/slider/django.jpg"
// import img2 from "../../../assets/img/slider/node.jpg"
// import img3 from "../../../assets/img/slider/python.jpg"
// import img4 from "../../../assets/img/slider/svelte.jpg"
// import img5 from "../../../assets/img/slider/typescript.jpg"
// import img6 from "../../../assets/img/slider/vue.jpg"

// const params = {
//   effect: "coverflow",
//   grabCursor: true,
//   centeredSlides: true,
//   slidesPerView: "auto",
//   coverflowEffect: {
//     rotate: 50,
//     stretch: 0,
//     depth: 100,
//     modifier: 1,
//     slideShadows: true
//   },
//   pagination: {
//     el: ".swiper-pagination"
//   }
// }

const OurServices = () => {
  const history = useHistory();
  const handleRedirect = () => {
    history.push("/courses");
  }
  return (
    <Fragment>
      <Card>
        <CardHeader>
          <CardTitle className="text-primary">آکادمی بحر ارائه دهنده دوره های آموزشی حرفه ای و متنوع</CardTitle>
        </CardHeader>
        {/* <CardBody> */}
        {/* <div>OurServices</div> */}
        {/* <Swiper {...params}>
          <div
            style={{
              backgroundImage: `url(${img1})`,
              backgroundSize: "contain"
            }}
          ></div>
          <div
            style={{
              backgroundImage: `url(${img2})`,
              backgroundSize: "contain"
            }}
          ></div>
          <div
            style={{
              backgroundImage: `url(${img3})`,
              backgroundSize: "contain"
            }}
          ></div>
          <div
            style={{
              backgroundImage: `url(${img4})`,
              backgroundSize: "contain"
            }}
          ></div>
          <div
            style={{
              backgroundImage: `url(${img5})`,
              backgroundSize: "contain"
            }}
          ></div>
          <div
            style={{
              backgroundImage: `url(${img6})`,
              backgroundSize: "contain"
            }}
          ></div>
        </Swiper> */}
        {/* </CardBody> */}
      </Card>
      <CRow>
        <CCol>
          <CCard>
            <CCardHeader>
              مقدماتی تا پیشرفته
            </CCardHeader>
            <CCardBody>
              <CJumbotron className="border">
                <h1 className="display-3 my-4">پژوهشگاه سپهر</h1>
                <TextAnimator>
                  <p className="lead">پژوهشگاه سپهر با هدف تولید و انتشار محتوای با کیفیت آموزشی و همچنین آشنایی جامعه با فضای کسب و کار در فضای مجازی ایجاد شده و امید داریم بتوانیم با راهکارهای نوین فرصتی برای افراد خواهان پیشرفت فراهم کنیم.</p>
                </TextAnimator>
                <hr className="my-2" />
                <p>علاقه مندان برای کسب اطلاعات بیشتر میتوانند از دوره های آموزشی موجود در سایت دیدن فرمایند.</p>
                <p className="lead">
                  <CButton onClick={handleRedirect} color="primary" size="lg">دیدن دوره های آموزشی</CButton>
                </p>
              </CJumbotron>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </Fragment>
  );
}

export default OurServices;
