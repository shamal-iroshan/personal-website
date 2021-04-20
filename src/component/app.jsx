import React from 'react';

import Header from "./common/header";

function App( props ) {
    return (
        <>
            <div>
                <Header/>

                {
                    props.children
                }

                {/*<Footer/>*/}
            </div>
        </>
    );
}

export default App;
