import React from 'react'
import { NavLink } from 'react-router-dom';
import '../Style/root.css';
import '../Style/layout.css';
import '../Style/component.css';

function Welcome() {
  return (
    <>
     <div className="welcome-page">
      <div className="welcome-card">
        <h2 className="welcome-title">Welcome to Sales Savvy</h2>
        <NavLink to="/signup" className="btn btn-primary">
          <span className="cta-text">Create account</span>
        </NavLink>
        <br /><br />
        <NavLink to="/signin" className="btn btn-accent">Sign&nbsp;in</NavLink>
      </div>
    </div>
    </>
  )
}

export default Welcome;