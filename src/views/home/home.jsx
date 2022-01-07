import React from 'react';
import {Helmet} from "react-helmet";
import ReactGA from 'react-ga';
import {useSelector} from "react-redux";

//import custom components
import MainIcon from "../../component/Icons/MainIcon";
import './style.css';

function Home() {
  ReactGA.pageview(window.location.pathname);
  const config = useSelector(state => state.homeReducer.config);
  console.log(config);

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
                {/*<circle cx="100" cy="100" fill="#939CE2" r="80" />*/}
                <g>
                  <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                    <path fill="#1345e6ee"
                          className="top-static"
                          d="M32.3,-55.5C41.5,-44.3,48.3,-34.8,55.6,-23.9C63,-13,70.8,-0.8,72.9,13.1C74.9,27,71.1,42.7,60.5,49.5C50,56.3,32.6,54.2,17.9,56.3C3.2,58.5,-8.8,64.9,-18.5,62.3C-28.1,59.8,-35.4,48.4,-47,38.7C-58.6,29,-74.5,21,-75.8,11C-77.1,1,-63.7,-11,-57.2,-26.5C-50.7,-42,-51.1,-61,-42.7,-72.6C-34.3,-84.2,-17.2,-88.2,-2.8,-83.9C11.6,-79.5,23.1,-66.7,32.3,-55.5Z"
                          transform="translate(100 100)"/>
                  </svg>
                  <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                    <path fill="#ed239fdd"
                          className="bottom-static"
                          d="M44.3,-68.7C54.7,-62.4,58.3,-45.3,63,-30.2C67.7,-15.1,73.5,-1.8,74.6,12.8C75.7,27.4,72,43.3,63.4,57C54.7,70.6,41.1,81.9,26.1,84.1C11.2,86.4,-5.1,79.5,-16.3,69.7C-27.5,59.9,-33.7,47.2,-43.9,37.1C-54.1,27,-68.4,19.4,-72.3,8.8C-76.3,-1.7,-69.9,-15.4,-63.1,-28.2C-56.3,-41,-49.1,-53.1,-38.5,-59.3C-27.9,-65.6,-13.9,-66,1.5,-68.4C17,-70.7,34,-75.1,44.3,-68.7Z"
                          transform="translate(100 100)"/>
                  </svg>
                  <MainIcon/>
                </g>
              </svg>
            </div>
          </div>
          <div
            className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 d-flex justify-content-center mt-5 mt-sm-5 mt-md-5 mt-lg-0 mt-xl-0">
            <div className="d-flex justify-content-center align-items-center m-auto">
              <div className="home-content-area text-center text-sm-center text-md-center text-lg-left text-xl-left">
                <h3>HEY THERE !</h3>
                <h1>I AM SHAMAL</h1>
                <h5>SOFTWARE DEVELOPER</h5>

                <div className="home-social-icons">
                  <a href={config?.attributes?.linkedInUrl}>
                    <i className="fab fa-linkedin-in"/>
                  </a>
                  <a href={config?.attributes?.instagramUrl}>
                    <i className="fab fa-instagram"/>
                  </a>
                  <a href={config?.attributes?.githubUrl}>
                    <i className="fab fa-github"/>
                  </a>
                  <a href={config?.attributes?.stackOverflowUrl}>
                    <i className="fab fa-stack-overflow"/>
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