import React from "react";
import {Link} from "react-router-dom";

//import custom component
import './style.css';

function NotFound() {
    return(
        <div style={{width: '100%', height: '100vh', backgroundColor: '#3498db'}}>
            <div className="mainbox">
                <div className="err">4</div>
                <i className="far fa-question-circle fa-spin error-far"/>
                <div className="err2">4</div>
                <div className="msg">Maybe this page moved? Got deleted? Is hiding out in quarantine? Never existed in the
                    first place?<p className="link">Let's go <Link to={`${process.env.PUBLIC_URL}/`}>home</Link> and try from there.</p></div>
            </div>
        </div>
    );
}

export default NotFound;