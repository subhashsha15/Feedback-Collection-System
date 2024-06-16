import React, { useState, useEffect } from 'react'
import './ResponseCard.css'
import Accordion from 'react-bootstrap/Accordion';
import FormEdit from '../formEdit/FormEdit';
import { useDispatch } from 'react-redux';
import { deleteForm, editForm } from '../../ReduxStore/formSlice';
import Pagination from '../pagination/Pagination'
const ResponseCard = ({ forms }) => {
    console.log("responsecard", forms);
    const dispatch = useDispatch();
    const [isEditable, setIsEditable] = useState(false);
    const [activeKey, setActiveKey] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);

    const handleDelete = (id, e) => {
        e.preventDefault();
        e.stopPropagation();
        dispatch(deleteForm(id));
        setActiveKey(id); // Open the accordion if it's not already open
    };

    const handleisEditable = (id, e) => {
        e.preventDefault();
        e.stopPropagation();
        setIsEditable(!isEditable);
        setActiveKey(id); // Open the accordion if it's not already open
    };

    const handleAccordianClick = (id, e) => {
        console.log("accordian clicked");
        e.preventDefault();
        setActiveKey(prevKey => prevKey === id ? null : id); // Toggle accordion open/close
    }

    useEffect(() => {
        console.log(isEditable);
    }, [isEditable])

    // pagination codes***********************

    const itemsPerPage = 6;
    const totalPages = Math.ceil(forms.length / itemsPerPage);
    // Calculate the forms to display on the current page
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentForms = forms.slice(startIndex, endIndex);
    return (

        <>
            <div className="response-card-container">
                <div className="response-card-content">
                    <Accordion activeKey={activeKey}>
                        {
                            currentForms.map((form, index) => {
                                return (
                                    <>
                                        <Accordion.Item eventKey={form._id} key={form._id} >
                                            <Accordion.Header onClick={(e) => handleAccordianClick(form._id, e)}>
                                                <div className="response-card-header">
                                                    <div className="response-card-info">
                                                        <div className="serial-no">{startIndex + index + 1}.</div>
                                                        <div className="response-card-username">{form.fields[0].value} {form.fields[1].value}</div>
                                                        <div className="response-card-email">{form.fields[2].value}</div>
                                                        <div className="response-card-country">{form.fields[5].value}</div>
                                                        <div className="response-card-state">{form.fields[6].value}</div>
                                                        <div className="response-card-gender">{form.fields[4].value}</div>
                                                    </div>
                                                    <div className="response-card-actions">
                                                        <div className="response-card-edit" onClick={(e) => handleisEditable(form._id, e)}>
                                                            {
                                                                isEditable && activeKey === form._id ? <img src="/edit-red-icon.svg" alt="" /> : <img src="/edit-icon.svg" alt="" />
                                                            }
                                                        </div>
                                                        <div className="response-card-delete" onClick={(e) => handleDelete(form._id, e)}>
                                                            <img src="/delete-icon.svg" alt="" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </Accordion.Header>
                                            <Accordion.Body>
                                                <FormEdit form={form} setIsEditable={setIsEditable} isEditable={isEditable} />
                                            </Accordion.Body>
                                        </Accordion.Item>
                                    </>
                                )
                            })
                        }
                    </Accordion>
                </div>
                <div className="response-card-pagination">
                    <Pagination currentPage={currentPage} totalPages={totalPages} setCurrentPage={setCurrentPage} />
                </div>
            </div>
        </>
    )
}

export default ResponseCard