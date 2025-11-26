import React, { useState } from "react";
import "./contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you! Your message has been submitted.");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <div className="contact-container">
      <h1>Contact Us</h1>

      <p className="intro-text">
        Have a question, feedback, or business inquiry? We’d love to hear from you!
        Fill out the form below or reach us using the contact details provided.
      </p>

      <div className="contact-content">
        {/* Left Section - Form */}
        <form className="contact-form" onSubmit={handleSubmit}>
          <label>Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            placeholder="Enter your name"
          />

          <label>Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            placeholder="Enter your email"
          />

          <label>Subject</label>
          <input
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            placeholder="Subject (optional)"
          />

          <label>Message</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            placeholder="Write your message here..."
          ></textarea>

          <button type="submit" className="send-btn">
            Send Message
          </button>
        </form>

        {/* Right Section - Contact Info */}
        <div className="contact-info">
          <h2>Get in Touch</h2>
          <p><strong>Address:</strong> APS Stationery, Main Road, Chennai, India</p>
          <p><strong>Email:</strong> support@apsstationery.com</p>
          <p><strong>Phone:</strong> +91 98765 43210</p>
          <p><strong>Business Hours:</strong><br/>Mon – Sat: 9:00 AM – 7:00 PM</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
