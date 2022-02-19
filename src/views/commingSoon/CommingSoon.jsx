import React from "react";
import './styles/ionicons.css';
import './styles/jquery.classycountdown.css';
import './styles/styles.css';
import './styles/responsive.css';
import backgroundImage from './img/coming-soon.jpg';

function ComingSoon() {
  return(
    <>
      <div className="main-area center-text" style={{backgroundImage: `url(${backgroundImage})`}}>

        <div className="display-table">
          <div className="display-table-cell">

            <h1 className="title font-white"><b>Coming Soon</b></h1>
            <p className="desc font-white">
              My website is currently undergoing scheduled maintenance.
              It Should be back shortly. Thank you for your patience.
            </p>

          </div>
        </div>
      </div>
    </>
  );
}

export default ComingSoon;