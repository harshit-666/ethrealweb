import React, { useState } from 'react';
import './Services.css';
// import Footer from '../components/Footer';


const Services = () => {
  const [selectedService, setSelectedService] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    contact: '',
    resume: null,
    jobTitle: ''
  });

  const services = [
    {
      title: "Customer Support Excellence",
      description: "Delivering round-the-clock customer assistance tailored to your needs, ensuring unparalleled satisfaction and retention rates.",
      image: "./services/img_7578-A0xVb4a8ZqHaX4LQ.avif"
    },
    {
      title: "Data Management Solutions",
      description: "Streamlining your data processes with precision and efficiency, safeguarding your valuable information with cutting-edge security measures.",
      image: "./services/img_7588-YX4b9ZJrJRFj9vOQ.avif"
    },
    {
      title: "Back-Office Optimization",
      description: "Enhancing operational efficiency by managing your administrative tasks seamlessly, allowing you to focus on core business objectives.",
      image: "./services/img_7662-Yyv7LXje21FBQa5K.avif"
    },
    {
      title: "Multilingual Outsourcing Expertise",
      description: "Breaking language barriers to expand your global reach, providing multilingual support to engage with diverse audiences effortlessly.",
      image: "./services/img_7631-ALpoGBNKP4t9KaLl.avif"
    },
    {
      title: "Technical Support Mastery",
      description: "Resolving complex technical issues with expertise and agility, ensuring uninterrupted operations and delighted customers.",
      image: "./services/83666715_103451367886792_3154765276910714880_n-A3Qp6zQ9V7fRELlR.avif"
    },
    {
      title: "Operational Excellence Consulting",
      description: "Guiding your organization towards peak performance through strategic insights and innovative solutions, driving sustainable growth and success.",
      image: "./services/img_7623-YNqrLOeOPzFBRqGK.avif"
    }
  ];

  const handleServiceClick = (service) => {
    setSelectedService(service);
    setFormData(prev => ({
      ...prev,
      jobTitle: service.title
    }));
  };

  const handleClosePopup = () => {
    setSelectedService(null);
    setFormData({
      name: '',
      contact: '',
      resume: null,
      jobTitle: ''
    });
  };

  const handleInputChange = (e) => {
    const { name, value, files } = e.target;

    if (name === 'resume') {
      const file = files[0];
      const allowedTypes = [
        'application/pdf',
        'application/msword',
        'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
        'image/jpeg',
        'image/png'
      ];

      if (!allowedTypes.includes(file.type)) {
        alert('Only PDF, DOC, DOCX, JPG, or PNG files are allowed.');
        return;
      }

      if (file.size > 100 * 1024 * 1024) {
        alert('File size should not exceed 100MB.');
        return;
      }

      setFormData(prev => ({
        ...prev,
        resume: file
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };

const handleSubmit = async (e) => {
  e.preventDefault();

  const submissionData = new FormData();
  submissionData.append('name', formData.name);
  submissionData.append('contact', formData.contact);
  submissionData.append('resume', formData.resume);
  submissionData.append('jobTitle', formData.jobTitle);

  try {
    const response = await fetch('http://localhost:5000/submit-Application', {
      method: 'POST',
      body: submissionData,
    });

    const result = await response.json();
    console.log('Response:', result);
    alert('Application submitted successfully!');

    setSelectedService(null);
    setFormData({
      name: '',
      contact: '',
      resume: null,
      jobTitle: ''
    });
  } catch (err) {
    console.error('Form submission error:', err);
    alert('Something went wrong. Please try again later.');
  }
};


  return (
    <div className="services-page">

      {/* Background video */}
      <video autoPlay loop muted className="video-background">
        <source src="pinterest_video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="video-overlay"></div>

      
      <div className="services-header">
        <h1 className="section-title">Our Services</h1>
        <p className="section-subtitle">
          Comprehensive BPO solutions tailored to your business needs
        </p>
      </div>

      <div className="services-grid">
        {services.map((service, index) => (
          <div
            key={index}
            className="service-card"
            onClick={() => handleServiceClick(service)}
          >
            <img
              src={service.image}
              alt={service.title}
              className="service-image"
            />
            <div className="service-content">
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          </div>
        ))}
      </div>

      {selectedService && (
        <div className="service-popup-overlay">
          <div className="service-popup">
            <div className="close-btn2" onClick={handleClosePopup}>
              &#10005;
            </div>

            <img
              src={selectedService.image}
              alt={selectedService.title}
              className="popup-image"
            />

            <div className="popup-content">
              <h2>{selectedService.title}</h2>
              <p>{selectedService.description}</p>

              <div className="hiring-section">
                <h3>Interested in this service?</h3>
                <p>Submit your details and we'll get back to you</p>

                <form onSubmit={handleSubmit}>
                  <div className="form-group">
                    <input
                      type="text"
                      name="name"
                      placeholder="Full Name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <input
                      type="tel"
                      name="contact"
                      placeholder="Contact Number"
                      value={formData.contact}
                      onChange={handleInputChange}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="resume">Upload CV/Resume:</label>
                    <input
                      type="file"
                      id="resume"
                      name="resume"
                      accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
                      onChange={handleInputChange}
                      required
                    />
                  </div>

                  <button type="submit" className="submit-btn">
                    Submit Application
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* <Footer /> */}
    </div>
  );
};

export default Services;
