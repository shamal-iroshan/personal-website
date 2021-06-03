import React from "react";
import {Helmet} from "react-helmet";
import PageHeader from "../../common/page-header/page-header";
import BreadCrumb from "../../common/bread-crumb/bread-crumb";

function SinglePost() {
    return (
        <>
            <Helmet>
                <title>Blog | Shamal iroshan</title>
            </Helmet>

            <div className="mb-3"/>
            <PageHeader title="Blog"/>
            <BreadCrumb path={['blog', 'post']}/>

            <div className="container mt-5">
                <div className="row">
                    <div className="col-9">
                        <div className="row">
                            <h3 className="mb-5 blog-post-title" >Title of this blog post</h3>

                            <img className="blog-post-image" src="https://i.ibb.co/J3P3Cw6/You-Tube-Ad.jpg" alt=""/>

                            <div className="col-12 mt-3 blog-post-header d-flex">
                                <div>
                                    <i className="far fa-calendar-alt mr-3 "></i>
                                </div>
                                <div>
                                    <time>2021/01/16</time>
                                </div>
                            </div>

                            <p className="mt-5 text-justify blog-post-text">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis illum, ipsa libero
                                neque nisi non quae quaerat rerum ut. Accusamus alias aut error facere officia,
                                officiis perferendis reprehenderit soluta! Dolore.A aliquid consequatur consequuntur
                                distinctio dolore enim eos et excepturi incidunt inventore laboriosam magnam maiores
                                maxime,
                            </p>
                            <p className="text-justify blog-post-text">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis illum, ipsa libero
                                neque nisi non quae quaerat rerum ut. Accusamus alias aut error facere officia,
                                officiis perferendis reprehenderit soluta! Dolore.A aliquid consequatur consequuntur
                                distinctio dolore enim eos et excepturi incidunt inventore laboriosam magnam maiores
                                maxime,
                            </p>
                            <p className="text-justify blog-post-text">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis illum, ipsa libero
                                neque nisi non quae quaerat rerum ut. Accusamus alias aut error facere officia,
                                officiis perferendis reprehenderit soluta! Dolore.A aliquid consequatur consequuntur
                                distinctio dolore enim eos et excepturi incidunt inventore laboriosam magnam maiores
                                maxime,
                            </p>
                            <p className="text-justify blog-post-text">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis illum, ipsa libero
                                neque nisi non quae quaerat rerum ut. Accusamus alias aut error facere officia,
                                officiis perferendis reprehenderit soluta! Dolore.A aliquid consequatur consequuntur
                                distinctio dolore enim eos et excepturi incidunt inventore laboriosam magnam maiores
                                maxime,
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default SinglePost;