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
                        <div className="rectangle-box form-title">
                            <div className="form-title-name">Form Title (Customer Feedback)</div>
                            <div className="form-title-desc">Form Descriptions will appear her</div>
                        </div>
                        <div className="rectangle-box feedback-type">
                            <div>Feedback Type</div>
                            <div className="feedback-type-options">
                                <div className="feedback-type-optionItem">
                                    <input type="radio" id="comments" value="comments" />
                                    <label for="comments">Comments</label>
                                </div>
                                <div className="feedback-type-optionItem">
                                    <input type="radio" id="questions" value="questions" />
                                    <label for="questions">Questions</label>
                                </div>
                                <div className="feedback-type-optionItem">
                                    <input type="radio" id="bug-reports" value="bug-reports" />
                                    <label for="bug-reports">Bug Reports</label>
                                </div>
                                <div className="feedback-type-optionItem">
                                    <input type="radio" id="feature-request" value="feature-request" />
                                    <label for="feature-request">Feature Request</label>
                                </div>
                            </div>
                        </div>
                        <div className="rectangle-box user-feedback">
                            <label for="feedback" aria-required>Feedback</label>
                            <input type="text" id="feedback" placeholder="Your answer" required/>
                        </div>
                        <div className="rectangle-box user-suggestion">
                            <label for="suggestion">Suggestions for improvement</label>
                            <input type="text" id="suggestion" placeholder="Your answer" />
                        </div>
                        <div className="rectangle-box feedback-userName">
                            <label for="userName">Name</label>
                            <input type="text" id="userName" placeholder="Your answer" />
                        </div>
                        <div className="rectangle-box feedback-userEmail">
                            <label for="userEmail">Email</label>
                            <input type="text" id="userEmail" placeholder="Your answer" />
                        </div>
                        <div className="rectangle-box feedback-userPhoneNumber">
                            <label for="userPhoneNumber">Phone Number</label>
                            <input type="number" id="userPhoneNumber" placeholder="Your answer" />
                        </div>
                        <div className="rectangle-box feedback-userPhoneNumber">
                            <label for="state">State</label>
                            <input type="text" id="state" placeholder="Your answer" />
                        </div>
                        <div className="rectangle-box feedback-userPhoneNumber">
                            <label for="city">City</label>
                            <input type="text" id="city" placeholder="Your answer" />
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