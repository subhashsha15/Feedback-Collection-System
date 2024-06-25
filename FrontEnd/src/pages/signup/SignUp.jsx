import React, { useEffect, useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa6';
import { useDispatch, useSelector } from 'react-redux';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { registerUser, loginUser } from '../../ReduxStore/authSlice';
import { login } from "../../ReduxStore/loginSlice";
import { useLocation, useNavigate } from 'react-router-dom';
import './SignUp.css';
import Alert from '../../components/alert/Alert';

const SignUp = () => {
    const [isSignUp, setIsSignUp] = useState('signup');
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    const [isSignUpSuccessful, setIsSignUpSuccessful] = useState(false);
    const [showAlert, setShowAlert] = useState(false);
    const [alertMessage, setAlertMessage] = useState('');
    const dispatch = useDispatch();
    const { loading, error, user } = useSelector((state) => state.auth);
    console.log("error",error);
    const loginStatus = useSelector((state) => state.login);
    const navigate = useNavigate();

    useEffect(() => {
        if (loginStatus === "Admin") {
            setIsSignUp('login');
        }
    }, [loginStatus]);

    useEffect(() => {
        if (error) {
            setAlertMessage(error);
            setShowAlert(true);
        }
    }, [error]);

    const validationSchema = Yup.object().shape({
        name: isSignUp === 'signup' ? Yup.string().required('Full Name is required') : null,
        email: Yup.string().email('Invalid email').required('Email is required'),
        password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
    });

    const handleFormSubmit = (values, { setSubmitting }) => {
        if (isSignUp === 'signup') {
            dispatch(registerUser(values)).then((response) => {
                if (response.meta.requestStatus === 'fulfilled') {
                    setIsSignUpSuccessful(true);
                }
            });
        } else if (loginStatus === "Admin") {
            if (values.email === "subhashkumar@gmail.com" && values.password === "subhash@123") {
                navigate('/admin');
            } else {
                alert("Invalid admin credentials");
            }
        } else {
            dispatch(loginUser(values)).then((response) => {
                if (response.meta.requestStatus === 'fulfilled') {
                    navigate('/home');
                }
            });
        }
        setSubmitting(false);
    };

    const handleAfterSignUpSuccess = () => {
        setIsSignUp('login');
        setIsSignUpSuccessful(false);
    };

    const closeAlert = () => {
        setShowAlert(false);
    };

    return (
        <div className="signup-container">
            <div className={isSignUp === 'signup' ? 'signup-content' : 'signup-content login-content'}>
                <div className="signup-content-left">
                    <img src="/Signup-img.png" alt="" />
                </div>
                <div className="signup-content-right">
                    {loading && <div className="loading-spinner">Loading...</div>}
                    {(!loading && isSignUpSuccessful) && (
                        <div className="signup-success-container">
                            <img src="/success-img.png" alt="" />
                            <h1>CONGRATULATIONS!</h1>
                            <p>Your account has been created successfully.</p>
                            <div onClick={handleAfterSignUpSuccess}>Proceed to Login</div>
                        </div>
                    )}
                    {(!loading && !isSignUpSuccessful) && (
                        <>
                            <div className="signup-content-right-heading">
                                <h2>{isSignUp === 'signup' ? 'Sign up with free trial' : 'Welcome back!'}</h2>
                                <p>{isSignUp === 'signup' ? 'Empower your experience, sign up for a free account today' : 'Please login to access your account.'}</p>
                            </div>
                            <Formik
                                initialValues={{
                                    name: '',
                                    email: loginStatus === "Admin" ? "subhashkumar@gmail.com" : "",
                                    password: loginStatus === "Admin" ? "subhash@123" : ""
                                }}
                                validationSchema={validationSchema}
                                onSubmit={handleFormSubmit}
                            >
                                {({ isSubmitting }) => (
                                    <Form className="signup-content-userDetails">
                                        {isSignUp === 'signup' && (
                                            <div className="user-name">
                                                <label htmlFor="name">Full Name</label>
                                                <Field id="name" name="name" type="text" placeholder="ex. John Doe" />
                                                <ErrorMessage name="name" component="div" className="error" />
                                            </div>
                                        )}
                                        <div className="user-email">
                                            <label htmlFor="email">Email</label>
                                            <Field id="email" name="email" type="email" placeholder="ex. johndoe@gmail.com" />
                                            <ErrorMessage name="email" component="div" className="error" />
                                        </div>
                                        <div className="user-password">
                                            <label htmlFor="password">Password</label>
                                            <div className="password-icon">
                                                <Field id="password" name="password" type={!isPasswordVisible ? 'password' : 'text'} placeholder="Enter password" />
                                                <span onClick={() => setIsPasswordVisible((prev) => !prev)}>
                                                    {!isPasswordVisible ? <FaEye /> : <FaEyeSlash />}
                                                </span>
                                            </div>
                                            <ErrorMessage name="password" component="div" className="error" />
                                        </div>
                                        <div className="privacy-policy">
                                            By registering for an account, you are consenting to our <span>Terms of Service</span> and confirming that you have reviewed and accepted the <span>Global Privacy Statement</span>.
                                        </div>
                                        <button type="submit" className="submit-btn" disabled={isSubmitting || loading}>
                                            {isSignUp === 'signup' ? 'Get Started Free' : 'Login'}
                                        </button>
                                    </Form>
                                )}
                            </Formik>
                            <div className="login-link">
                                {isSignUp === 'signup' ? (
                                    <>
                                        Already have an account? <span onClick={() => setIsSignUp('login')}>Login</span>
                                    </>
                                ) : (
                                    <>
                                        Don't have an account yet? <span onClick={() => setIsSignUp('signup')}>Sign up</span>
                                    </>
                                )}
                            </div>
                            {isSignUp === 'login' && (
                                <div className="password-reset">
                                    Forgot password? <span>Reset Now</span>
                                </div>
                            )}
                        </>
                    )}
                </div>
            </div>
            {showAlert && <Alert Status="ERROR" Message={alertMessage}  onClose={closeAlert}/>}
        </div>
    );
};

export default SignUp;
