import React from "react";
import './FormField.css'
const FormField = ({ field }) => {
    switch (field.type) {
        case "text":
        case "email":
        case "number":
        case "date":
            return (
                <div className="rectangle-box">
                    <label htmlFor={field.label}>{field.label}</label>
                    <input type={field.type} id={field.label} placeholder={field.placeholder} required={field.required} />
                </div>
            );
        case "checkbox":
            return (
                <div className="rectangle-box">
                    <label>
                        <input type="checkbox" defaultChecked={field.default} />
                        {field.label}
                    </label>
                </div>
            );
        case "radio":
            return (
                <div className="rectangle-box">
                    <label>{field.label}</label>
                    {field.options.map((option, index) => (
                        <div key={index}>
                            <input type="radio" id={option} name={field.label} value={option} />
                            <label htmlFor={option}>{option}</label>
                        </div>
                    ))}
                </div>
            );
        case "select":
            return (
                <div className="rectangle-box">
                    <label htmlFor={field.label}>{field.label}</label>
                    <select id={field.label}>
                        {field.options.map((option, index) => (
                            <option key={index} value={option}>
                                {option}
                            </option>
                        ))}
                    </select>
                </div>
            );
        case "textarea":
            return (
                <div className="rectangle-box">
                    <label htmlFor={field.label}>{field.label}</label>
                    <textarea id={field.label} placeholder={field.placeholder}></textarea>
                </div>
            );
        default:
            return null;
    }
};

export default FormField;
