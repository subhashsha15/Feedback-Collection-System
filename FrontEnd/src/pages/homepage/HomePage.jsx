import React from 'react';
import './HomePage.css';
import ContactUS from '../../components/contactUs/ContactUs';
import About from '../../components/about/About';
import FormCard from '../../components/formCard/FormCard';

const HomePage = () => {
    return (
        <>
            <div className='homepage-container'>
                <div className="homepage-content">
                    <About id='about' />
                    <FormCard id='forms' />
                    <ContactUS id='contact' />
                </div>
            </div>
        </>
    )
}

export default HomePage;