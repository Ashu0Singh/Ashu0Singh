import React, { useRef } from 'react';
import './contacts.css';
import { MdOutlineEmail } from 'react-icons/md';
import { BsInstagram } from 'react-icons/bs';
import { BsWhatsapp } from 'react-icons/bs';
import emailjs from 'emailjs-com';

const Contacts = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_nif6ol8', 'template_83o2jls', form.current, '3OrcJjnDY2QZ9GKAM');
  };

  return (
    <section id="contact">
      <h5>Get in Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact_options">
          <article className="contact__option">
            <MdOutlineEmail />
            <h4>Email</h4>
            <h5>shivanshsharma1507@gmail.com</h5>
            <a href="shivanshsharma1507@gmail.com" target="_blank" rel="noopener noreferrer">
              Send a Message
            </a>
          </article>
          <article className="contact__option">
            <BsInstagram />
            <h4>Instagram</h4>
            <h5>Shivansh Sharma</h5>
            <a href="https://www.instagram.com/shivanshh_sharmaa/" target="_blank" rel="noopener noreferrer">
              Send a Message
            </a>
          </article>
          <article className="contact__option">
            <BsWhatsapp />
            <h4>Whatsapp</h4>
            <h5>+91 7052899759</h5>
            <a href="https://api.whatsapp.com/send?phone=7052899759" target="_blank" rel="noopener noreferrer">
              Send a Message
            </a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder="Your Full Name" required />
          <input type="email" name="E-mail" placeholder="Your Email" required />
          <textarea name="message" rows="10" placeholder="Your Message" required></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contacts;
