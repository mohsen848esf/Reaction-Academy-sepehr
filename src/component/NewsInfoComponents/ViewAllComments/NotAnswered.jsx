import React, { Fragment } from "react";
import CommentsCss from "./ViewAllComments.module.css";

function NotAnswered(props) {
    return (
        <div className="row me-3">
         
          <Fragment>
            <div className="col-0 col-sm-2 mt-3 ms-md-2 ms-3 text-center">  
            </div>
            <div className="col-11 col-sm-6 bg-white pt-3 rounded-7">
              <p className={` ${CommentsCss.smalltext}`}>
                  هنوز پاسخی به این کامنت داده نشده
              </p>
            </div>
          </Fragment>
        
        
      </div>
    );
}

export default NotAnswered;