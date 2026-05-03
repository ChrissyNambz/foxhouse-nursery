import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png"; // or .svg

function Navbar() {
  return (
    <header className="py-3">
      <nav className="container d-flex align-items-center justify-content-between">
        <div className="d-flex align-items-center gap-2">
          <img src={logo} alt="ABC Nursery logo" className="logo-image" />
          <div className="site-title">
            <h1 className="nursery-name mb-0">Foxhouse Nursery</h1>
            <p className="nursery-tagline mb-0">Play. Learn. Grow.</p>
          </div>
        </div>

        <ul className="nav gap-3">
          <li className="nav-item">
            <Link className="nav-link" to="/">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/about">
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/admissions">
              Admissions
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/curriculum">
              Curriculum
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/contact">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
