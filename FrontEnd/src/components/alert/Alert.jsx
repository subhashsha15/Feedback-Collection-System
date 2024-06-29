import React from 'react';

const Alert = ({ Status, Message, onClose,onConfirm  }) => {
    return (
        <div className="modal fade show d-block" tabIndex="-1" role="dialog" style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">{Status}</h5>
                    </div>
                    <div className="modal-body">
                        <p>{Message}</p>
                    </div>
                    <div className="modal-footer">
                        {onConfirm ? (
                            <>
                                <button type="button" className="btn btn-secondary" onClick={onClose}>No</button>
                                <button type="button" className="btn btn-primary" onClick={onConfirm}>Yes</button>
                            </>
                        ) : (
                            <button type="button" className="btn btn-secondary" onClick={onClose}>Close</button>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Alert;
