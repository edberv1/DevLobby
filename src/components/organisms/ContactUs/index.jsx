import React from 'react';
import emailjs from 'emailjs-com';
import './ContactUs.scss';

function ContactForm() {
  const handleSubmit = (e) => {
    e.preventDefault();

    const SERVICE_ID = 'service_ph67bx9';
    const TEMPLATE_ID = 'template_bp09zlx';
    const USER_ID = 'ZJ2a7wcxqpmFf1fEe';

    const formData = {
      first_name: e.target.first_name.value,
      last_name: e.target.last_name.value,
      email: e.target.email.value,
      phone: e.target.phone.value,
      message: e.target.message.value
    };

    const templateParams = {
      to_name: 'Nexus Team',
      from_name: formData.first_name + ' ' + formData.last_name, 
      user_email: formData.email,
      user_phone: formData.phone,
      message: formData.message
    };

    emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, USER_ID)
      .then((result) => {
        console.log('Email sent successfully:', result.text);
      }, (error) => {
        console.error('Email sending failed:', error);
      });

    e.target.reset();
  };

  return (
    <div className="contact-form-container">
      <div className="contact-form-card">
        <h2 className="contact-form-title">Get in Touch</h2>
        <p className="contact-form-subtitle">You can reach us anytime</p>
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="contact-form-row">
            <input type="text" name="first_name" placeholder="First name" className="contact-form-input" />
            <input type="text" name="last_name" placeholder="Last name" className="contact-form-input" />
          </div>
          <input type="email" name="email" placeholder="Your email" className="contact-form-input" />
          <input type="tel" name="phone" placeholder="Number +383 49 999 999" className="contact-form-input" />
          <textarea name="message" rows="4" placeholder="Tell us what can we help you..." className="contact-form-textarea"></textarea>
          <button type="submit" className="contact-form-submit">Submit</button>
        </form>
        <p className="contact-form-disclaimer">By contacting us, you agree to our Terms of service and Privacy Policy</p>
      </div>
    </div>
  );
}

export default ContactForm;
