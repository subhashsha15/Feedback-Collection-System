import React from "react";
import "./About.css";
const About = ({id}) => {
    return (
        <>
            <div id={id} className="about-container">
                <div className="about-content">
                    <div className="about-background">
                        <img src="/about-background.jpg" alt="" />
                    </div>
                </div>
                <div className="about-front">
                    <div className="about-front-left">
                        <img src="/about-front-img.jpg" alt="" />
                    </div>
                    <div className="about-front-right">
                        <h1>Welcome to  <span>Feedback!</span></h1>
                        <h2>Every opinion matters, and at <span>Feedback</span>, we're here to listen.</h2>
                        <p> In today's fast-paced world, understanding your customers' needs and preferences is essential for business success.
                            <span>Feedback</span> simplifies the process, empowering businesses of all sizes to collect, organize, and
                            analyze valuable insights in real-time. Whether you're looking to improve your services, streamline feedback management,
                            or build stronger relationships with your customers,<span>Feedback</span> is your trusted partner.
                            Join our exclusive feedback community today and be the first to influence product improvements and updates. Your voice matters,
                            and together, let's shape the future of our services.
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default About;