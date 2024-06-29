import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Formik, Form as FormikForm } from "formik";
import * as Yup from "yup";
import "./Form.css";
import { FormData } from "../../FormTypesData";
import FormField from "../formField/FormField";
import { useDispatch, useSelector } from 'react-redux';
import { submitForm } from '../../ReduxStore/formSlice';
import Alert from '../../components/alert/Alert';

const Form = () => {
    const { title } = useParams();
    const formDetails = FormData.find((form) => form.formTitle === title);
    const { error } = useSelector((state) => state.forms);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [showAlert, setShowAlert] = useState(false);
    const [alertMessage, setAlertMessage] = useState('');

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
                    acc[field.name] = Yup.number().required("Select At least 1 Star");
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
        setShowAlert(false);
        navigate("/home");
    };

    const handleSubmit = (values, { setSubmitting, resetForm }) => {
        const formattedData = {
            formTitle: title,
            fields: formDetails.formFields.map((field) => ({
                label: field.label,
                value: values[field.name]
            }))
        };

        dispatch(submitForm(formattedData)).then((action) => {
            if (action.error) {
                setAlertMessage(action.error.message);
                setShowAlert(true);
                setSubmitting(false);
            } else {
                setAlertMessage('Response Successfully Submitted 😀😀');
                setShowAlert(true);
                setSubmitting(false);
                resetForm();
            }
        });
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
                    <Formik
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
                                        className="form-submit-btn"
                                        disabled={isSubmitting}
                                    >
                                        Submit
                                    </button>
                                </div>
                            </FormikForm>
                        )}
                    </Formik>
                </div>
            </div>
            {showAlert && (
                 <Alert
                 Status={error ? "Error" : "CONGRATULATIONS!!!"}
                 Message={alertMessage}
                 onClose={handleModalClose}
             />
            )}
        </div>
    );
};

export default Form;
