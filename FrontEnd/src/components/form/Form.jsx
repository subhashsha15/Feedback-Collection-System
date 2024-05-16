import React, { useEffect } from "react";
import "./Form.css";
import { useParams } from "react-router-dom";
import { FormData } from "../../FormTypesData";
import FormField from "../formField/FormField";
const Form = () => {
    const { title } = useParams();
    const formConfig = FormData.find((form) => form.formTitle === title);
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <>
            <div className="form-container">
                <div className="form-content">
                    <div className="form-content-top">
                        <img src={formConfig.formImg} alt="" />
                    </div>
                    <div className="form-content-middle">
                        <div className="rectangle-box form-title">
                            <div className="form-title-name">{formConfig.formTitle}</div>
                            <div className="form-title-desc">{formConfig.formDescription}</div>
                        </div>
                        {formConfig.formFields.map((field, index) => (
                            <FormField key={index} field={field} />
                        ))}
                        <div className="form-content-bottom">
                            <button className="clear-btn">Clear</button>
                            <button className="form-submit-btn">Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Form;