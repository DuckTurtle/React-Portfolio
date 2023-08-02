import React,{ useState } from 'react';
import {capFirst, checkEmail} from '../utils/helper'


function Contact() {
    const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    function checkValues(e) {
    
        const { name, value } = e.target;
        if (name === 'email') {
            const isEmail = checkEmail(value);
            if (!isEmail) {
                setErrorMessage('Not A valid Email.');
            } else {
                setErrorMessage('');
            }
        } else {
            if (!value.length) {
                setErrorMessage(`${capFirst(e.target.name)} is required.`);
            } else {
                setErrorMessage('');
            }
        }
        return name === 'name' ? setName(value) : name === 'email' ? setEmail(value) : setMessage(value)  
        
    }
    
    function submitForm(e) {
        e.preventDefault();
        setName('');
        setEmail('');
        setMessage('');
    }
    return (
        <div className= "container contact">
            <h2>Contact Me</h2>
            <h3>Warning This Form has no backend, its simply to show off live validation. If you'd like to contact me do so at qschnell04@gmail.com</h3>
            <form className="contact-form d-flex flex-column flex-wrap align-middle text-center justify-center "onSubmit={submitForm}> 
                <div className='form-group f2'>
                    <label htmlFor="name">Name:</label>
                    <input
                    type="text"
                    placeholder="Your Name"
                    value={name}
                    name="name"
                    className="contact-input"
                    onChange={checkValues}></input>
                </div>
                <div className='form-group f2'>
                    <label htmlFor="email">Email:</label>
                    <input
                    type="text"
                    placeholder="Your Email"
                    value={email}
                    name="email"
                    className="contact-input"
                    onChange={checkValues}></input>
                </div>
                <div className='form-group' id= 'message'>
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
                <button className="contact-Bnt" id="sbt" type="submit">Submit</button>
                </form>
        </div>
    )
}

export default Contact;