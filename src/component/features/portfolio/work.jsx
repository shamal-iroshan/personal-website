import React, {useState} from "react";

function Work(props) {
  const {data} = props;
  const [loading, setLoading] = useState(true);

  return (
    <>
      <div className="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-3 port">
        {loading ?
          <div className="work-skeleton"/> : ""
        }
        <img
          className="work-image"
          onLoad={() => {
              setLoading(false);
          }}
          src={data?.attributes?.image}
          alt=""/>
        {
          data?.attributes?.link && data?.attributes?.link !== '#' ?
            <a href={data?.attributes?.link} rel="noreferrer" target="_blank">
              <div className="overlay"/>
              <div className="short-desc">
                <h4>{data?.attributes?.title}</h4>
                <p>{data?.attributes?.description}</p>
              </div>
            </a>
            :
            <>
              <div className="overlay"/>
              <div className="short-desc">
                <h4>{data?.attributes?.title}</h4>
                <p>{data?.attributes?.description}</p>
              </div>
            </>
        }
      </div>
    </>
  );

}

export default Work;