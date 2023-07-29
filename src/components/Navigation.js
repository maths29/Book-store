import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => (
  <div className="nav-container">
    <nav className="nav">
      <h1>BookStore CMS</h1>
      <ul className="nav-links">
        <li>
          <Link to="/">Book</Link>
        </li>
        <li>
          <Link to="/category">Category</Link>
        </li>
      </ul>
    </nav>
    <div className="person-profile-container" id="profile-img" />
  </div>
);

export default Navigation;
