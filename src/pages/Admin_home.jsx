import React from 'react'
import { NavLink, Link } from 'react-router-dom'

function Admin_home() {  

  return (
    <div className="admin-home">
      <h2 className="admin-title">Admin Dashboard</h2>
      <div className="admin-links">
        <NavLink to="/product-management" className="admin-link">
          📦 Product Management
        </NavLink>
        <NavLink to="/customer-management" className="admin-link">
          👤 User Management
        </NavLink>
      </div>
      <div className="back-link">
        <Link to="/signin">← Go back</Link>
      </div>
    </div>
  )
}

export default Admin_home