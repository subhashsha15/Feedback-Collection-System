import React from 'react'
import './Pagination.css'

const  Pagination = ({ currentPage, totalPages, setCurrentPage }) => {
    const handlePrevious = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    const handleNext = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    const handlePageClick = (page) => {
        setCurrentPage(page);
    };

    return (
        <nav aria-label="Page navigation example">
            <ul className="pagination pagination-sm d-flex justify-content-center align-items-center">
                <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
                    <button className="page-link" onClick={handlePrevious}>Previous</button>
                </li>
                {Array.from({ length: totalPages }, (_, index) => (
                    <li key={index} className={`page-item ${currentPage === index + 1 ? 'active' : ''}`}>
                        <button className="page-link" onClick={() => handlePageClick(index + 1)}>{index + 1}</button>
                    </li>
                ))}
                <li className={`page-item ${currentPage === totalPages ? 'disabled' : ''}`}>
                    <button className="page-link" onClick={handleNext}>Next</button>
                </li>
            </ul>
        </nav>
    );
};

export default Pagination;
