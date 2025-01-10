import './index.scss'
import { useEffect, useRef, useState } from 'react'
import emailjs from '@emailjs/browser'

const Contact = () => {
    const form = useRef()
    
    const sendEmail = (e) => {
        e.preventDefault()
        emailjs.sendForm('service_qs5fso9', 'template_hhknyxe', form.current, 'GmpicX1KRPVxFt4fU').then(
            (response) => {
              console.log('SUCCESS!', response.status, response.text);
            },
            (error) => {
              console.log('FAILED...', error);
            },
          );
    }
    return(
        <div className='container contact-page'>
            <div className='text-zone'>
                <h1>Contact Me</h1>
                <p>
                    I am interested in opportunities that will grow my experiance in web development and data science 
                    - expecially if it is a larger project. 
                    If you have any other requests or questions for me I will be happy to fulfill that request to the best of my ability. 
                    Please do not hesitate to contact me using the form below as well.
                </p>
                <div className="contact-form">
                    <form ref={form} onSubmit={sendEmail}>
                        <ul>
                            <li className="half">
                                <input type="text" name="name" placeholder="Name" required />
                            </li>
                            <li className="half">
                                <input type="email" name="email" placeholder="Email" required />
                            </li>
                            <li>
                                <input type="text" placeholder="Subject" name="subject" required/>
                            </li>
                            <li>
                                <textarea placeholder='Message' name="message" required></textarea>
                            </li>
                            <li>
                                <input type="submit" className="flat-button" value="Send Message" />
                            </li>
                        </ul>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact