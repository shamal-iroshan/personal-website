import React, {useLayoutEffect, useEffect} from 'react';
import { matchPath } from 'react-router-dom';

import Header from "./common/header/header";
import Footer from "./common/footer/footer";

function App( props ) {
    let overlayFlag = true;
    let matchedCount = 0;

    useLayoutEffect(()=> {
        if ( overlayFlag ) {
            document.getElementById('loader').classList.add('loaded');
        }
    })

    useEffect(() => {
        // show 404 page
        while ( matchedCount < props.children.length && !matchPath( window.location.pathname, { path: props.children[ matchedCount ].props.path, exact: true } ) ) {
            matchedCount++;
        }
        if ( props.children && !props.children.length && matchPath( window.location.pathname, { path: props.children.props.path, exact: true } ) ) {
            matchedCount = 1;
        }
        if ( matchedCount >= props.children.length || ( props.children && !props.children.length && matchedCount === 0 ) ) {
            // eslint-disable-next-line no-undef
            window.location = process.env.PUBLIC_URL + "/pages/404";
        }
    });

    return (
        <>
            <div>
                <Header/>

                {
                    props.children
                }

                {
                    window.location.pathname !== "/" ?
                        <Footer/>
                        : ''
                }
            </div>
        </>
    );
}

export default App;
