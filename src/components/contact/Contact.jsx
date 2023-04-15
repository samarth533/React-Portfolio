import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'
import {BsWhatsapp} from 'react-icons/bs'
import { useRef } from 'react';
import emailjs from 'emailjs-com'

const Contact = () => {
  const form = useRef(); 

  const sendEmail = (e) => {
    e.preventDefault();

    e.target.reset();

    emailjs.sendForm('service_sagonjf', 'template_ktuzm0u', form.current, 'tdLqb1XrjKTc1D-Tl')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact_container">
        <div className="contact_options">
            <article className="contact_option">
              <MdOutlineEmail className="contact_option-icon"/>
              <h4>E-mail</h4>
              <h5>samarth533@gmail.com</h5>
              <a href="mailto:samarth533@gmail.com" target='_blank'>Send a Message</a>
            </article>
            <article className="contact_option">
              <RiMessengerLine className="contact_option-icon"/>
              <h4>Messenger</h4>
              <h5>samarth533</h5>
              <a href="https://m.me/samarthnarain.sharma" target='_blank'>Send a Message</a>
            </article>
            <article className="contact_option">
              <BsWhatsapp className="contact_option-icon"/>
              <h4>Whatsapp</h4>
              <h5>+917405376643</h5>
              <a href="https://wa.me/+917405376643" target='_blank'>Send a Message</a>
            </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="email" name='email' placeholder='Your email' required />
          <textarea type="input" name='message' rows='7' placeholder='Your Message' required  />
          <button type='submit' className='btn btn-primary' >Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact