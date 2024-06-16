import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchFilteredForms } from '../../ReduxStore/formSlice';
import './FeedbackResponse.css';
import ResponseCard from '../responseCard/ResponseCard';

const FeedbackResponse = ({ forms: initialForms }) => {
    console.log("feedbackresponse", initialForms); // Log initial forms for debugging
    const dispatch = useDispatch();
    const filteredForms = useSelector((state) => state.forms.filteredForms) || [];
    const [forms, setForms] = useState(Array.isArray(initialForms) ? initialForms : []); // Ensure forms is an array
    console.log("feedbackresponse filterdforms=", filteredForms); // Log initial forms for debugging

    const [selectedCountry, setSelectedCountry] = useState('');
    const [selectedState, setSelectedState] = useState('');
    const [selectedFormTitle, setSelectedFormTitle] = useState('');
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        const filters = {
            country: selectedCountry,
            state: selectedState,
            formTitle: selectedFormTitle,
            search: searchTerm
        };

        // Check if all filters are null or empty
        if (!selectedCountry && !selectedState && !selectedFormTitle && !searchTerm) {
            setForms(Array.isArray(initialForms) ? initialForms : []); // Use initial forms if no filters are applied
        } else {
            dispatch(fetchFilteredForms(filters)).then((action) => {
                if (action.meta.requestStatus === 'fulfilled') {
                    const { data } = action.payload;
                    setForms(Array.isArray(data) ? data : []); // Update local state with filtered forms
                }
            });
        }
    }, [selectedCountry, selectedState, selectedFormTitle, searchTerm, initialForms]);

    const getCountries = (forms) => {
        const countries = forms.flatMap(item =>
            item.fields.filter(field => field.label === "Country").map(field => field.value)
        );
        return [...new Set(countries)].sort();
        // return uniqueCountries.sort();
    };

    const getStates = (forms) => {
        const states = forms.flatMap(item =>
            item.fields.filter(field => field.label === "State").map(field => field.value)
        );
        return [...new Set(states)].sort();
    };

    const getFormTitles = (forms) => {
        const titles = forms.map(item => item.formTitle);
        return [...new Set(titles)].sort();
    };

    const countryValues = getCountries(initialForms);
    const stateValues = getStates(initialForms);
    const formTitles = getFormTitles(initialForms);

    return (
        <>
            <div className="feedback-response-container">
                <div className="feedback-response-content">
                    <div className="feedback-response-content-top">
                        <div className="feedback-response-content-dropdowns">
                            <div className="form-group col-md-4">
                                <label htmlFor="inputCountry">Select Country</label>
                                <select
                                    id="inputCountry"
                                    className="form-control"
                                    value={selectedCountry}
                                    onChange={(e) => setSelectedCountry(e.target.value)}
                                >
                                    <option value="">All</option>
                                    {countryValues.map((country, index) => (
                                        <option key={index} value={country}>{country}</option>
                                    ))}
                                </select>
                            </div>
                            <div className="form-group col-md-4">
                                <label htmlFor="inputState">Select State</label>
                                <select
                                    id="inputState"
                                    className="form-control"
                                    value={selectedState}
                                    onChange={(e) => setSelectedState(e.target.value)}
                                >
                                    <option value="">All</option>
                                    {stateValues.map((state, index) => (
                                        <option key={index} value={state}>{state}</option>
                                    ))}
                                </select>
                            </div>
                            <div className="form-group col-md-4">
                                <label htmlFor="inputTitle">Sort By</label>
                                <select
                                    id="inputTitle"
                                    className="form-control"
                                    value={selectedFormTitle}
                                    onChange={(e) => setSelectedFormTitle(e.target.value)}
                                >
                                    <option value="">All</option>
                                    {formTitles.map((title, index) => (
                                        <option key={index} value={title}>{title}</option>
                                    ))}
                                </select>
                            </div>
                        </div>
                        <div className="feedback-response-content-searchbox">
                            <div>
                                <img src="/search-icon.svg" alt="" />
                                <input
                                    type="text"
                                    placeholder='Search'
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="feedback-response-content-bottom">
                        {forms.length === 0 ? (
                            <div className="no-data-message">Not found</div>
                        ) : (
                            <ResponseCard forms={forms} />
                        )}
                    </div>
                </div>
            </div>
        </>
    );
};

export default FeedbackResponse;
