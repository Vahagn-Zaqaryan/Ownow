import React from 'react'
import ProjectSummary from './projectSummary'
import { Link } from 'react-router-dom'

const ProjectList = ( { projects } ) => {
  return (
    <div className="project-list section">
    <Link to='/create' className="">
        <div className="card z-depth-1 hoverable">
            <div className="card-content grey-text text-darken-3">
                <i className="material-icons left">add</i> New Post
            </div>
        </div>
    </Link>
      {
          projects && projects.map( project => {
              return (
                  <Link to={'/project/' + project.id}  key = { project.id }>
                    <ProjectSummary project = { project }/>
                  </Link>
              )
          })
      }
    </div>
  )
}

export default ProjectList;
