import React, { useState } from 'react'
import { Link } from 'gatsby'
import logo from '../img/myslanka_192x192.png'

const Navbar = () => {
  const [active, setActive] = useState(false)
  const toggleHamburger = () => setActive(!active)
  return (
    <nav
      className="navbar is-transparent"
      role="navigation"
      aria-label="main-navigation"
    >
      <div className="container">
        <div className="navbar-brand">
          <Link to="/" className="navbar-item" title="Logo">
            <div className="media">
              <div className="media-left image is-32x32">
                <img src={logo} alt="Malovaná miska" />
              </div>
              <div className="media-content" style={{ overflow: 'initial' }}>
                <div className="content">
                  <h1
                    className="title is-size-5 is-marginless"
                    style={{ position: 'relative', top: '0.3rem' }}
                  >
                    Nalezeno v myslánce
                  </h1>
                </div>
              </div>
            </div>
          </Link>
          {/* Hamburger menu */}
          <button
            className={`navbar-burger burger ${active ? 'is-active' : ''}`}
            style={{ background: 'none', border: 'none' }}
            data-target="navMenu"
            onClick={toggleHamburger}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
        <div className="navbar-end">
          <div
            id="navMenu"
            className={`navbar-menu ${active ? 'is-active' : ''}`}
          >
            <div className="navbar-start has-text-centered">
              <Link className="navbar-item" to="/">
                Články
              </Link>
              <Link className="navbar-item" to="/about">
                O
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
