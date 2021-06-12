import React from "react";

import './style.css';

function InlineLoader({loadingText}) {
  return (
    <div className="wrapper">
      <div className="inline-loader">
        <div className="loader-1 center">
          <span/>
        </div>
      </div>
      <h6 className="loading-text">{loadingText && loadingText}</h6>
    </div>
  );
}

export default InlineLoader;