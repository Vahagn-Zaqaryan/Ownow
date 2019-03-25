import React from 'react'
import moment from 'moment'

const ProjectSummary = ({project, profile}) => {
    let Read;
    if(profile.username === project.userRead.username && project.userRead.read === false){
        Read = <p className="red-text">Not Read</p>
    }
  return (
    <div className="card z-depth-1 project-summary ">
      <div className="card-content grey-text text-darken-3">
        { Read }
        <span className="card-title ">{project.title}</span>
        <p>Posted by { project.firstName } { project.lastName }</p>
        <p className="grey-text">{ moment(project.timestamp.toDate()).calendar() }</p>
      </div>
    </div>
  )
}

export default ProjectSummary;
