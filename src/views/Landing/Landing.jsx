import React from 'react';
import Intro from '../../component/Landing/Intro/Intro';
import Services from '../../component/Landing/Services/Services';
import Category from '../../component/Landing/Category/Category';
import EducationCourses from '../../component/Landing/EducationCourses/EducationCourses';
import TopTeachers from '../../component/Landing/TopTeachers/TopTeachers';
import BlogsLanding from '../../component/Landing/BlogsLanding/BlogsLanding';
import Suggestion from '../../component/Landing/Suggestion/Suggestion'

const Landing = () => {
    return (
        <React.Fragment>
            <Intro />
            <Services />
            <Category />
            <EducationCourses />
            <TopTeachers />
            <BlogsLanding />
            <Suggestion />
        </React.Fragment>
    );
}

export default Landing;