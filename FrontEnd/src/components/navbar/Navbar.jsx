import React, { useState } from "react";
import { Link, NavLink } from 'react-router-dom';
import { FaUser, FaUserPlus } from "react-icons/fa";
import "./Navbar.css";
const Navbar = () => {
    const [showLoginOption, setShowLoginOption] = useState(false);
    const [activeLink, setActiveLink] = useState("home");
    const handleLoginButtonClick = () => {
        setShowLoginOption(prev => !prev);
    };
    const handleLoginOptionsClick = () => {
        setShowLoginOption(prev => !prev);
    };
    const scrollToSection = (id) => {
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };
    const navLinkStyles = {
        fontWeight: "normal",
        color: "#024d3ef9",
        textDecoration: "none"
};

const activeStyles = {
    color: "#049822",
    textDecoration: "none",
    fontWeight: "600"
};


const handleNavLinkClick = (id) => {
    setActiveLink(id);
    scrollToSection(id);
};
return (
    <>
        <div className="nav-container">
            <div className="nav-content">
                <div className="nav-logo">
                    <Link to="/home" className="router-link"><img src="/Logo.svg" alt="" /></Link>
                </div>
                <div className="nav-links">
                    {/* <a id="home-link" href="/home" style={activeLink == "home" ? activeStyles : navLinkStyles} onClick={() => handleNavLinkClick('home')}>Home</a> */}
                    <Link to="/home" id="about-link" style={activeLink == "home" ? activeStyles : navLinkStyles} onClick={() => handleNavLinkClick('home')}>Home</Link>
                    <Link to="#about" id="about-link" style={activeLink == "about" ? activeStyles : navLinkStyles} onClick={() => handleNavLinkClick('about')}>About</Link>
                    <Link to="#forms" id="forms-link" style={activeLink == "forms" ? activeStyles : navLinkStyles} onClick={() => handleNavLinkClick('forms')}>Forms</Link>
                    <Link to="#contact" id="contact-link" style={activeLink == "contact" ? activeStyles : navLinkStyles} onClick={() => handleNavLinkClick('contact')}>Contact Us</Link>
                    {/* <a id="about-link" href="#about" style={activeLink == "about" ? activeStyles : navLinkStyles} onClick={() => handleNavLinkClick('about')}>About</a> */}
                    {/* <a id="forms-link" href="#forms" style={activeLink == "forms" ? activeStyles : navLinkStyles} onClick={() => handleNavLinkClick('forms')}>Forms</a> */}
                    {/* <a id="contact-link" href="#contact" style={activeLink == "contact" ? activeStyles : navLinkStyles} onClick={() => handleNavLinkClick('contact')}>Contact Us</a> */}
                </div>
                <button className="nav-login-btn" onClick={handleLoginButtonClick}>Login</button>
                {showLoginOption && (<div onClick={handleLoginOptionsClick} className="login-options">
                    <div className="user-login">
                        <FaUser />
                        <Link to="/signup" className="router-link"><span>User</span></Link>
                    </div>
                    <div className="admin-login">
                        <FaUserPlus />
                        <Link to="/signup" className="router-link"><span>Admin</span></Link>

                    </div>
                </div>)}
            </div>
        </div>
    </>
)
}

export default Navbar;