import React, {useEffect} from 'react';
import {Helmet} from "react-helmet";
import ReactGA from "react-ga";
import {useDispatch} from "react-redux";
import {useSelector} from "react-redux";

// import Custom Components
import PageHeader from "../../component/common/page-header/page-header";
import BreadCrumb from "../../component/common/bread-crumb/bread-crumb";
import Work from "../../component/features/portfolio/work";
import InlineLoader from "../../component/features/common/inline-loader";
import './style.css';
import {getWorks} from "./actions";

export default function Portfolio() {
  const dispatch = useDispatch();
  const {works, loading} = useSelector(state => state.worksReducer);

    ReactGA.pageview(window.location.pathname);

  useEffect(() => {
    dispatch(getWorks());
  }, [])

  return (
    <>
      <Helmet>
        <title>Portfolio | Shamal iroshan</title>
      </Helmet>

      <div className="mb-3"/>
      <PageHeader title="Portfolio"/>
      <BreadCrumb path={['Portfolio']}/>

      <div className="container mt-5">
        <div className="row works">
          {
            loading ?
              (<InlineLoader loadingText="Loading Works..."/>)
              : ""
          }
          {
            works ?
              works.length > 0 ?
                works.map((item, index) => (
                  <Work data={item} key={index}/>
                ))
                :
                (
                  <h5 style={{color: "#777"}}>No Works To Show.</h5>
                )
              : ""
          }
        </div>
      </div>
      <div className="mb-5"/>
    </>
  )
}