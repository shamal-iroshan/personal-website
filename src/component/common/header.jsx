import React from 'react';
import {Link} from 'react-router-dom';

function Header() {
    return (
        <>
            <div>
                <nav>
                    <div className="d-flex justify-content-center mt-2">
                        <div className="m-3 mr-10">
                            <img src={`${process.env.PUBLIC_URL}/assets/img/home/logowithicon.png`} alt="logo"/>
                        </div>

                        <div>
                            <ul className="d-flex nav header-navigation">
                                <Link to="#"><li className="m-3">ABOUT</li></Link>
                                <Link to="#"><li className="m-3">PORTFOLIO</li></Link>
                                <Link to="#"><li className="m-3">BLOG</li></Link>
                                <Link to="#"><li className="m-3">CONTACT</li></Link>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        </>
    )
}

export default Header;