import React from 'react'
import { NavLink } from 'react-router-dom';
import '../Style/root.css';
import '../Style/layout.css';
import '../Style/component.css';

function Welcome() {
  return (
    <>
     <div className="welcome-page">
      <div className="welcome-content">
        <h1 className="brand-title">Welcome to Sales Savvy</h1>
        <p className="brand-tagline">Your trusted e-commerce dashboard platform</p>
        <div className="welcome-buttons">
          <NavLink to="/signup" className="btn btn-primary">
            <span className="cta-text">Create account</span>
          </NavLink>
          <NavLink to="/signin" className="btn btn-outline">Sign&nbsp;in</NavLink>
        </div>
      </div>
    </div>
    </>
  )
}

export default Welcome;