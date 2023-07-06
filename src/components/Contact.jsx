import React, { useState } from 'react'
import { MailBtn } from './Buttons'
import { SubscribeBtn } from './Buttons'
import '../styles/contact.css'
import { TextField } from '@mui/material'

const Contact = () => {
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');

    const handleSubmit = () => {
        const tick = document.querySelector('.subscribed');
        // Replace 'YOUR_GOOGLE_FORM_URL' with the actual Google Forms URL
        const googleFormsUrl = 'https://docs.google.com/forms/d/e/1FAIpQLSeH-nbgNj_eDJNtSyHKjTRz4zA6N9Ec4o1JEDe4NjcaMUUT6w/formResponse';
        const formData = new FormData();
        if (email!=="" && name!=="") {
        tick.classList.toggle('tick');
        }
        formData.append('entry.327515566', email); // Replace '123456' with the appropriate form entry ID
        formData.append('entry.1824433559', name); // Replace '123456' with the appropriate form entry ID
        fetch(googleFormsUrl, {
        method: 'POST',
        mode: 'no-cors',
        body: formData,
        })
        .then(() => {
            // Handle successful form submission
            console.log('Form submitted successfully');
        })
        .catch((error) => {
            // Handle form submission error
            console.error('Form submission error:', error);
        });
        setTimeout(() => {

            // 👇️ removes element from DOM
            // tick.style.display = 'none';
            if (email!=="" && name!=="") {
                tick.classList.toggle('tick');
                }
          }, 1000);
    };

  return (
    <>
    <div name='contact' className="contact-section">
        <div className="contact-wrapper">
            <div className="contact-me">
                <h4>Let's Chat.</h4>
                <h4 id="contact-txt2">Tell me about your project.</h4>
                <h3>LET'S CREATE SOMETHING TOGETHER 🤝 </h3>
                <a href='mailto:aspp775@gmail.com' target='_top'><MailBtn btntext="Mail Me"/></a>
            </div>
            <div className='newsletter'>
                <h3>CONNECT WITH ME</h3>
                <h4>I love writing for my people.</h4>
                <h4 id="contact-txt2">Be a part of us and Subscribe Here.</h4>
                <div className="newsletter-form">
                    <div className="newsletter-inputs">
                        <TextField
                            label="Email" 
                            variant="standard"
                            className="input-field"
                            focused
                            InputProps={{ style: { color: 'white' } }}
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            />
                        <TextField
                            label="Name" 
                            variant="standard" 
                            InputProps={{ style: { color: 'white' } }}
                            focused
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            />
                    </div>
                    <div className="subscribe-btn" onClick={handleSubmit}>
                        <SubscribeBtn btntext="Subscribe!"/> <span className='subscribed' style={{color: 'green', fontSize: 24}}>&nbsp;  ✔</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Contact