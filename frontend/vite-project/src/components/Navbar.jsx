import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/LEARNOVA.png'; 

const Navbar = () => {
  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm">
      <div className="container">
        <Link className="navbar-brand d-flex align-items-center fw-bold" style={{fontSize: '1.6rem'}} to="/">
          <img 
            src={logo} 
            alt="LearnOva Logo" 
            width="100" 
            height="60" 
            className="d-inline-block align-top me-2" 
          />
          <span style={{ color: '#002147' }}>LEARN</span>
          <span style={{ color: '#C5A059' }}>OVA</span>
        </Link>
        
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto align-items-center">
            <li className="nav-item">
              <Link className="nav-link fw-semibold" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link mx-lg-2 fw-semibold" to="/login">Login</Link>
            </li>
            <li className="nav-item">
              <Link className="btn text-white px-4 rounded-pill shadow-sm" style={{backgroundColor: '#C5A059'}} to="/Register">
                Sign Up
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    </>
  );
};

export default Navbar;