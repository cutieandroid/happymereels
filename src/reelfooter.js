import React from "react";
import './reelfooter.css';

function Reelfooter({username,description}){
    return (

        <div
            className="Reelfooter">

            <div
                className="rf_text"
            >
                <h3>@{username}
                </h3>
                <div className="rf_text_des"> {description}</div>


            </div>

            <div

            >

            </div>


        </div>
    )
}

export default Reelfooter