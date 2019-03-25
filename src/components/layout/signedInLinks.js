import React from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { signOut } from '../../store/actions/authActions'

const SignedInLinks = (props) => {
  return (
    <div>
      <ul className="right black-text hide-on-med-and-down">
        <li><NavLink to='/create' className="black-text waves-effect waves-dark btn white z-depth-0 grey lighten-4"><i className="material-icons left">add</i>New Post</NavLink></li>
        <li><a href="/" onClick={props.signOut} className="black-text">Log Out</a></li>
        <li><NavLink to='/' className="btn btn-floating blue btn-floating pulse z-depth-0">{props.profile.initials}</NavLink></li>
      </ul>
    </div>
  )
}

const mapDispatchToProps = (dispatch) => {
    return {
        signOut: () => dispatch(signOut())
    }
}

export default connect(null, mapDispatchToProps)(SignedInLinks)
