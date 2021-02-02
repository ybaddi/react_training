import React from "react";


export default (props) => {

    return <div>
       <h1> page 404, Not Found </h1>
       <p>
           No mutch for {props.location.pathname}
       </p>
    </div>
}