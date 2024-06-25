import React from 'react';

const Alert = ({ Status, Message, onClose }) => {
    return (
        <div className="modal fade show d-block" tabIndex="-1" role="dialog" style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">{Status}</h5>
                        {/* <button type="button" className="close" onClick={onClose} aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button> */}
                    </div>
                    <div className="modal-body">
                        <p>{Message}</p>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary close" aria-label="Close" onClick={onClose}>Close</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Alert;
