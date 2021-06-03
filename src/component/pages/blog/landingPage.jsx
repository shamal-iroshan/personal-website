import React from "react";
import {Helmet} from "react-helmet";
import PageHeader from "../../common/page-header/page-header";
import BreadCrumb from "../../common/bread-crumb/bread-crumb";

import './style.css';

function LandingPage() {
    return (
        <>
            <Helmet>
                <title>Blog | Shamal iroshan</title>
            </Helmet>

            <div className="mb-3"/>
            <PageHeader title="Blog"/>
            <BreadCrumb path={['blog']}/>

            <div className="container mt-5">
                <div className="row">
                    <div className="col-8">
                        <div className="row">
                            <div className="col-12">
                                <div className="row">
                                    <>
                                        <div className="col-4 mb-4">
                                            <img className="blog-list-image" src="https://i.ibb.co/J3P3Cw6/You-Tube-Ad.jpg" alt=""/>
                                        </div>
                                        <div className="col-8 mb-4 blog-list-detail-container">
                                            <h4 className="blog-list-title" >Title of this blog post</h4>
                                            <p className="blog-list-description mt-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci cumque
                                                eveniet quam rem repellendus voluptate! Accusamus animi architecto,
                                                assumenda cum hic iusto mollitia omnis pariatur perspiciatis
                                                praesentium, similique velit veritatis!
                                            </p>
                                            <span className="text-primary blog-list-read-more">Read more</span>
                                        </div>
                                    </>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container mt-7 d-none">
                <nav aria-label="...">
                    <ul className="pagination">
                        <li className="page-item disabled">
                            <a className="page-link" href="#" tabIndex="-1" aria-disabled="true">Previous</a>
                        </li>
                        <li className="page-item"><a className="page-link" href="#">1</a></li>
                        <li className="page-item active" aria-current="page">
                            <a className="page-link" href="#">2</a>
                        </li>
                        <li className="page-item"><a className="page-link" href="#">3</a></li>
                        <li className="page-item">
                            <a className="page-link" href="#">Next</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </>
    );
}

export default LandingPage;