import React, { Component } from 'react'
import ProjectList from '../projects/projectList'
import Notifications from './notifications'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import { Redirect } from 'react-router-dom'

class Dashboard extends Component {
    render() {
        const { projects, auth, notifications, profile } = this.props;

        if(!auth.uid) return <Redirect to='/signin'/>

        return (
            <div className="dashboard container">
                <div className="row">
                    <div className="col s12 m6">
                        <ProjectList projects = { projects } profile = { profile }/>
                    </div>
                    <div className="col s12 m5 offset-m1">
                        <Notifications notifications={notifications}/>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        projects: state.firestore.ordered.projects,
        auth: state.firebase.auth,
        profile: state.firebase.profile,
        notifications: state.firestore.ordered.notifications
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        { collection: "projects", orderBy: ['timestamp', 'desc'] },
        { collection: "notifications", limit: 3, orderBy: ['time', 'desc'] }
    ])
)(Dashboard)
