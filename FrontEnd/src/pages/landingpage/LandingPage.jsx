import React from "react";
import "./LandingPage.css";
import { Link } from "react-router-dom";
const LandingPage = () => {
    return (
        <>
            <div className="landingpage-container">
                <div className="landingpage-content">
                    <div className="landingpage-content-info">
                        <div>
                            <h1>Explore Our Comprehensive Feedback Forms</h1>
                            <p>Discover our diverse range of feedback forms,from student to course evaluations.</p>
                            <Link to="/signup" className="router-link"><button>Share Feedback</button></Link>
                        </div>
                        <img src="/landingpage-img1.svg" alt="" />
                    </div>
                    <div className="landingpage-content-info">
                        <div>
                            <h1>Empower Positive Change</h1>
                            <p>your feedback is the driving force behind our commitment to excellence.By sharing your experiences,insights and ideas,you play a vitol role in shaping the future of our educational programs.Your input helps us identify areas for imporovement ,enhance course offerings,and foster a more engaging and enriching learning environment for all.</p>
                        </div>
                        <img src="/landingpage-img2.svg" alt="" />
                    </div>
                    <div className="landingpage-content2">
                        <h1>Features</h1>
                        <div className="landingpage-content2-items">
                            <div className="feature">
                                <img src="/checkmark-symbol.png" alt="" />
                                <div className="feature-title">Trust and Reliability</div>
                                <div className="feature-para">Join the ranks of satisfied users who have transformed their services with our platform.Experience the power of data-driven decision-making.</div>
                            </div>
                            <div className="feature">
                                <img src="/checkmark-symbol.png" alt="" />
                                <div className="feature-title">Empowering Users</div>
                                <div className="feature-para">Share your thoughts and help us serve you better.Together, let's shape the future of our services.</div>
                            </div>
                            <div className="feature">
                                <img src="/checkmark-symbol.png" alt="" />
                                <div className="feature-title">Exclusive Access</div>
                                <div className="feature-para">Be the first to influence product improvements and updates.Access exclusive features and perks by becoming a part of our feedback community.</div>
                            </div>
                        </div>
                    </div>
                    <div className="landingpage-content3">
                        <h1>Pricing</h1>
                        <img src="/free-img.svg" alt="" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default LandingPage;