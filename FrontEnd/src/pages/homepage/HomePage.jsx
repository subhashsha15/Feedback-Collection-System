import React,{useEffect}from 'react';
import './HomePage.css';
import ContactUS from '../../components/contactUs/ContactUs';
import About from '../../components/about/About';
import FormCard from '../../components/formCard/FormCard';

const HomePage = () => {
    useEffect(() => {
        window.scrollTo(0, 0); // Scroll to the top of the page
    }, []);
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