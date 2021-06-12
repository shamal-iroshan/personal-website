import React, {useEffect, useState} from 'react';
import {Helmet} from "react-helmet";

// import Custom Components
import PageHeader from "../../common/page-header/page-header";
import BreadCrumb from "../../common/bread-crumb/bread-crumb";
import Work from "../../features/portfolio/work";
import {getWorks} from "../../../api";
import InlineLoader from "../../features/common/inline-loader";
import './style.css';

export default function Portfolio() {
  const [works, setWorks] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getWorks().then(result => {
      setLoading(false);
      if (result && result.success) {
        setWorks(result.data);
      }
    })
      .catch(error => {
        console.error("AXIOS_ERROR", error);
        setLoading(false);
      })
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