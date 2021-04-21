import React from 'react';

function PageHeader(props) {
    const {title} = props;

    return (
        <div className="d-flex align-items-center text-white" style={ { backgroundImage: `url(${process.env.PUBLIC_URL}/assets/img/header-bg.png)`,height: 200 } }>
            <div className="container">
                <h1>{title}</h1>
            </div>
        </div>
    );
}

export default PageHeader;