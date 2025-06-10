import React from 'react'
import { NavLink } from 'react-router-dom'

function Admin_home() {  

  return (
    <div>
      <NavLink to = "/product-management">Product Management</NavLink>
      <br/>
      <NavLink to = "/customer-management">User Management</NavLink>
    </div>
  )
}

export default Admin_home