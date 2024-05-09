import React from "react";
import { FormTypes } from "../../FormTypesData";
import "./FormCard.css";
const FormCard = () => {
    return (
        <>
            <div className="formcard-container">
                <div className="formcard-content">
                    <h1>FeedBack Forms</h1>
                    <div className="feedback-cards">
                        {
                            FormTypes.map((cardItem) => {
                                return (
                                    <>
                                        <div className="feedback-card">
                                            <div className="card-img">
                                                <img src={cardItem.formImg} alt="" />
                                            </div>
                                            <div className="card-title">
                                                {cardItem.formTitle}
                                            </div>
                                        </div>
                                    </>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default FormCard;