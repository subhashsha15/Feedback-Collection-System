import React from "react";
import { FormData } from "../../FormTypesData";
import { Link } from "react-router-dom"
import "./FormCard.css";
const FormCard = ({ id }) => {
    return (
        <>
            <div id={id} className="formcard-container">
                <div id="forms" className="formcard-content">
                    <h1>FeedBack Forms</h1>
                    <div className="feedback-cards">
                        {
                            FormData.map((cardItem) => {
                                return (
                                    <>
                                        <Link to={`/form/${cardItem.formTitle}`} key={cardItem.formId} className="router-link">
                                            <div  className="feedback-card" >
                                                <div className="card-img">
                                                    <img src={cardItem.formCardImg} alt="" />
                                                </div>
                                                <div className="card-title">
                                                    {cardItem.formTitle}
                                                </div>
                                            </div>
                                        </Link>
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