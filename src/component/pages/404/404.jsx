import React from "react";
import {Link} from "react-router-dom";
import {Helmet} from "react-helmet";

//import custom component
import './style.css';

function NotFound() {
    return(
        <>
            <Helmet>
                <title>404-Not Found | Shamal iroshan</title>
            </Helmet>
            <div style={{width: '100%', height: '100vh', backgroundColor: '#3498db'}}>
                <div className="mainbox">
                    <div className="number-container">
                        <div className="err">4</div>
                        <i className="far fa-question-circle fa-spin error-far"/>
                        <div className="err2">4</div>
                    </div>
                    <div className="msg">Maybe this page moved? Got deleted? Is hiding out in quarantine? Never existed in the
                        first place?<p className="link">Let's go <Link to={`${process.env.PUBLIC_URL}/`}>home</Link> and try from there.</p></div>
                </div>
            </div>
        </>
    );
}

export default NotFound;