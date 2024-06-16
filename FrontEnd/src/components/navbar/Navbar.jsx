import React, { useState } from "react";
import { Link, NavLink, useLocation } from 'react-router-dom';
import { FaUser, FaUserPlus } from "react-icons/fa";
import "./Navbar.css";
import { useDispatch } from "react-redux";
import { login } from "../../ReduxStore/loginSlice";

const Navbar = () => {
    const [showLoginOption, setShowLoginOption] = useState(false);
    const [activeLink, setActiveLink] = useState("home");
    const dispatch = useDispatch();
    const location = useLocation();
    const handleLoginButtonClick = () => {
        setShowLoginOption(prev => !prev);
    };
    const handleLoginOptionsClick = (e) => {
        setShowLoginOption(prev => !prev);
        const whoLoggedIn = e.target.innerText;
        dispatch(login(whoLoggedIn));
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
                    {
                        location.pathname === '/admin' ? (
                            <>
                                <div className="admin-user-container">
                                    <div className="admin-details">
                                        <span>Subhash Kumar</span>
                                        <span>S</span>
                                    </div>
                                </div>
                            </>
                        ) : (
                            <>
                                <div className="nav-links">
                                    {
                                        location.pathname === '/' ? "" : (
                                            <>
                                                <Link to="/home" id="about-link" style={activeLink == "home" ? activeStyles : navLinkStyles} onClick={() => handleNavLinkClick('home')}>Home</Link>
                                                {
                                                    location.pathname === `/forms${""}` ? "" : (
                                                        <>
                                                            <Link to="#about" id="about-link" style={activeLink == "about" ? activeStyles : navLinkStyles} onClick={() => handleNavLinkClick('about')}>About</Link>
                                                            <Link to="#forms" id="forms-link" style={activeLink == "forms" ? activeStyles : navLinkStyles} onClick={() => handleNavLinkClick('forms')}>Forms</Link>
                                                            <Link to="#contact" id="contact-link" style={activeLink == "contact" ? activeStyles : navLinkStyles} onClick={() => handleNavLinkClick('contact')}>Contact Us</Link>
                                                        </>
                                                    )
                                                }
                                            </>
                                        )
                                    }
                                </div>
                                <button className="nav-login-btn" onClick={handleLoginButtonClick}>Login</button>
                            </>
                        )
                    }
                    {
                        showLoginOption && (<div className="login-options">
                            <div name="user" className="user-login" onClick={handleLoginOptionsClick}>
                                <FaUser />
                                <Link to="/signup" className="router-link"><span>User</span></Link>
                            </div>
                            <div id="admin" className="admin-login" onClick={handleLoginOptionsClick}>
                                <FaUserPlus />
                                <Link to="/signup" className="router-link"><span>Admin</span></Link>
                            </div>
                        </div>)
                    }
                </div >
            </div >
        </>
    )
}

export default Navbar;