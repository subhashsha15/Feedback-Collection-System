import React, { useState, useEffect, useRef } from "react";
import { Link } from 'react-router-dom';
import { FaUser, FaUserPlus } from "react-icons/fa";
import "./Navbar.css";
const Navbar = () => {
    const [showLoginOption, setShowLoginOption] = useState(false);

    const handleLoginButtonClick = () => {
        setShowLoginOption(prev => !prev);
    };
    const handleLoginOptionsClick = () => {
        setShowLoginOption(prev => !prev);
    };
    return (
        <>
            <div className="nav-container">
                <div className="nav-content">
                    <div className="nav-logo">
                        <img src="/Logo.svg" alt="" />
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