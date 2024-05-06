import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa6";

import "./SignUp.css";

const SignUp = () => {
    const [isSignUp, setIsSignUp] = useState("signup");
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    const [isSignUpSuccessful, setIsSignUpSuccessful] = useState(false);

    const handleAfterSignUpSuccess = () => {
        setIsSignUp("login");
        setIsSignUpSuccessful(false);
    }
    return (
        <>
            <div className="signup-container">
                <div className={isSignUp == "signup" ? "signup-content" : "signup-content login-content"}>
                    <div className="signup-content-left">
                        <img src="/Signup-img.png" alt="" />
                    </div>
                    <div className="signup-content-right">
                        {!isSignUpSuccessful ? (<>
                            <div className="signup-content-right-heading">
                                <h2>{isSignUp == "signup" ? "Sign up with free trail" : "Welcome back!"}</h2>
                                <p>{isSignUp == "signup" ? "Empower your experience, sign up for a free account today" : "Please login to accces your account."} </p>
                            </div>
                            <div className="signup-content-userDetails">
                                {isSignUp == "signup" && (<div className="user-name">
                                    <label htmlFor="name">Full Name</label>
                                    <input id="name" type="text" placeholder="ex. Jhon Doe" required />
                                </div>)}
                                <form action="">

                                <div className="user-email">
                                    <label htmlFor="email">Email</label>
                                    <input id="email" type="email" placeholder="ex. jhondoe@gmail.com" required />
                                </div>
                                </form>
                                <div className="user-password">
                                    <label htmlFor="password">Password</label>
                                    <div className="password-icon">
                                        <input id="password" type={!isPasswordVisible ? "password" : "text"} placeholder="Enter password" />
                                        <span onClick={() => setIsPasswordVisible(prev => !prev)}>
                                            {!isPasswordVisible ? <FaEye /> : <FaEyeSlash />}
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="privacy-policy">By registering for an account, you are consenting to our <span>Terms of Service</span> and confirming that you have reviewed and accepted the <span>Global Privacy Statement</span>.</div>
                            <div className="submit-btn">{isSignUp == "signup" ? "Get Started Free" : "Login"}</div>
                            <div className="login-link">
                                {isSignUp === "signup" ? (
                                    <>
                                        Already have an account? <span onClick={() => setIsSignUp("login")}>Login</span>
                                    </>
                                ) : (
                                    <>
                                        Don't have an account yet? <span onClick={() => setIsSignUp("signup")}>Sign up</span>
                                    </>
                                )}
                            </div>
                            {isSignUp == "login" && (<div className="password-reset">
                                Forgot password? <span>Reset Now</span>
                            </div>)}
                        </>
                        ) : (
                            <>
                                <div className="signup-success-container">
                                    <img src="/success-img.png" alt="" />
                                    <h1>CONGRATULATIONS!</h1>
                                    <p>Your account has been created successfully.</p>
                                    <div onClick={handleAfterSignUpSuccess}>Proceed to Login</div>
                                </div>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </>
    )
}

export default SignUp;