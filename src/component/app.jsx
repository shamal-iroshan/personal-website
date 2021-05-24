import React, {useLayoutEffect} from 'react';

import Header from "./common/header/header";
import Footer from "./common/footer/footer";

function App( props ) {
    let overlayFlag = true;

    useLayoutEffect(()=> {
        if ( overlayFlag ) {
            document.getElementById('loader').classList.add('loaded')
        }
    })

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
