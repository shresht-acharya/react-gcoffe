import React from "react";
import Couch from "../assets/contact.jpg";
import "../styles/Contact.css";

function Contact() {
  return (
    <div className="contact">
      <div
        className="leftSide"
        style={{ backgroundImage: `url(${Couch})` }}
      ></div>
      <div className="rightSide">
        <div className="imagee"></div>
        <div className="abc">
        <h1> Contact Us</h1>

        <form id="contact-form" method="POST">
          <label htmlFor="name">Name</label>
          <input name="name" placeholder="Enter your Name..." type="text" />
          <label htmlFor="email">Email</label>
          <input name="email" placeholder="Enter your Email Id..." type="email" />
          <label htmlFor="message">Message</label>
          <textarea
            rows="6"
            placeholder="Enter message / feedback..."
            name="message"
            required
          ></textarea>
          <button type="submit"> Send Message</button>
        </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;