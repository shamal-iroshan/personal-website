import React from 'react';
import {Link} from "react-router-dom";

import './style.css'

function BreadCrumb(props) {
    const {path} = props;

    return (
        <>
            <div>
                <div className="container">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item"><Link to={process.env.PUBLIC_URL} >Home</Link></li>
                        {
                            path.map((item, index) => (
                                <li key={index} className="breadcrumb-item">{item}</li>
                            ))
                        }
                    </ol>
                </div>
            </div>
            <hr className="m-0"/>
        </>
    );
}

export default BreadCrumb;