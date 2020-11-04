import React, { useState, useEffect } from 'react'
import Netflix_Logo from './800px-Logo_Netflix.png'
import Avatar_Logo from './366be133850498.56ba69ac36858.png'
import './Nav.css'

function Nav () {
  const [show, handleShow] = useState(false)

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 100) {
        handleShow(true)
      } else {
        handleShow(false)
      }
    })
    return () => {
      window.removeEventListener('scroll')
    }
  }, [])

  return (
    <div className={`nav ${show && "nav__black"}`}>
      <img
        className="nav__logo"
        src={Netflix_Logo}
        alt="Netflix Logo"
      />
      <img
        className="nav__avatar"
        src={Avatar_Logo}
        alt="Netflix Logo"
      />
    </div>
  )
}

export default Nav
