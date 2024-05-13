import React from 'react'
import './FeedbackResponse.css'

import ResponseCard from '../responseCard/ResponseCard';
const FeedbackResponse = () => {
    return (
        <>
            <div className="feedback-response-container">
                <div className="feedback-response-content">
                    <div className="feedback-response-content-top">
                        <div className="feedback-response-content-dropdowns">
                            <div class="form-group col-md-4">
                                <label for="inputState">Select Country</label>
                                <select id="inputState" class="form-control">
                                    <option selected>Choose...</option>
                                    <option>1</option>
                                    <option>1</option>
                                    <option>1</option>
                                    <option>1</option>
                                    <option>1</option>
                                </select>
                            </div>
                            <div class="form-group col-md-4">
                                <label for="inputState">Select State</label>
                                <select id="inputState" class="form-control">
                                    <option selected>Choose...</option>
                                    <option>...</option>
                                </select>
                            </div>
                            <div class="form-group col-md-4">
                                <label for="inputState">Select City</label>
                                <select id="inputState" class="form-control">
                                    <option selected>Choose...</option>
                                    <option>...</option>
                                </select>
                            </div>
                        </div>
                        <div className="feedback-response-content-searchbox">
                          <div>
                            <img src="/search-icon.svg" alt="" />
                            <input type="text" placeholder='Search'/>
                          </div>
                        </div>
                    </div>
                    <div className="feedback-response-content-bottom">
                       <ResponseCard/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default FeedbackResponse;