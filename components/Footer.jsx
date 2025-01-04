import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-4">
      <div className="container mx-auto px-4">
        <nav className="flex justify-around">
          <Link to="/doctors" className="hover:text-gray-300">Doctors</Link>
          <Link to="/appointments" className="hover:text-gray-300">Appointments</Link>
          <Link to="/donations" className="hover:text-gray-300">Donations</Link>
          <Link to="/profile" className="hover:text-gray-300">Profile</Link>
        </nav>
      </div>
    </footer>
  );
}

export default Footer;

