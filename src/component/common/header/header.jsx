import React from 'react';
import {Link} from 'react-router-dom';

//import custom components
import './style.css';

/* Set the width of the sidebar to 250px (show it) */
function openNav() {
    let width = document.documentElement.clientWidth;
    if (width <= 400) {
        document.getElementById("mySidepanel").style.width = "100%";
    } else {
        document.getElementById("mySidepanel").style.width = "50%";
    }
}

/* Set the width of the sidebar to 0 (hide it) */
function closeNav() {
    document.getElementById("mySidepanel").style.width = "0";
}

function Header() {
    return (
        <>
            <div>
                <nav>
                    <div id="main-menu" className="d-flex justify-content-center mt-2">
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
                    <div id="mobile-nav">
                        <div id="mySidepanel" className="sidepanel">
                            <a href="javascript:void(0)" className="closebtn" onClick={closeNav}>&times;</a>
                            <a href="index.html">Home</a>
                            <a href="about.html">ABOUT</a>
                            <a href="portfolio.html">PORTFOLIO</a>
                            <a href="https://blog.shamaliroshan.com/">BLOG</a>
                            <a href="contact.php">CONTACT</a>
                        </div>

                        <button className="openbtn" onClick={openNav}>&#9776; Menu</button>
                    </div>
                </nav>
            </div>
        </>
    )
}

export default Header;