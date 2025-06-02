import React, { useState, useEffect } from 'react';
import './Slideroffer.css';

const SliderOffer = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState('next');
  const [showForm, setShowForm] = useState(false);
  const [currentLocation, setCurrentLocation] = useState('');
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    cv: null,
    location: ''
  });

  const offers = [
    {
      id: 1,
      icon: "./locations img/pngegg.png",
      title: "JOB'S ",
      description: "Exciting job opportunities now open in Dubai",
      discount: "– Click now! To apply today!",
      location: "Dubai"
    },
    {
      id: 2,
      icon: "./locations img/360_F_159620240_xvx1Mu3AVahc6BlOhLJNGHkUw31VaEGN.jpg.png",
      title: "JOB'S ",
      description: "\u00A0\u00A0\u00A0\u00A0\u00A0Exciting job opportunities now open in Philippines",
      discount: "– Click now! To apply today!",
      location: "Philippines"
    },
    {
      id: 3,
      icon: "./locations img/pngegg (1).png",
      title: "JOB'S ",
      description: "Exciting job opportunities now open in Lucknow",
      discount: "– Click now! To apply today!",
      location: "Lucknow"
    },
    {
      id: 4,
      icon: "./locations img/pngegg (2).png",
      title: "JOB'S ",
      description: "Exciting job opportunities now open in Aliganj",
      discount: "– Click now! To apply today!",
      location: "Aliganj"
    },
    {
      id: 5,
      icon: "./locations img/pngtree-abstract-delhi-skyline-with-color-landmarks-png-image_4863980.png",
      title: "JOB'S ",
      description: "Exciting job opportunities now open in Delhi",
      discount: "– Click now! To apply today!",
      location: "Delhi"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setDirection('next');
      setCurrentSlide((prev) => (prev + 1) % offers.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const handleSlideClick = (location) => {
    setCurrentLocation(location);
    setShowForm(true);
    setFormData(prev => ({
      ...prev,
      location: location
    }));
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFileChange = (e) => {
    setFormData(prev => ({
      ...prev,
      cv: e.target.files[0]
    }));
  };

 const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const formPayload = new FormData();
    formPayload.append('fullName', formData.fullName);
    formPayload.append('phone', formData.phone);
    formPayload.append('email', formData.email);
    formPayload.append('location', currentLocation);
    formPayload.append('resume', formData.cv); // ⬅️ Multer backend expects 'resume'

    const response = await fetch('http://localhost:5000/submit-Application-branches', {
      method: 'POST',
      body: formPayload,
    });

    const result = await response.json();

    if (result.success) {
      alert('Application submitted successfully!');
    } else {
      alert('Failed to submit application.');
    }

  } catch (error) {
    console.error('❌ Submission error:', error);
    alert('An error occurred while submitting the form.');
  }

  setShowForm(false);
  setFormData({
    fullName: '',
    phone: '',
    email: '',
    cv: null,
    location: ''
  });
};


  const closeForm = () => {
    setShowForm(false);
  };

  return (
    <div className="offers-slider9">
      <div className="slider-container9">
        {offers.map((offer, index) => (
          <div 
            className="slide9" 
            key={offer.id}
            style={{ 
              transform: `translateX(-${currentSlide * 100}%)`,
            }}
            onClick={() => handleSlideClick(offer.location)}
          >
            <div className="offer-card9">
              <img src={offer.icon} alt={offer.title} className="offer-img2" />
              <h3 className="offer-title9">{offer.title}</h3>
              <p className="offer-description9">{offer.description}</p>
              <span className="offer-discount9">{offer.discount}</span>
            </div>
          </div>
        ))}
      </div>

      {showForm && (
        <div className="form-popup-overlay">
          <div className="form-popup">
            <button className="close-btn" onClick={closeForm}>×</button>
            <h2>Job Application Form - {currentLocation}</h2>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label>Full Name:</label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-group">
                <label>Phone Number:</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-group">
                <label>Email:</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-group">
                <label>Upload CV/Resume:</label>
                <input
                  type="file"
                  accept=".pdf,.doc,.docx"
                  onChange={handleFileChange}
                  required
                />
              </div>
              <input type="hidden" name="location" value={currentLocation} />
              <button type="submit" className="submit-btn">Submit Application</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default SliderOffer;