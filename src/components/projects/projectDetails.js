import React from 'react'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import { Redirect } from 'react-router-dom'
import moment from 'moment'

const ProjectDetails = (props) => {
    const { project, auth } = props

    if(!auth.uid) return <Redirect to='/signin'/>

    if(project){
       var contents;
        project.content.replace(/(?:\r\n|\r|\n)/g, '<br />')
        let tokens = project.content.split(/\s/);
        let urlRegex = /(https?:\/\/[^\s]+)/g;
        contents = tokens.map((token, i) => {
            let hasSpace = i !== (tokens.length - 1);
            let maybeSpace = hasSpace ? ' ' : '';

            if (token.match(urlRegex)){
                return (
                    <a
                      key={i}
                      href={token}
                      target="_blank"
                      rel="noopener noreferrer">
                      {token}{maybeSpace}
                    </a>
                  );
            }
            else {
          return token + maybeSpace;
        }
        });
        return (
            <div className="container section project-details">
              <div className="card z-depth-0">
                <div className="card-content">
                  <span className="card-title">{ project.title }</span>
                  <p>{ contents }</p>
                </div>
                <div className="card-action  grey-text">
                  <div>Posted by <span className="blue-text lighten-5">{ project.firstName } { project.lastName }</span></div>
                  <div>{ moment(project.timestamp.toDate()).calendar() }</div>
                </div>
              </div>
            </div>
        )
    }else{
        return (
            <div className="container section project-details">
            <div className="progress blue blue lighten-4">
                  <div className="indeterminate blue"></div>
                </div>
            </div>
        )
    }

}

const mapStateToProps = (state, ownProps) => {
    const id = ownProps.match.params.id
    const projects  = state.firestore.data.projects
    const project = projects ? projects[id] : null
    return {
        project: project,
        auth: state.firebase.auth
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        {collection: 'projects'}
    ])
)(ProjectDetails);
