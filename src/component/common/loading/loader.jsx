import React from 'react';

function Loader() {
    return (
        <>
            <div className="overflow" id="preload">
                <div className="circle-square">
                    <div className="red">&nbsp;</div>
                    <div className="blue">&nbsp;</div>
                    <div className="green">&nbsp;</div>
                    <div className="yellow">&nbsp;</div>
                </div>
            </div>
        </>
    );
}

export default Loader;