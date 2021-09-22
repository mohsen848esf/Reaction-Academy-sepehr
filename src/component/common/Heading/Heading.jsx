import React from 'react';

function Heading({head}) {
    return (
        <div className="row my-5">
            <h3 className="font-weight-bolder mx-auto text-center">  {head} </h3>
        </div>
    );
}

export default Heading;