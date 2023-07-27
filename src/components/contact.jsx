import React,{ useState } from 'react';
import {capFirst, checkEmail} from '../utils/helper'


function Contact() {
    const { name, email, message } = pices;
    const [pices, setFormState] = useState({ name: '', email: '', message: '' });
    const [errorMessage, setErrorMessage] = useState('');

    function checkValues(e) {
        if (e.target.name === 'email') {
            const isEmail = checkEmail(e.target.value);
            if (!isEmail) {
                setErrorMessage('Not A valid Email.');
            } else {
                setErrorMessage('');
            }
        } else {
            if (!e.target.value.length) {
                setErrorMessage(`${capFirst(e.target.name)} is required.`);
            } else {
                setErrorMessage('');
            }
        }
        if (!errorMessage) {
            setFormState({ ...formState, [e.target.name]: e.target.value });
        }
    }
    
    function submitForm(e) {
        e.preventDefault();
        document.querySelectorAll('.form-control').forEach((input) => input.value = "");
    }
    return (
        <div className= "container">
            <h2>Contact Me</h2>
            <form className="contact-form"onSubmit={submitForm}></form> 
                <div className='form-group'>
                    <label htmlFor="name">Name:</label>
                    <input
                    type="text"
                    placeholder="Your Name"
                    value={name}
                    name="name"
                    className="contact-input"
                    onChange={checkValues}></input>
                </div>
                <div className='form-group'>
                    <label htmlFor="email">Email:</label>
                    <input
                    type="text"
                    placeholder="Your Email"
                    value={email}
                    name="email"
                    className="contact-input"
                    onChange={checkValues}></input>
                </div>
                <div className='form-group'>
                    <label htmlFor="message">Message:</label>
                    <input
                    type="text"
                    placeholder="Add a message."
                    value={message}
                    name="message"
                    className="contact-input"
                    onChange={checkValues}></input>
                </div>
                {errorMessage && (
                    <div>
                        <p>{errorMessage}</p>
                    </div>
                )}
                <button className="contact-Bnt" type="submit">Submit</button>
        </div>
    )
}

export default Contact;