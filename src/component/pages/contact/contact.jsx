import React from 'react';
import {Link} from "react-router-dom";

//import custom components
import './style.css';
import BreadCrumb from "../../common/bread-crumb/bread-crumb";

function Contact() {
    return (
        <>

            <div className="mb-3"/>
            <BreadCrumb path={['About']}/>

            <div className="container">
                <div className="page-header page-header-big text-center" style={ { backgroundImage: `url('${process.env.PUBLIC_URL}/assets/img/banner.webp')` } }>
                    <h1 className="page-title text-white">Contact me</h1>
                </div>
            </div>

            <div className="page-content pb-0 mt-5">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 mb-2 mb-lg-0">
                            <h2 className="contact-title mb-3 ">Contact Information</h2>
                            <p className="contact-p mb-5">Want to get in touch? I'd love to hear from you. Here's how you can reach me...</p>
                            <div className="row">
                                <div className="col-sm-7">
                                    <div className="contact-info">
                                        <ul className="contact-list">
                                            <li>
                                                <i className="fas fa-map-marker-alt"/>
                                                191/A/3, Imbulahena, Gonapola, Srilanka. 12410
                                            </li>
                                            <li>
                                                <i className="fas fa-phone"/>
                                                <Link to="tel:#">+94 75 2736 788</Link>
                                            </li>
                                            <li>
                                                <i className="fas fa-envelope"/>
                                                <Link to="mailto:#">hello@shamaliroshan.com</Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="col-sm-5">
                                    <div className="contact-info">
                                        <ul className="contact-list">
                                            <li>
                                                <i className="fas fa-clock"/>
                                                <span className="text-dark">Monday-Saturday</span> <br />8am-5pm GMT
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <h2 className="contact-title mb-3">Got Any Questions?</h2>
                            <p className="contact-p mb-5">Use the form below to get in touch with me</p>

                            <form action="#" className="contact-form mb-3">
                                <div className="row">
                                    <div className="col-sm-6 top-col">
                                        <label htmlFor="cname" className="sr-only">Name</label>
                                        <input type="text" className="form-control" id="cname" placeholder="Name *" required />
                                    </div>

                                    <div className="col-sm-6">
                                        <label htmlFor="cemail" className="sr-only">Email</label>
                                        <input type="email" className="form-control" id="cemail" placeholder="Email *" required />
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-sm-6 top-col">
                                        <label htmlFor="cphone" className="sr-only">Phone</label>
                                        <input type="tel" className="form-control" id="cphone" placeholder="Phone" />
                                    </div>

                                    <div className="col-sm-6">
                                        <label htmlFor="csubject" className="sr-only">Subject</label>
                                        <input type="text" className="form-control" id="csubject" required placeholder="Subject *" />
                                    </div>
                                </div>

                                <label htmlFor="cmessage" className="sr-only">Message</label>
                                <textarea className="form-control contact-message" cols="30" rows="4" id="cmessage" required placeholder="Message *"/>

                                <button type="submit" className="btn-send-message btn-minwidth-sm">
                                    <span>Send Message</span>
                                    <i className="ml-2 fas fa-arrow-right"/>
                                </button>
                            </form>
                        </div>
                    </div>

                    <div className="mt-4 mb-5" />
                </div>
            </div>
        </>
    )
}

export default Contact;