import React from 'react'
import { NavLink } from 'react-router-dom'

const SignedOutLinks = () => {
  return (
    <div>
      <ul className="right">
        <li><NavLink to='/signup' className="black-text">Signup</NavLink></li>
        <li><NavLink to='/signin' className="black-text">Login</NavLink></li>
      </ul>
    </div>
  )
}

export default SignedOutLinks
