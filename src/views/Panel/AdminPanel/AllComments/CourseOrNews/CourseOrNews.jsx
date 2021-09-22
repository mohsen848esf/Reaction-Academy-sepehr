import React, { useState,useEffect} from 'react';
import {TermById} from '../../../../../core/services/api/terms.api'
import {NewsById} from '../../../../../core/services/api/news.api'

function CourseOrNews(props) {

    const {postId } = props.cell.row.original;
    // console.log("postid",postId);

    const [post , setPost] = useState("");

    const CourseNews = async () => {
        try {
            const result = await NewsById(postId);
            setPost(result.success);
            // console.log("success",result.message);
            return result;
        } catch (error) {
            return error;
        }
    }
    useEffect(() => {
        CourseNews();
      }, []);

    return (
        <div>
            {post ? <p>خبر</p>  : <p> دوره</p>}
        </div>
    );
}

export default CourseOrNews;