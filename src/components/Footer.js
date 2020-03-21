import React from 'react'

import github from '../img/github-icon.svg'

const Footer = class extends React.Component {
  render() {
    return (
      <footer className="footer has-background-black has-text-grey-light">
        <div className="container">
          <div className="columns">
            <div className="column has-text-centered">
              <div className="is-inline-flex media">
                <a
                  className="media-left image is-32x32"
                  href="https://github.com/lttr/nalezeno-v-myslance"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="icon has-text-white">
                    <img
                      src={github}
                      alt="Github"
                      style={{ filter: 'invert(70%)' }}
                    />
                  </span>
                </a>
                <div className="media-content">Lukas Trumm</div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    )
  }
}

export default Footer
