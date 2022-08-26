import React from 'react'
import {Link} from 'react-router-dom'

function Header() {
  return (
    <header className='header'>
        <div className="logo">
            <Link to='/'>Persona</Link>
        </div>

        <ul>
            <Link to='/login'>
                Login
            </Link>
            <Link to='/register'>
                Register
            </Link>
        </ul>
    </header>
  )
}

export default Header