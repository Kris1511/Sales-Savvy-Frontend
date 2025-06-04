import React from 'react'
import { Link } from 'react-router-dom'

function Welcome() {
  return (
    <>
        <h2>
            <Link to = "/signup">Sign Up</Link>
        </h2>
        <br/>
        <h2>
            <Link to = "/signin">Sign In</Link>
        </h2>
    </>
  )
}

export default Welcome