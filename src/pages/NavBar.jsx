import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <div>
       <div>
            <ul>
                <li><Link to="/home">Home</Link></li>
                <li><Link to="/signUp">SignUp</Link></li>
                <li><Link to="/verify">Verify</Link></li>
            </ul>
        </div>
    </div>
  )
}

export default NavBar
