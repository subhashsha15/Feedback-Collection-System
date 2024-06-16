import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Formik, Form as FormikForm } from "formik";
import * as Yup from "yup";
import "./Form.css";
import { FormData } from "../../FormTypesData";
import FormField from "../formField/FormField";
import { useDispatch, useSelector } from 'react-redux';
// import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { submitForm } from '../../ReduxStore/formSlice';
const Form = () => {
    const { title } = useParams();
    const formDetails = FormData.find((form) => form.formTitle === title);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    if (!formDetails) {
        return <div>Form not found</div>;
    }

    const initialValues = formDetails.formFields.reduce((acc, field) => {
        acc[field.name] = field.type === "checkbox" ? false : "";
        return acc;
    }, {});

    const validationSchema = Yup.object(
        formDetails.formFields.reduce((acc, field) => {
            switch (field.type) {
                case "email":
                    acc[field.name] = Yup.string().email("Invalid email address").required("This field is required");
                    break;
                case "number":
                    acc[field.name] = Yup.number().required("This field is required");
                    break;
                case "checkbox":
                    acc[field.name] = Yup.boolean().required("This field is required");
                    break;
                case "radio":
                    acc[field.name] = Yup.string().required("Select One Option");
                    break;
                case "rating":
                    acc[field.name] = Yup.number().required("Select Atleast 1 Star");
                    break;
                default:
                    acc[field.name] = Yup.string().required("This field is required");
                    break;
            }
            return acc;
        }, {})
    );

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const handleModalClose = () => {
        // navigate("/home");
    };
    const handleSubmit = (values, { setSubmitting, resetForm }) => {
        const formattedData = {
            formTitle: title,
            fields: formDetails.formFields.map((field) => ({
                label: field.label,
                value: values[field.name]
            }))
        };

        dispatch(submitForm(formattedData));
        setSubmitting(false);
        resetForm();
    };
    return (
        <div className="form-container">
            <div className="form-content">
                <div className="form-content-top">
                    <img src={formDetails.formImg} alt="" />
                </div>
                <div className="form-content-middle">
                    <div className="rectangle-box form-title">
                        <div className="form-title-name">{formDetails.formTitle}</div>
                        <div className="form-title-desc">{formDetails.formDescription}</div>
                    </div>
                    <Formik className="formik-css"
                        initialValues={initialValues}
                        validationSchema={validationSchema}
                        onSubmit={handleSubmit}
                    >
                        {({ isSubmitting, isValid }) => (
                            <FormikForm>
                                {formDetails.formFields.map((field, index) => (
                                    <FormField key={index} field={field} />
                                ))}
                                <div className="form-content-bottom">
                                    <button type="reset" className="clear-btn">Clear</button>
                                    <button
                                        type="submit"
                                        // data-bs-toggle={isValid ? "modal" : ""}
                                        // data-bs-dismiss={isValid ? "" : "modal"}
                                        data-bs-target={isValid ? "" : "#exampleModal"}
                                        className="form-submit-btn"
                                        disabled={isSubmitting}
                                    >
                                        Submit
                                    </button>
                                </div>
                            </FormikForm>
                        )}
                    </Formik>
                    {/* Boostrap Modal */}
                    {/* <!-- Modal --> */}
                    <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div className="modal-dialog">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title w-100 text-center fs-2" id="exampleModalLabel">CONGRATULATIONS!!!</h5>
                                </div>
                                <div className="modal-body  w-100 text-center fs-6">
                                    Response Successfully Submitted 😀😀
                                </div>
                                <div className="modal-footer" onClick={handleModalClose}>
                                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Form;
