import React from "react";
import "./ContactUs.css";
const ContactUs = ({id}) => {
    return (
        <>
            <div id={id} className="contact-container">
                <div className="contact-content">
                    <h1>Contact Us</h1>
                    <div className="contact-userDetails">
                        <div className="contact-name">
                            <label htmlFor="name">Name</label>
                            <input type="text" id="name" placeholder="John Doe" />
                        </div>
                        <div className="contact-email">
                            <label htmlFor="email">Email Address</label>
                            <input type="text" id="email" placeholder="John.d@gmail.com" />
                        </div>
                    </div>
                    <div className="contact-message">
                        <label htmlFor="message">Message</label>
                        <textarea id="message" name="message" rows="4" cols="50" placeholder="Hi, I want to know about the premium pricing for 3 years."/>
                    </div>
                    <div className="contact-submit-btn">
                        Submit
                    </div>
                </div>
            </div>
        </>
    )
}

export default ContactUs;