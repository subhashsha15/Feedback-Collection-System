import React from 'react'
import './ResponseCard.css'
import Accordion from 'react-bootstrap/Accordion';
import FormEdit from '../formEdit/FormEdit';
const ResponseCard = () => {
    return (

        <>
            <div className="response-card-container">
                <Accordion>
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>
                            <div className="response-card-header">
                                <div className="response-card-info">
                                    <div className="serial-no">1.</div>
                                    <div className="response-card-username">Subhash Kumar</div>
                                    <div className="response-card-email">subhashsha15@gmail.com</div>
                                    <div className="response-card-country">India</div>
                                    <div className="response-card-state">Bihar</div>
                                    <div className="response-card-phoneNumber">9645646485</div>
                                </div>
                                <div className="response-card-actions">
                                    <div className="response-card-edit">
                                        <img src="/edit-icon.svg" alt="" />
                                    </div>
                                    <div className="response-card-delete">
                                        <img src="/delete-icon.svg" alt="" />
                                    </div>
                                </div>
                            </div>
                        </Accordion.Header>
                        <Accordion.Body>
                            <FormEdit />
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                        <Accordion.Header>Accordion Item #2</Accordion.Header>
                        <Accordion.Body>
                            <FormEdit />
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </div>
        </>
    )
}

export default ResponseCard