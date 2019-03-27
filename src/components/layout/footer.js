import React from 'react'
import { Link } from 'react-router-dom'

const Footer = ({project, profile}) => {
  return (
      <footer className="page-footer white z-depth-1" style = {{ "padding" : 0}}>
        <div className="footer-copyright white grey-text">
          <div className="container">
              © 2019 Ownow, All rights reserved.
              <Link className="blue-text right" to='/license'>MIT License</Link>
          </div>
        </div>
      </footer>
  )
}

export default Footer;
