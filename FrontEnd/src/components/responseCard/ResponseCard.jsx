import React, { useState, useEffect } from 'react';
import './ResponseCard.css';
import Accordion from 'react-bootstrap/Accordion';
import FormEdit from '../formEdit/FormEdit';
import { useDispatch, useSelector } from 'react-redux';
import { deleteForm,fetchForms } from '../../ReduxStore/formSlice';
import Pagination from '../pagination/Pagination';
import Alert from '../alert/Alert';

const ResponseCard = ({ forms }) => {
    const dispatch = useDispatch();
    const {status, error } = useSelector((state) => state.forms);
    const [isEditable, setIsEditable] = useState(false);
    const [activeKey, setActiveKey] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const [loading, setLoading] = useState(false);
    const [showConfirmModal, setShowConfirmModal] = useState(false);
    const [formIdToDelete, setFormIdToDelete] = useState(null);

    const handleDelete = (id, e) => {
        e.preventDefault();
        e.stopPropagation();
        setFormIdToDelete(id);
        setShowConfirmModal(true); // Show the confirmation modal
    };

    const confirmDelete = async () => {
        setShowConfirmModal(false);
        setLoading(true);
        try {
            await dispatch(deleteForm(formIdToDelete));
        } catch (error) {
            console.error("Error deleting form:", error);
        } finally {
            setLoading(false);
            dispatch(fetchForms());
        }
    };

    const handleisEditable = (id, e) => {
        e.preventDefault();
        e.stopPropagation();
        setIsEditable(!isEditable);
        setActiveKey(id); // Open the accordion if it's not already open
    };

    const handleAccordionClick = (id, e) => {
        e.preventDefault();
        setActiveKey(prevKey => prevKey === id ? null : id); // Toggle accordion open/close
    };

    // Pagination logic
    const itemsPerPage = 6;
    const totalPages = Math.ceil(forms.length / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentForms = forms.slice(startIndex, endIndex);
    if (error) {
        return (
            <>
                {error && (
                    <Alert Status="Error" Message={error.message} />
                )}

            </>
        )
    }
    return (
        <>
            <div className="response-card-container">
                <div className="response-card-content">
                    {loading ? (
                        <div className='loader'><img src="/Spinner.gif" alt="" /></div>
                    ) : (
                        <Accordion activeKey={activeKey}>
                            {currentForms.map((form, index) => (
                                <Accordion.Item eventKey={form._id} key={form._id}>
                                    <Accordion.Header onClick={(e) => handleAccordionClick(form._id, e)}>
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
                                                    {isEditable && activeKey === form._id ? (
                                                        <img src="/edit-red-icon.svg" alt="" />
                                                    ) : (
                                                        <img src="/edit-icon.svg" alt="" />
                                                    )}
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
                            ))}
                        </Accordion>
                    )}
                </div>
                <div className="response-card-pagination">
                    <Pagination currentPage={currentPage} totalPages={totalPages} setCurrentPage={setCurrentPage} />
                </div>
            </div>
            {showConfirmModal && (
                <Alert
                    Status="Confirm Delete"
                    Message="Are you sure you want to delete this form?"
                    onClose={() => setShowConfirmModal(false)}
                    onConfirm={confirmDelete}
                />
            )}
        </>
    );
};

export default ResponseCard;
