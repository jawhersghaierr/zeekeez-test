import React, { useState } from "react";

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <Link href="/" className="navbar-brand">
          <img src="/zeekeezlogo.svg" alt="Logo" width="120" />
        </Link>
        {/* Add the mobile menu button */}
        <button
          className="navbar-toggler"
          type="button"
          onClick={toggleMobileMenu}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Add the collapse class and conditional CSS for mobile menu */}
        <div
          className={`collapse navbar-collapse ${isMobileMenuOpen && "show"}`}
        >
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <a className="nav-link">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link">XXXX</a>
            </li>
            <li className="nav-item">
              <a className="nav-link">XXXX</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
