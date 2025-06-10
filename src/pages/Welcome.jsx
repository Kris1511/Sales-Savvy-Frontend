import React from 'react'
import { NavLink } from 'react-router-dom'

function Welcome() {
  return (
    <>
        <h2>
            <NavLink to = "/signup">Sign Up</NavLink>
        </h2>
        <br/>
        <h2>
            <NavLink to = "/signin">Sign In</NavLink>
        </h2>
    </>
  )
}

export default Welcome