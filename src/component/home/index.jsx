import React from 'react';
import {Helmet} from "react-helmet";

//import custom components
import MainIcon from "../Icons/MainIcon";
import './style.css';

function Home() {
    return (
        <>
            <Helmet>
                <title>Home | Shamal iroshan</title>
            </Helmet>
            <div className="container">
                <div className="row mt-4">
                    <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6">
                        <div className="d-flex justify-content-center align-items-center">
                            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="100" cy="100" fill="#939CE2" r="80" />
                                <g>
                                    <svg className="blobs">
                                        <path
                                            fill="#00796B66"
                                            d="M40.4,-70.6C50.5,-64,55.8,-49.6,62.2,-36.6C68.6,-23.5,76.2,-11.8,76.1,0C76.1,11.7,68.5,23.4,60.4,33.5C52.2,43.6,43.6,52.1,33.5,57.1C23.3,62,11.7,63.5,-1.9,66.8C-15.5,70.1,-31,75.3,-43,71.4C-55,67.5,-63.5,54.5,-69.3,41.1C-75.1,27.7,-78.1,13.9,-77.9,0.1C-77.7,-13.6,-74.2,-27.2,-67.8,-39.5C-61.3,-51.7,-51.9,-62.6,-40.1,-68.2C-28.3,-73.8,-14.2,-74.1,0.5,-74.9C15.1,-75.7,30.2,-77.1,40.4,-70.6Z"
                                            className="top"
                                        />
                                        <path
                                            fill="#B2DFDB66"
                                            d="M44.9,-75.5C57.4,-70.6,66.1,-56.9,74.2,-42.8C82.3,-28.8,89.7,-14.4,88,-1C86.2,12.3,75.2,24.7,64.7,34.6C54.2,44.4,44.2,51.8,33.5,57.5C22.8,63.2,11.4,67.2,-1.6,70C-14.6,72.8,-29.2,74.4,-41.6,69.6C-54,64.9,-64.2,54,-71.2,41.3C-78.1,28.7,-81.7,14.3,-81.7,0C-81.8,-14.4,-78.3,-28.8,-71.6,-41.7C-64.8,-54.7,-54.8,-66.2,-42.4,-71.1C-29.9,-76,-14.9,-74.4,0.6,-75.5C16.2,-76.6,32.4,-80.4,44.9,-75.5Z"
                                            className="middle"
                                        />
                                        <path
                                            fill="#7C4DFF66"
                                            d="M39.1,-66.7C53.2,-59.6,69,-54.3,75.5,-43.5C82,-32.6,79.1,-16.3,74.4,-2.7C69.8,10.9,63.3,21.9,56.1,31.4C48.9,40.9,40.9,49,31.5,57.9C22,66.8,11,76.4,-1.4,78.7C-13.7,81.1,-27.5,76.2,-40.7,69.6C-54,62.9,-66.8,54.4,-71.9,42.6C-77,30.7,-74.3,15.3,-74.5,-0.1C-74.7,-15.6,-77.8,-31.1,-71.7,-41.3C-65.7,-51.5,-50.4,-56.2,-37,-63.7C-23.5,-71.1,-11.7,-81.3,0.4,-81.9C12.5,-82.6,25,-73.7,39.1,-66.7Z"
                                            className="bottom"
                                        />
                                    </svg>
                                    <MainIcon/>
                                </g>
                            </svg>
                        </div>
                    </div>
                    <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 d-flex justify-content-center mt-5 mt-sm-5 mt-md-5 mt-lg-0 mt-xl-0">
                        <div className="d-flex justify-content-center align-items-center m-auto">
                            <div className="home-content-area text-center text-sm-center text-md-center text-lg-left text-xl-left">
                                <h3>HEY THERE !</h3>
                                <h1>I AM SHAMAL</h1>
                                <h5>SOFTWARE DEVELOPER</h5>

                                <div className="home-social-icons">
                                    <a href="https://www.linkedin.com/in/shamal-iroshan-023485156/">
                                        <i className="fab fa-linkedin-in"></i>
                                    </a>
                                    <a href="https://www.instagram.com/shamal_iroshan/">
                                        <i className="fab fa-instagram"></i>
                                    </a>
                                    <a href="https://github.com/shamal34">
                                        <i className="fab fa-github"></i>
                                    </a>
                                    <a href="https://stackoverflow.com/users/12289913/shamal-iroshan">
                                        <i className="fab fa-stack-overflow"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home;