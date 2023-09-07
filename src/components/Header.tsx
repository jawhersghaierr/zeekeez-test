// components/Header.tsx
import React from "react";
import Link from "next/link";

const Header: React.FC = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <a className="navbar-brand">
          <img src="/zeekeezlogo.svg" alt="Logo" width="120" />
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <a href="/" className="nav-link">
                Home
              </a>
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
