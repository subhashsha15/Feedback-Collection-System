import React, { useState } from "react";
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom';
import { FaUser, FaUserPlus } from "react-icons/fa";
import "./Navbar.css";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../ReduxStore/loginSlice";
import { logoutUser } from "../../ReduxStore/authSlice"
import { FaBars } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
const Navbar = () => {
    const [showLoginOption, setShowLoginOption] = useState(false);
    const [activeLink, setActiveLink] = useState("home");
    const [show, setShow] = useState(false);
    const dispatch = useDispatch();
    const location = useLocation();
    const navigate = useNavigate();
    const { user } = useSelector((state) => state.auth);

    const handleLoginButtonClick = () => {
        setShowLoginOption(prev => !prev);
    };
    const handleLoginOptionsClick = (userType) => {
        setShowLoginOption(false); // Always close login options on click
        dispatch(login(userType));
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
        setShow(false);
    };

    const handleLogOut = () => {
        dispatch(logoutUser(user.data.token)).then((response) => {
            if (response.meta.requestStatus === 'fulfilled') {
                navigate('/');
            }
        });
    }
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
                                <div className={show ? "responsive-nav-links " : "nav-links"}>
                                    {
                                        location.pathname === '/home' && (
                                            <>
                                                <Link to="/home" id="about-link" style={activeLink == "home" ? activeStyles : navLinkStyles} onClick={() => handleNavLinkClick('home')}>Home</Link>
                                                <Link to="#about" id="about-link" style={activeLink == "about" ? activeStyles : navLinkStyles} onClick={() => handleNavLinkClick('about')}>About</Link>
                                                <Link to="#forms" id="forms-link" style={activeLink == "forms" ? activeStyles : navLinkStyles} onClick={() => handleNavLinkClick('forms')}>Forms</Link>
                                                <Link to="#contact" id="contact-link" style={activeLink == "contact" ? activeStyles : navLinkStyles} onClick={() => handleNavLinkClick('contact')}>Contact Us</Link>
                                            </>
                                        )
                                    }
                                </div>
                                {
                                    !user ? (
                                        <button className="nav-login-btn" onClick={handleLoginButtonClick}>Login</button>
                                    ) : (
                                        <>
                                            <div className="user-container">
                                                <div class="dropdown">
                                                    <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                        {user?.data?.name.split(" ")[0]}
                                                        {/* Subhash */}
                                                    </button>
                                                    <ul class="dropdown-menu">
                                                        {
                                                            location.pathname !== '/home' && <li><Link to="/home" className="router-link">Home</Link></li>
                                                        }
                                                        <li onClick={handleLogOut}>Log Out</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </>
                                    )
                                }
                            </>
                        )
                    }
                    {
                        showLoginOption && (<div className="login-options">
                            <div name="user" className="user-login" onClick={() => handleLoginOptionsClick("User")}>
                                <FaUser />
                                <Link to="/signup" className="router-link"><span>User</span></Link>
                            </div>
                            <div id="admin" className="admin-login" onClick={() => handleLoginOptionsClick("Admin")}>
                                <FaUserPlus />
                                <Link to="/signup" className="router-link"><span>Admin</span></Link>
                            </div>
                        </div>)
                    }
                    {
                        location.pathname !== '/' || location.pathname === '/admin' && (
                            <>
                                <div className="nav-icon" onClick={() => setShow(!show)}>
                                    {!show ? <FaBars /> : <RxCross2 />}
                                </div>
                            </>
                        )
                    }
                </div >
            </div >
        </>
    )
}

export default Navbar;