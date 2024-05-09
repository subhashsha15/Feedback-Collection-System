import React from "react";
import "./Form.css";
const Form = () => {
    return (
        <>
            <div className="form-container">
                <div className="form-content">
                    <div className="form-content-top">
                        <img src="/form-image1.png" alt="" />
                    </div>
                    <div className="form-content-middle">
                        <div className="form-title">
                            <div className="form-title-name">Form Title (Customer Feedback)</div>
                            <div className="form-title-desc">Form Descriptions will appear her</div>
                        </div>
                        <div className="feedback-type">
                            <div>Feedback Type</div>
                            <div className="feedback-type-options">
                                <div className="feedback-type-option1">
                                    <input type="radio" id="comments" value="comments" />
                                    <label for="comments">Comments</label>
                                </div>
                                <div className="feedback-type-option2">
                                    <input type="radio" id="questions" value="questions" />
                                    <label for="questions">Questions</label>
                                </div>
                                <div className="feedback-type-option3">
                                    <input type="radio" id="bug-reports" value="bug-reports" />
                                    <label for="bug-reports">Bug Reports</label>
                                </div>
                                <div className="feedback-type-option4">
                                    <input type="radio" id="feature-request" value="feature-request" />
                                    <label for="feature-request">Feature Request</label>
                                </div>
                            </div>
                        </div>
                        <div className="user-feedback">
                            <label for="feedback" aria-required>Feedback</label>
                            <input type="text" id="feedback" placeholder="Your answer" required/>
                        </div>
                        <div className="user-suggestion">
                            <label for="suggestion">Suggestions for improvement</label>
                            <input type="text" id="suggestion" placeholder="Your answer" />
                        </div>
                        <div className="feedback-userName">
                            <label for="userName">Name</label>
                            <input type="text" id="userName" placeholder="Your answer" />
                        </div>
                        <div className="feedback-userEmail">
                            <label for="userEmail">Email</label>
                            <input type="text" id="userEmail" placeholder="Your answer" />
                        </div>
                        <div className="feedback-userPhoneNumber">
                            <label for="userPhoneNumber">Phone Number</label>
                            <input type="number" id="userPhoneNumber" placeholder="Your answer" />
                        </div>
                    </div>
                    <div className="form-content-bottom">
                        <button className="clear-btn">Clear</button>
                        <button className="form-submit-btn">Submit</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Form;