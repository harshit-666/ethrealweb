import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    number: '',
    email: '',
    message: '',
  });

 const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const response = await fetch('http://localhost:5000/submit-form', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    const result = await response.json();
    console.log('✅ Success:', result);
        alert("Query Raised")
  } catch (error) {
    console.error('❌ Error:', error);
  }
};

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   console.log("Form Data:", formData);
  // };

  return (
    <div className="contact-form-wrapper">
{/* Background video */}
      <video autoPlay loop muted className="video-background">
        <source src="pinterest_video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="video-overlay"></div> 


      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="input-pair">
          <div className="input-group">
            <label>First Name</label>
            <input
              type="text"
              name="firstName"
              placeholder="firstName"
              value={formData.firstName}
              onChange={handleChange}
              required
            />
          </div>
          <div className="input-group">
            <label>Last Name</label>
            <input
              type="text"
              name="lastName"
              placeholder="lastName"
              value={formData.lastName}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className="input-group">
          <label>Phone Number</label>
          <input
            type="tel"
            name="number"
            placeholder="+91 9000000000"
            value={formData.number}
            onChange={handleChange}
            required
          />
        </div>

        <div className="input-group">
          <label>Email <span className="optional">(optional)</span></label>
          <input
            type="email"
            name="email"
            placeholder="you@example.com"
            value={formData.email}
            onChange={handleChange}
          />
        </div>

        <div className="input-group">
          <label>Message</label>
          <textarea
            name="message"
            placeholder="Type your Message..."
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
        </div>

        <button type="submit" className="contact-submit">Submit</button>
      </form>
    </div>
  );
};

export default Contact;
