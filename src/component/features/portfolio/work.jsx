import React from "react";

function Work(props) {
  const {data} = props;

  return (
    <>
      <div className="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-3 port">
        {/*{loading ?*/}
        {/*  <div className="work-skeleton"/> : ""*/}
        {/*}*/}
        <img
          className="work-image"
          src={data.image}
          alt=""/>
        {
          data.link && data.link !== '#' ?
            <a href={data.link} rel="noreferrer" target="_blank">
              <div className="overlay"/>
              <div className="short-desc">
                <h4>{data.title}</h4>
                <p>{data.description}</p>
              </div>
            </a>
            :
            <>
              <div className="overlay"/>
              <div className="short-desc">
                <h4>{data.title}</h4>
                <p>{data.description}</p>
              </div>
            </>
        }
      </div>
    </>
  );

}

export default Work;