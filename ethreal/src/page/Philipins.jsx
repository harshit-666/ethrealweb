import React, { useState, useEffect } from 'react';
import './Home.css';
import SliderOffer from './SliderOffer';

const Philipins = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [direction, setDirection] = useState('next');

  // CEO slides data
  const ceoSlides = [
    {
      title: "(Chief Executive Officer)",
      description: "As CEO of our global BPO company, I am passionate about driving innovation and operational excellence. Our commitment to delivering efficient, tailored solutions enables businesses to thrive in a competitive global market. With a focus on continuous improvement and client satisfaction, we aim to exceed expectations, set new industry standards, and shape the future of outsourcing.",
      image: './ceo.avif',
      name: "(Mr. Piyush Kumar Singh)",
      buttons: [
        { text: "About-Us", type: "primary" },
        { text: "Hiring", type: "secondary" }
      ]
    },
    {
      title: "(Managing Director)",
      description: "To revolutionize the BPO industry through innovative solutions and exceptional service delivery. We envision a future where businesses can focus on their core competencies while we handle their operational challenges with world-class expertise.",
      image: './MD.avif',
      name: "(Mr. Daya Shankar Singh) ",
      buttons: [
        { text: "Our Mission", type: "primary" },
        { text: "Core Values", type: "secondary" }
      ]
    },
    {
      title: "(Director)",
      description: "As Director of our global BPO enterprise, I am dedicated to driving innovation and operational excellence. By guiding our talented team and leveraging cutting-edge technology, we deliver exceptional service, efficiency, and client satisfaction. Focused on sustainable growth, strategic partnerships, and ethical practices, we create lasting value and positive change on a global scale.",
      image: './Director.avif',
      name: "(Mrs. Sakshi Singh) ",
      buttons: [
        { text: "Meet The Team", type: "primary" },
        { text: "Careers", type: "secondary" }
      ]
    }
  ];

  // Auto-rotate slides
  useEffect(() => {
    const interval = setInterval(() => {
      setDirection('next');
      setActiveSlide((prev) => (prev + 1) % ceoSlides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const goToSlide = (index) => {
    setDirection(index > activeSlide ? 'next' : 'prev');
    setActiveSlide(index);
  };

  return (
    <div className="home-page">
      <div className='totalblur'>
      <img src={'./pngwing.com.png'} alt="" className='img' />
      </div>

      {/* Background video */}
      <video autoPlay loop muted className="video-background">
        <source src="pinterest_video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="video-overlay"></div>
      {/* CEO Slider Section */}

<SliderOffer/>

      <section className="ceo-slider">
        <div className="slider-container">
          {ceoSlides.map((slide, index) => (
            <div
              key={index}
              className={`slide ${
                index === activeSlide 
                  ? 'active' 
                  : index === (activeSlide - 1 + ceoSlides.length) % ceoSlides.length
                  ? 'prev'
                  : ''
              }`}
            >
              <div className="slide-content">
                <h1 className="slide-title">{slide.title}</h1>
                <p className="slide-description">{slide.description}</p>
                <div className="slide-buttons">
                  {slide.buttons.map((button, btnIndex) => (
                    <button
                      key={btnIndex}
                      className={`btn-${button.type}`}
                    >
                      {button.text}
                    </button>
                  ))}
                </div>
              </div>
              <div className="slide-image">
                <img src={slide.image} alt="CEO" />
                <h2 className="slide-name">{slide.name}</h2>
              </div>
            </div>
          ))}
        </div>
        <div className="slider-dots">
          {ceoSlides.map((_, index) => (
            <button
              key={index}
              className={`dot ${index === activeSlide ? 'active' : ''}`}
              onClick={() => goToSlide(index)}
            />
          ))}
        </div>
      </section>
       
       {/* Rest of your component remains the same */}
       <div className='box-vp'>
       <img src={'./vice president.avif'} alt="" className='img' />
       <h1 className='vp-h12'>Mohd. Numan (Director)</h1>
       <p>
       As the Vice President of Ethereal Assurance Pvt. Ltd., I provide strategic leadership aimed at accelerating growth, streamlining operations, and enhancing our global footprint in the BPO industry. With a clear focus on innovation, client-centric solutions, and operational excellence, I lead cross-functional teams to deliver measurable business outcomes while navigating complex international markets with agility and precision. My commitment to ethical leadership and long-term vision fosters a culture of innovation, accountability, and continuous improvement. By aligning organizational goals with market demands, I work to build sustainable value, strengthen client relationships, and establish Ethereal Assurance as a trusted leader in the industry.</p>
       </div>

      {/* Features Section */}
      <section className="features">
        <h2 className="section-title">Meet Our Star Members</h2>
        <p className="section-subtitle">Our team captains lead the way — and we stand proud behind them</p>

        <div className="features-grid">
          <FeatureCard
            icon='./general manager.avif'
            title="Mr. Shreesh Tripathi (General Manager)"
            description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod reiciendis debitis rem omnis molestias ratione dolor? Laborum dolore a repudiandae quam, corrupti natus animi accusamus exercitationem in pariatur soluta ex."
          />
          <FeatureCard
            icon='./oprational manager 2.jpg'
            title="Mr. Shubham Sharma (Operational Managers)"
            description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod reiciendis debitis rem omnis molestias ratione dolor? Laborum dolore a repudiandae quam, corrupti natus animi accusamus exercitationem in pariatur soluta ex."
          />
          <FeatureCard
            icon='./operational manager.jpg'
            title="Mohd. Faisal (Operational Managers)"
            description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod reiciendis debitis rem omnis molestias ratione dolor? Laborum dolore a repudiandae quam, corrupti natus animi accusamus exercitationem in pariatur soluta ex."
          />
        </div>
      </section>

      <div className='box-vp2'>
       <img src={'./it head.avif'} alt="" className='img' />
       <h1 className='vp-h1'>Mr. Narendra Sharma (IT Head) </h1>
       <p>As the IT Head of Ethereal Assurance Pvt. Ltd., I spearhead the company’s technological vision and strategic planning to drive innovation, efficiency, and digital transformation across all departments. My role encompasses leading a highly skilled team of IT professionals, overseeing the design and implementation of robust IT infrastructures, and integrating cutting-edge technologies that enhance cybersecurity, data management, and operational workflows. By aligning technology with business goals, I ensure scalability, reliability, and compliance, while continuously optimizing systems to meet the dynamic demands of our clients and the industry. With a strong focus on future-ready solutions, I am committed to enabling sustainable growth and delivering seamless digital experiences that add value to both our internal processes and customer relationships.</p>
       </div>




      {/* Testimonials */}
      <section className="testimonials">
        <h2 className="section-title2">Team Leaders</h2>

        <div className="testimonials-grid">
          <TestimonialCard
            icon='./sudheer kumar.avif'
            author="Sudheer Kumar"
            role="Team Leader"
          />
          <TestimonialCard
            icon='./Shahwat bishnohi.avif'
            author="Shashwat Bishnohi"
            role="Team Leader"
          />
          <TestimonialCard 
            icon='./namit singh.avif'
            author="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Namit Singh"
            role="Team Leader"
          />
          <TestimonialCard
            icon='./vineet kumar singh.avif'
            author="Vineet Kumar Singh"
            role="Team Leader"
          />
          <TestimonialCard
            icon='./shivansh tripathi.avif'
            author="Shivansh Tripathi"
            role="Team Leader"
          />
          <TestimonialCard
            icon='./yashaf jamal.avif'
            author="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Yashaf Jamal"
            role="Team Leader"
          />
        </div>
      </section>

      <section className="testimonials2">
        <h2 className="section-title3">Company Members</h2>

        <div className="testimonials-grid">
          <TestimonialCard2
            icon='./arbiya husain.avif'
            author="Arbiya Husain"
            role="Hiring Recruiter"
          />
          <TestimonialCard2
            icon='./shubham singh rajput.avif'
            author="Shubham  Rajput"
            role="&nbsp;&nbsp;&nbsp;&nbsp;Team Leader"
          />
          <TestimonialCard2
            icon='./mahi chauhan.avif'
            author="Mahi Chauhan"
            role="&nbsp;&nbsp;&nbsp;Team Leader"
          />
          <TestimonialCard2
            icon='./sonali kashyap.avif'
            author="Sonali Kashyap"
            role="&nbsp;&nbsp;&nbsp;Team Leader"
          />
          <TestimonialCard2
            icon='./damini singh.avif'
            author="Damini Singh"
            role="&nbsp;&nbsp;&nbsp;Team Leader"
          />
          <TestimonialCard2
            icon='./arisha.avif'
            author="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Arisha"
            role="&nbsp;&nbsp;Team Leader"
          />
        </div>
      </section>

      {/* Call to Action */}
      <section className="cta">
        <h2>Our Mission</h2>
        <p>At Ethereal Assurance Pvt. Ltd., our mission is to revolutionize global customer engagement by delivering world-class BPO solutions tailored to the evolving needs of businesses.
We act as a trusted bridge between companies and their customers, employing cutting-edge technologies and innovative service strategies to foster deep customer satisfaction and long-term brand loyalty.
With a strong foundation in excellence, transparency, and integrity, our dedicated and highly trained workforce ensures every interaction reflects reliability, efficiency, and quality.
Our goal is to set new benchmarks in the BPO industry by being the most dependable and value-driven partner for organizations worldwide — helping them scale, grow, and thrive in a competitive marketplace.

</p>
      </section>
      
    </div>
  );
};

// Reusable Components (remain the same)
const FeatureCard = ({ icon, title, description }) => {
  return (
    <div className="feature-card">
      <div className="feature-icon">{<img src={icon} alt={title} className="icon-image" />}</div>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

const TestimonialCard = ({ author, role, icon }) => {
  return (
    <div className="testimonial-card">
      <div className="img-wrapper">
        <img src={icon} alt={author} />
      </div>
      <div className="author-info">
        <h4>{author}</h4>
        <p>{role}</p>
      </div>
    </div>
  );
};

const TestimonialCard2 = ({ author, role, icon }) => {
  return (
    <div className="testimonial-card2">
      <div className="img-wrapper2">
        <img src={icon} alt={author} />
      </div>
      <div className="author-info2">
        <h4>{author}</h4>
        <p>{role}</p>
      </div>
    </div>
  );
};

export default Philipins