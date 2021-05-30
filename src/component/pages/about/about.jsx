import React from 'react';
import {Helmet} from "react-helmet";

//import custom components
import './style.css';
import PageHeader from "../../common/page-header/page-header";
import BreadCrumb from "../../common/bread-crumb/bread-crumb";
import MainFilteredIcon from "../../Icons/MainFilteredIcon";

function About() {
    return (
        <>
            <Helmet>
                <title>About | Shamal iroshan</title>
            </Helmet>

            <div className="mb-3"/>
            <PageHeader title="About Me"/>
            <BreadCrumb path={['About']}/>

            <div className="container">
                <div className="row">
                    <div
                        className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 d-flex justify-content-center mt-5 mt-sm-5 mt-md-5 mt-lg-0 mt-xl-0">
                        {/*<div className="row">*/}
                        <div className="col-10 d-flex justify-content-center align-items-center">
                            <div className="m-auto">
                                <div className="home-content-area">
                                    <p className="about-text-header">ABOUT ME</p>
                                    <h2 className="about-text-sub-header">front end and back end developer</h2>
                                    <p className="about-text-content">I am shamal iroshan, i live in Colombo Sri Lanka.
                                        I’m undergraduate student of IJSE and I'm currently working as a Software
                                        Engineer at Fcode Labs PVT LTD . I’m here to
                                        help you with your any kind of IT related problem. If you need to contact me or
                                        find more details
                                        about me, links are below for that.
                                    </p>
                                    {/* eslint-disable-next-line no-undef */}
                                    <a href={`${process.env.PUBLIC_URL}/assets/documents/shamal-iroshan.pdf`} className="about-downloadcv">
                                        <span>DOWNLOAD CV</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                        {/*</div>*/}
                    </div>

                    <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6">
                        <div className="d-flex justify-content-center align-items-center">
                            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="100" cy="100" fill="#939CE2" r="80"/>
                                <g>
                                    <svg className="blobs">
                                        <path
                                            fill="#ed239f66"
                                            d="M44.9,-75.5C57.4,-70.6,66.1,-56.9,74.2,-42.8C82.3,-28.8,89.7,-14.4,88,-1C86.2,12.3,75.2,24.7,64.7,34.6C54.2,44.4,44.2,51.8,33.5,57.5C22.8,63.2,11.4,67.2,-1.6,70C-14.6,72.8,-29.2,74.4,-41.6,69.6C-54,64.9,-64.2,54,-71.2,41.3C-78.1,28.7,-81.7,14.3,-81.7,0C-81.8,-14.4,-78.3,-28.8,-71.6,-41.7C-64.8,-54.7,-54.8,-66.2,-42.4,-71.1C-29.9,-76,-14.9,-74.4,0.6,-75.5C16.2,-76.6,32.4,-80.4,44.9,-75.5Z"
                                            className="middle"
                                        />
                                    </svg>
                                    <MainFilteredIcon/>
                                </g>
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default About;