import React from 'react';
import BlogsLandingCss from './BlogsLanding.module.css';

function BlogsTitle({title}) {
    return (
        <div className="d-flex align-items-center justify-content-between">
            <p className="mt-3 ml-3">{title}</p>
            <div className={`rounded ${BlogsLandingCss.blogProgress}`}></div>
        </div>
    );
}

export default BlogsTitle;