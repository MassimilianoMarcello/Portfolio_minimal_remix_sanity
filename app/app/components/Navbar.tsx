// app/components/Navbar.tsx
import React from 'react';
import { Link } from '@remix-run/react';

const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <div className="navbar-content">
        <Link to="/" className="logo">
          {/* Inserisci qui il tuo logo */}
          <img src="/logo.png" alt="Logo" />
          <img src="/logo.png" alt="Logo" />
        </Link>
        <div className="navbar-links">
          <Link to="/projects" className="nav-link">Projects</Link>
          <Link to="/contacts" className="nav-link">Contacts</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
