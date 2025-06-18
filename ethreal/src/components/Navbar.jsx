import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [branchesOpen, setBranchesOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
    // Close branches dropdown when mobile menu toggles
    if (mobileMenuOpen) {
      setBranchesOpen(false);
    }
  };

  const toggleBranches = () => {
    setBranchesOpen(!branchesOpen);
  };

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">

          <Link to="/"  ><img src='./logo.png' alt="Logo"  className='navbar-logo'/></Link>


        <div className={`nav-links ${mobileMenuOpen ? 'active' : ''}`}>
          <NavLink to="/" text="Home" />
          <NavLink to="/about" text="About" />

          {/* Branches Dropdown */}
          <div className="nav-dropdown">
            <button 
              className="nav-link dropdown-toggle" 
              onClick={toggleBranches}
              onMouseEnter={() => !mobileMenuOpen && setBranchesOpen(true)}
              onMouseLeave={() => !mobileMenuOpen && setBranchesOpen(false)}
            >
              Branches
              <span className="underline"></span>
            </button>

            <ul className={`dropdown-menu ${branchesOpen ? 'show' : ''}`}>
              <li><Link to="/Dubai" className="dropdown-item">Dubai</Link></li>
              <li><Link to="/Philipins" className="dropdown-item">Philipins</Link></li>
              <li><Link to="/Aliganj" className="dropdown-item">Aliganj</Link></li>
            </ul>
          </div>

          <NavLink to="/services" text="Services" />
          <NavLink to="/contact" text="Contact" />
        </div>

        <div 
          className={`hamburger ${mobileMenuOpen ? 'active' : ''}`} 
          onClick={toggleMobileMenu}
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </div>
    </nav>
  );
};

const NavLink = ({ to, text }) => {
  return (
    <Link 
      to={to} 
      className="nav-link"
      onMouseEnter={(e) => {
        e.target.style.transform = 'translateY(-3px)';
      }}
      onMouseLeave={(e) => {
        e.target.style.transform = 'translateY(0)';
      }}
    >
      {text}
      <span className="underline"></span>
    </Link>
  );
};

export default Navbar;
