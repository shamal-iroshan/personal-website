import React from "react";

function Work(props) {
    const {data} = props;

    return (
        <>
            <div className="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-3 port">
                <img
                    src={data.image}
                    style={{height: 250}} alt=""/>
                <div className="overlay"/>
                <div className="short-desc">
                    <h4>{data.title}</h4>
                    <p>{data.description}</p>
                </div>
            </div>
        </>
    );

}

export default Work;