import React from 'react'
import { Link } from 'gatsby'
import logo from '../img/myslanka_192x192.png'

const Navbar = class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      active: false,
      navBarActiveClass: '',
    }
  }

  toggleHamburger = () => {
    // toggle the active boolean in the state
    this.setState(
      {
        active: !this.state.active,
      },
      // after state has been updated,
      () => {
        // set the class in state for the navbar accordingly
        this.state.active
          ? this.setState({
              navBarActiveClass: 'is-active',
            })
          : this.setState({
              navBarActiveClass: '',
            })
      }
    )
  }

  render() {
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
            <div
              className={`navbar-burger burger ${this.state.navBarActiveClass}`}
              data-target="navMenu"
              onClick={() => this.toggleHamburger()}
            >
              <span />
              <span />
              <span />
            </div>
          </div>
          <div className="navbar-end">
            <div
              id="navMenu"
              className={`navbar-menu ${this.state.navBarActiveClass}`}
            >
              <div className="navbar-start has-text-centered">
                <Link className="navbar-item" to="/blog">
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
}

export default Navbar
