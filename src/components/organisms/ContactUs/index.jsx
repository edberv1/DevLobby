import React from 'react';
import './ContactUs.scss';

function ContactForm() {
  return (
    <div className="contact-form-container">
      <div className="contact-form-card">
        <h2 className="contact-form-title">Get in Touch</h2>
        <p className="contact-form-subtitle">You can reach us anytime</p>
          <form className="contact-form" action="#" method="POST">
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
