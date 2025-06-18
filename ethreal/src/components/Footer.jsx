import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { GrInstagram } from "react-icons/gr";
import { RiFacebookBoxFill } from "react-icons/ri";
import { FaSquareWhatsapp } from "react-icons/fa6";
import './Footer.css';

const Footer = () => {
  useEffect(() => {
    AOS.init({
      duration: 200,
      easing: 'ease-in-out',
      once: true,
    });
  }, []);

  return (
    <div className='footer-container'>
      <footer className='footer-grid'>
        {/* Office locations data could be mapped from an array for cleaner code */}
        <div className='address-box' data-aos="fade-up" data-aos-delay="100">
          <h1 className='footer-heading'>HEAD OFFICE:</h1>
          <Link to="https://maps.app.goo.gl/qtYXpt9kVQuXt87x7" className='footer-link'>
            INFRONT OF SKD HOSPITAL,B-4, <br />
            Sector B, Bargawan, LDA Colony, <br />
            Lucknow, Uttar Pradesh 226012
          </Link>
          <p className='footer-text'>+91-907-693-9816</p>
          <p className='footer-text'>+91-522-357-1703</p>
        </div>

        <div className='address-box' data-aos="fade-up" data-aos-delay="200">
          <h1 className='footer-heading'>BRANCH OFFICE (KNP):</h1>
          <Link to="https://maps.app.goo.gl/yxtkcmqVcdeKDPi48" className='footer-link'>
           Noronha Crossing, Mega Mall, 63/2C, The Mall Rd, Canal Patri, Kanpur, Uttar Pradesh 208001

          </Link>
          <p className='footer-text'>+91-907-693-9816</p>
          <p className='footer-text'>+91-522-357-1703</p>
        </div>

        <div className='address-box' data-aos="fade-up" data-aos-delay="300">
          <h1 className='footer-heading'>BRANCH OFFICE (AGJ):</h1>
          <Link to="https://maps.app.goo.gl/i29tEA8xp51LNdnt6" className='footer-link'>
            RV Planet Private Limited, HIG-137, near Modern School Sai Mandir, Sector E, Aliganj, Lucknow, Uttar Pradesh 226024
          </Link>
          <p className='footer-text'>+91-907-693-9816</p>
          <p className='footer-text'>+91-522-357-1703</p>
        </div>

        <div className='address-box' data-aos="fade-up" data-aos-delay="400">
          <h1 className='footer-heading'>BRANCH OFFICE (DELHI):</h1>
          <Link to="https://goo.gl/maps/example" className='footer-link'>
            INFRONT OF SKD HOSPITAL,B-4, <br />
            Sector B, Bargawan, LDA Colony, <br />
            Lucknow, Uttar Pradesh 226012
          </Link>
          <p className='footer-text'>+91-907-693-9816</p>
          <p className='footer-text'>+91-522-357-1703</p>
        </div>

        <div className='address-box' data-aos="fade-up" data-aos-delay="500">
          <h1 className='footer-heading'>BRANCH OFFICE (DUBAI):</h1>
          <Link to="https://goo.gl/maps/example" className='footer-link'>
            INFRONT OF SKD HOSPITAL,B-4, <br />
            Sector B, Bargawan, LDA Colony, <br />
            Lucknow, Uttar Pradesh 226012
          </Link>
          <p className='footer-text'>+91-907-693-9816</p>
          <p className='footer-text'>+91-522-357-1703</p>
        </div>

        <div className='address-box' data-aos="fade-up" data-aos-delay="600">
          <h1 className='footer-heading'>BRANCH OFFICE (PHILIPPINES):</h1>
          <Link to="https://goo.gl/maps/example" className='footer-link'>
            INFRONT OF SKD HOSPITAL,B-4, <br />
            Sector B, Bargawan, LDA Colony, <br />
            Lucknow, Uttar Pradesh 226012
          </Link>
          <p className='footer-text'>+91-907-693-9816</p>
          <p className='footer-text'>+91-522-357-1703</p>
        </div>
        <div className='socialmediadiv'>
        <Link to="https://www.instagram.com/ethe_realassurance.pvt.ltd?igsh=MWwyYndnYjZxZHpwYg==" target="_blank"  data-aos="fade-up"  className='insta '> <GrInstagram size={40} /></Link>
        <Link to="https://www.facebook.com/p/Ethereal-Assurance-Pvt-Ltd-100064119781635/" target="_blank"  data-aos="fade-up"  className='fb'> <RiFacebookBoxFill size={40}/></Link>
        <Link to="https://api.whatsapp.com/send/?phone=9076939816&text=Hello&type=phone_number&app_absent=0"  target="_blank"  data-aos="fade-up"  className='whatsapp'> <FaSquareWhatsapp size={40}/> </Link>
        </div>

      </footer>
      <div className='footer-img-container'>
        <img src="./logo 2.png" alt="Company Logo" className='footer-img' data-aos="fade-up" />
      </div>
    </div>
  );
};

export default Footer;