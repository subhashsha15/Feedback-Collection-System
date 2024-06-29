import React from "react";
import { Field, ErrorMessage } from "formik";
import './FormField.css';
import StarRating from "../starRating/StarRating";

const FormField = ({ field }) => {
    switch (field.type) {
        case "text":
        case "email":
        case "number":
        case "date":
            return (
                <div className="rectangle-box">
                    <label htmlFor={field.name}>{field.label}</label>
                    <Field type={field.type} id={field.name} name={field.name} placeholder={field.placeholder} />
                    <ErrorMessage name={field.name} component="div" className="error" />
                </div>
            );
        case "checkbox":
            return (
                <div className="rectangle-box checkbox-field">
                    <label>
                        <Field type="checkbox" name={field.name} />
                        {field.label}
                    </label>
                    <ErrorMessage name={field.name} component="div" className="error" />
                </div>
            );
        case "radio":
            return (
                <div className="rectangle-box radio-field">
                    <label>{field.label}</label>
                    <div className="radio-options">
                        {field.options.map((option, index) => (
                            <div key={index}>
                                <Field type="radio" id={`${field.name}_${option}`} name={field.name} value={option} />
                                <label htmlFor={`${field.name}_${option}`}>{option}</label>
                            </div>
                        ))}
                    </div>
                    <ErrorMessage name={field.name} component="div" className="error" />
                </div>
            );
        case "select":
            return (
                <div className="rectangle-box">
                    <label htmlFor={field.name}>{field.label}</label>
                    <Field as="select" id={field.name} name={field.name}>
                        {field.options.map((option, index) => (
                            <option key={index} value={option}>
                                {option}
                            </option>
                        ))}
                    </Field>
                    <ErrorMessage name={field.name} component="div" className="error" />
                </div>
            );
        case "textarea":
            return (
                <div className="rectangle-box textarea-field">
                    <label htmlFor={field.name}>{field.label}</label>
                    <Field as="textarea" id={field.name} name={field.name} placeholder={field.placeholder} />
                    <ErrorMessage name={field.name} component="div" className="error" />
                </div>
            );
        case "rating":
            return (
                <div className="rectangle-box">
                    <label>{field.label}</label>
                    <StarRating field={field} />
                    <ErrorMessage name={field.name} component="div" className="error" />
                </div>
            );
        default:
            return null;
    }
};

export default FormField;
