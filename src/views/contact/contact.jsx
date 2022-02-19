import React from 'react';
import 'react-toastify/dist/ReactToastify.css';
import {Helmet} from "react-helmet";
import ReactGA from "react-ga";
import {useSelector} from "react-redux";
import {useDispatch} from "react-redux";

//import custom components
import './style.css';
import BreadCrumb from "../../component/common/bread-crumb/bread-crumb";
import PageHeader from "../../component/common/page-header/page-header";
import InlineLoader from "../../component/features/common/inline-loader";
import {sendMessage} from "./actions";
import Header from "../../component/common/header/header";
import Footer from "../../component/common/footer/footer";

function Contact() {
  ReactGA.pageview(window.location.pathname);

  const dispatch = useDispatch();
  const config = useSelector(state => state.homeReducer.config);
  const isLoading = useSelector(state => state.contactReducer.loading);

  const formSubmit = (event) => {
    event.preventDefault();

    let name = event.target.elements.name.value;
    let email = event.target.elements.email.value;
    let phone = event.target.elements.phone.value;
    let subject = event.target.elements.subject.value;
    let message = event.target.elements.message.value;

    dispatch(sendMessage({
      name: name,
      dateTime: new Date().toISOString(),
      email: email,
      phone: phone,
      subject: subject,
      message: message
    }));

    event.target.elements.name.value = '';
    event.target.elements.email.value = '';
    event.target.elements.phone.value = '';
    event.target.elements.subject.value = '';
    event.target.elements.message.value = '';
  }

  return (
    <>
      <Helmet>
        <title>Contact Me | Shamal iroshan</title>
      </Helmet>

      <Header/>

      <div className="mb-3"/>
      <PageHeader title="Contact Me"/>
      <BreadCrumb path={['About']}/>

      <div className="page-content pb-0 mt-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 mb-2 mb-lg-0">
              <h2 className="contact-title mb-3 ">Contact Information</h2>
              <p className="contact-p mb-5">Want to get in touch? I'd love to hear from you. Here's how you can reach
                me...</p>
              <div className="row">
                <div className="col-sm-7">
                  <div className="contact-info">
                    <ul className="contact-list">
                      <li>
                        <i className="fas fa-map-marker-alt"/>
                        {config?.attributes?.address}
                      </li>
                      <li>
                        <i className="fas fa-phone"/>
                        {config?.attributes?.telephone}
                      </li>
                      <li>
                        <i className="fas fa-envelope"/>
                        {config?.attributes?.email}
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="col-sm-5">
                  <div className="contact-info">
                    <ul className="contact-list">
                      <li>
                        <i className="fas fa-clock"/>
                        <span className="text-dark">Monday-Saturday</span> <br/>{config?.attributes?.availability}
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <h2 className="contact-title mb-3">Got Any Questions?</h2>
              <p className="contact-p">Use the form below to get in touch with me</p>

              {
                isLoading ?
                  <InlineLoader loadingText="Sending message..."/>
                  :
                  ""
              }

              <form action="#" onSubmit={formSubmit} className="contact-form mb-3">
                <div className="row">
                  <div className="col-sm-6">
                    <label htmlFor="cname" className="sr-only">Name</label>
                    <input type="text" className="form-control" name="name" id="cname" placeholder="Name *" required/>
                  </div>

                  <div className="col-sm-6">
                    <label htmlFor="cemail" className="sr-only">Email</label>
                    <input type="email" className="form-control" name="email" id="cemail" placeholder="Email *"
                           required/>
                  </div>
                </div>

                <div className="row">
                  <div className="col-sm-6">
                    <label htmlFor="cphone" className="sr-only">Phone</label>
                    <input type="tel" className="form-control" name="phone" id="cphone" placeholder="Phone"/>
                  </div>

                  <div className="col-sm-6">
                    <label htmlFor="csubject" className="sr-only">Subject</label>
                    <input type="text" className="form-control" name="subject" id="csubject" required
                           placeholder="Subject *"/>
                  </div>
                </div>

                <label htmlFor="cmessage" className="sr-only">Message</label>
                <textarea className="form-control contact-message" cols="30" rows="4" name="message" id="cmessage"
                          required placeholder="Message *"/>

                <button type="submit" className="btn-send-message btn-minwidth-sm">
                  <span>Send Message</span>
                  <i className="ml-2 fas fa-arrow-right"/>
                </button>
              </form>
            </div>
          </div>

          <div className="mt-4 mb-3"/>
        </div>
      </div>

      <Footer/>
    </>
  )
}

export default Contact;