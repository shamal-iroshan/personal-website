import React from "react";
import {Link} from "react-router-dom";

import './style.css';

function Footer() {
    return (
        <>
            <div id="foot">
                <div>
                    <div id="footer-logo">
                        {/*<img src="img/home/logowithicon_white.png" alt="logo"/>*/}
                    </div>
                    <div id="footer-navigation">
                        <div id="footer-nav">
                            <ul>
                                <Link to="about.html">
                                    <li>about</li>
                                </Link>
                                <Link to="portfolio.html">
                                    <li>portfolio</li>
                                </Link>
                                <Link to="https://blog.shamaliroshan.com/">
                                    <li>blog</li>
                                </Link>
                                <Link to="contact.php">
                                    <li>contact</li>
                                </Link>
                            </ul>
                        </div>
                        <div id="footer-social">
                            <a href="https://www.linkedin.com/in/shamal-iroshan-023485156/">
                                <i className="fab fa-linkedin-in"/>
                            </a>
                            <a href="https://www.instagram.com/shamal_iroshan/">
                                <i className="fab fa-instagram"/>
                            </a>
                            <a href="https://github.com/shamal34">
                                <i className="fab fa-github"/>
                            </a>
                            <a href="https://stackoverflow.com/users/12289913/shamal-iroshan">
                                <i className="fab fa-stack-overflow"/>
                            </a>
                        </div>
                        <div id="copyright">
                            <div>
                                <p id="copyright-text">
                                    Copyright &copy;
                                    <script>
                                        document.write(new Date().getFullYear());
                                    </script>
                                    All rights reserved | This website is made with <i className="far fa-heart"></i> by
                                    Shamal
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Footer;