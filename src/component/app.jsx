import React from 'react';

import Header from "./common/header/header";
import Footer from "./common/footer/footer";

function App( props ) {
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
