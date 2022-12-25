import React from 'react'
import './contact.css'
import { useRef } from 'react';
import emailjs from 'emailjs-com'

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_zmbb4ru', 'template_pv56mix', form.current, 'J0WuZ9UKMGFQ-7wcy')

      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

      e.target.reset();
  };

  return (
    <section id='contact'>
      <h5> Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <form ref={form} onSubmit={sendEmail} >
          <input type="text" name='name' placeholder='Enter Your Name' required />
          <input type="email" name='email' placeholder='Enter Your Email' required />
           <textarea name="message" rows="7" placeholder='Write a Message' required></textarea>
            <button type='submit' className='btn btn-primary text-center'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact