import React, { useEffect, useState, useRef } from 'react';
import './FormEdit.css';
import { editForm as editFormAction } from '../../ReduxStore/formSlice'; // Rename the import to avoid conflict
import { useDispatch } from 'react-redux';

const FormEdit = ({ form, setIsEditable, isEditable }) => {
    const dispatch = useDispatch();
    const [editForm, setEditForm] = useState({ ...form });
    const firstTextareaRef = useRef(null);

    const handleChange = (index, event) => {
        const newFields = editForm.fields.map((field, i) =>
            i === index ? { ...field, value: event.target.value } : field
        );
        setEditForm({ ...editForm, fields: newFields });
    };

    const handleUpdate = () => {
        setIsEditable(false);
        const { _id } = editForm; // Get the id from editForm
        dispatch(editFormAction({ id: _id, form: editForm })); // Use the correct dispatch function and form data
        console.log("handleUpdate=", editForm);
    };

    useEffect(() => {
        if (isEditable && firstTextareaRef.current) {
            firstTextareaRef.current.focus();
        }
    }, [isEditable]);

    return (
        <>
            <div className="formedit-container">
                <div className="formedit-details">
                    {
                        editForm.fields.map((fieldItem, index) => (
                            <div className='formedit-field' key={index}>
                                <label>{fieldItem.label}</label>
                                <textarea
                                    ref={index === 0 ? firstTextareaRef : null}
                                    value={fieldItem.value}
                                    onChange={(event) => handleChange(index, event)}
                                    readOnly={!isEditable}
                                />
                            </div>
                        ))
                    }
                </div>
                <div className={isEditable ? 'save-button' : 'save-button disable-btn'} onClick={handleUpdate}>
                    <button disabled={!isEditable}>Update</button>
                </div>
            </div>
        </>
    );
};

export default FormEdit;
