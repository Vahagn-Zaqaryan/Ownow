import React from 'react'
import { Link } from 'react-router-dom'
import SignedInLinks from './signedInLinks'
import SignedOutLinks from './signedOutLinks'
import { connect } from 'react-redux'
import Logo from './favicon.png'

const Navbar = (props) => {
    const { auth, profile } = props;
    let Links = auth.uid ? <SignedInLinks profile={profile}/> : <SignedOutLinks />;
  return (
    <nav className="nav-wrapper white z-depth-1">
      <div className="container">
        <Link to='/' className="brand-logo "><div><img src={Logo} height="64" alt="Logo"/></div></Link>
        { Links }
      </div>
    </nav>
  )
}

const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth,
        profile: state.firebase.profile
    }
}

export default connect(mapStateToProps)(Navbar)
