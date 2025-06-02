import React, { useEffect, useState } from 'react';
import './About.css';
// import Footer from '../components/Footer';


const images = [
  [ // Our Vision
    './about/dsc_3969-doqbdzgvw4ixljpz-YbNa7z928oIe4gz9.avif',
    '/about/dsc_4082-YNqJQlJaG4t5exal.avif',
    '/about/dsc_4091-AwvrgBrNW9T1M89j.avif',
    './about/dsc_4102-Aq2BgDBDZpF3jNgV.avif',
    './about/dsc_4105-AzGrgxrJ5rFGvL7k.avif'
  ],
  [ // Our Mission
    './about/dsc_4137-YBgp9vpv5wILyKVw.avif',
    './about/dsc_4132-AR0J8DJjObFywJyo.avif',
    './about/dsc_4035-AMqnQ9nBgqSeM2r8.avif',
    './about/dsc_4016-m5kvn8q1v3fzmgpq-YBgp9v4k01hlz1GB.avif',
    './about/327292373_478751934460452_8484537733418432736_n-YleMgV5XBgu701z2.avif'
  ],
  [ // Our Values
    './about/dsc_4137-YBgp9vpv5wILyKVw.avif',
    './about/dsc_4132-AR0J8DJjObFywJyo.avif',
    './about/dsc_4035-AMqnQ9nBgqSeM2r8.avif',
    './about/dsc_4016-m5kvn8q1v3fzmgpq-YBgp9v4k01hlz1GB.avif',
    './about/327292373_478751934460452_8484537733418432736_n-YleMgV5XBgu701z2.avif'
  ],
  [ // Our Team
    './about/dsc_4137-YBgp9vpv5wILyKVw.avif',
    './about/dsc_4132-AR0J8DJjObFywJyo.avif',
    './about/dsc_4035-AMqnQ9nBgqSeM2r8.avif',
    './about/dsc_4016-m5kvn8q1v3fzmgpq-YBgp9v4k01hlz1GB.avif',
    './about/327292373_478751934460452_8484537733418432736_n-YleMgV5XBgu701z2.avif'
  ]
];

const AboutPage = () => {
  const [currentIndices, setCurrentIndices] = useState([0, 0, 0, 0]);
  const [popupImage, setPopupImage] = useState(null);

  useEffect(() => {
    const intervals = images.map((sectionImages, sectionIndex) => {
      return setInterval(() => {
        setCurrentIndices(prev => {
          const newIndices = [...prev];
          newIndices[sectionIndex] = (newIndices[sectionIndex] + 1) % sectionImages.length;
          return newIndices;
        });
      }, 3000 + sectionIndex * 200); // staggered animation
    });

    return () => intervals.forEach(clearInterval);
  }, []);

  const openPopup = (img) => {
    setPopupImage(img);
    document.body.style.overflow = 'hidden';
  };

  const closePopup = () => {
    setPopupImage(null);
    document.body.style.overflow = 'auto';
  };

  const content = [
    {
      title: "Our Vision",
      text: "At Ethereal Assurance Pvt. Ltd., our mission is to revolutionize global customer engagement by delivering world-class BPO solutions tailored to the evolving needs of businesses.We act as a trusted bridge between companies and their customers, employing cutting-edge technologies and innovative service strategies to foster deep customer satisfaction and long-term brand loyalty.With a strong foundation in excellence, transparency, and integrity, our dedicated and highly trained workforce ensures every interaction reflects reliability, efficiency, and quality.Our goal is to set new benchmarks in the BPO industry by being the most dependable and value-driven partner for organizations worldwide — helping them scale, grow, and thrive in a competitive marketplace."

    },
    {
      title: "Our Mission",
      text: "At Ethereal Assurance Pvt. Ltd., our mission is to revolutionize global customer engagement by delivering world-class BPO solutions tailored to the evolving needs of businesses.We act as a trusted bridge between companies and their customers, employing cutting-edge technologies and innovative service strategies to foster deep customer satisfaction and long-term brand loyalty.With a strong foundation in excellence, transparency, and integrity, our dedicated and highly trained workforce ensures every interaction reflects reliability, efficiency, and quality.Our goal is to set new benchmarks in the BPO industry by being the most dependable and value-driven partner for organizations worldwide — helping them scale, grow, and thrive in a competitive marketplace."
    },
    {
      title: "Our Values",
      text: "At Ethereal Assurance Pvt. Ltd., our mission is to revolutionize global customer engagement by delivering world-class BPO solutions tailored to the evolving needs of businesses.We act as a trusted bridge between companies and their customers, employing cutting-edge technologies and innovative service strategies to foster deep customer satisfaction and long-term brand loyalty.With a strong foundation in excellence, transparency, and integrity, our dedicated and highly trained workforce ensures every interaction reflects reliability, efficiency, and quality.Our goal is to set new benchmarks in the BPO industry by being the most dependable and value-driven partner for organizations worldwide — helping them scale, grow, and thrive in a competitive marketplace."
    },
    {
      title: "Our Team",
      text: "At Ethereal Assurance Pvt. Ltd., our mission is to revolutionize global customer engagement by delivering world-class BPO solutions tailored to the evolving needs of businesses.We act as a trusted bridge between companies and their customers, employing cutting-edge technologies and innovative service strategies to foster deep customer satisfaction and long-term brand loyalty.With a strong foundation in excellence, transparency, and integrity, our dedicated and highly trained workforce ensures every interaction reflects reliability, efficiency, and quality.Our goal is to set new benchmarks in the BPO industry by being the most dependable and value-driven partner for organizations worldwide — helping them scale, grow, and thrive in a competitive marketplace."
    }
  ];

  return (
    <div className="about-page">



      {/* Background video */}
      <video autoPlay loop muted className="video-background">
        <source src="pinterest_video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="video-overlay"></div>


      <h1 className='moments' data-aos="fade-up">Unforgettable Glimpses of Our <br /> Cherished Past Moments</h1>
      {content.map((item, index) => (

        <div key={index} className={`about-section ${index % 2 === 0 ? 'left-image' : 'right-image'}`}>
          <div className="slider-container10" data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}>
            <div className="slider-wrapper2" style={{ transform: `translateX(-${currentIndices[index] * 100}%)` }}>
              {images[index].map((img, imgIndex) => (
                <img
                  key={imgIndex}
                  src={img}
                  alt={`Slide ${imgIndex}`}
                  className="slide-image2"
                  onClick={() => openPopup(img)}
                />
              ))}
            </div>
          </div>

          <div className="content-box" data-aos={index % 2 === 0 ? "fade-left" : "fade-right"}>
            <h2 className="section-title100">{item.title}</h2>
            <p className="section-text">{item.text}</p>
          </div>
        </div>
      ))}

      {popupImage && (
        <div className="popup-overlay" onClick={closePopup}>
          <div className="popup-content">
            <span className="close-btn" onClick={closePopup}>&times;</span>
            <img src={popupImage} alt="Popup" />
          </div>
        </div>
      )}


    </div>
  );
};

export default AboutPage;
