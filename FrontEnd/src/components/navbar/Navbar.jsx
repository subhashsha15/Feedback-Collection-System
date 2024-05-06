import React, { useState } from "react";
import { Link } from 'react-router-dom';
import { FaUser, FaUserPlus } from "react-icons/fa";
import "./Navbar.css";
const Navbar = () => {
    const [showLoginOption, setShowLoginOption] = useState(false);
    return (
        <>
            <div className="nav-container">
                <div className="nav-content">
                    <div className="nav-logo">
                        <img src="/Logo.svg" alt="" />
                    </div>
                    <button className="nav-login-btn" onClick={() => setShowLoginOption(prev => !prev)}>Login</button>
                    {showLoginOption && (<div className="login-options">
                        <div className="user-login">
                            <FaUser />
                            <span>User</span>
                        </div>
                        <div className="admin-login">
                            <FaUserPlus />
                            <span>Admin</span>
                        </div>
                    </div>)}
                </div>
            </div>
        </>
    )
}

export default Navbar;