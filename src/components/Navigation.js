import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Navigation = () => (
  <>
    <div className="nav-container">
      <nav className="nav">
        <h1>BookStore CMS</h1>
        <ul className="nav-links">
          <li>
            <Link to="/">Book</Link>
          </li>
          <li>
            <Link to="/categories">Category</Link>
          </li>
        </ul>
      </nav>
      <div className="person-profile-container" id="profile-img" />
    </div>
    <Outlet />
  </>
);

export default Navigation;
