import React from "react";
import "./Footer.css";
const Footer = () => {
    return (
        <>
            <div className="footer-container">
                <div className="footer-content">
                    <div className="footer-content-top">
                        <div className="footer-logo">
                            {/* <img src="/footer-logo.svg" alt="" /> */}
                            FeedBack
                        </div>
                        <div className="footer-list">
                            <div className="footer-socialMedia-icons">
                                <img src="/facebook-icon.svg" alt="facebook" />
                                <img src="/gitlab-icon.svg" alt="gitlab" />
                                <img src="/github-icon.svg" alt="github" />
                                <img src="/telegram-icon.svg" alt="telegram" />
                                <img src="/instagram-icon.svg" alt="instagram" />
                                <img src="/figma-icon.svg" alt="figma" />
                            </div>
                            <div className="footer-list-items">
                                <span>About</span>
                                <span>Features</span>
                                <span>Pricing</span>
                                <span>Contact</span>
                                <span>Login</span>
                            </div>
                        </div>
                        <div className="footer-contact-btn">Contact Us</div>
                    </div>
                    <hr />
                    <div className="footer-content-bottom">
                        <p>&#169;Feedback Form, 2024 - All Rights Reserved</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer;