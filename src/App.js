import React, { Component } from 'react'
import NavBar from './components/layout/navBar'
import { Switch, Route } from 'react-router-dom'
import Dashboard from './components/dashboard/dashboard'
import ProjectDetails from './components/projects/projectDetails'
import SignIn from './components/auth/signIn'
import SignUp from './components/auth/signUp'
import CreateProject from './components/projects/createProject'

class App extends Component {
    render() {
        return (
            <div className="App">
                <NavBar />
                <Switch>
                    <Route exact path='/'component={Dashboard} />
                    <Route path='/project/:id' component={ProjectDetails} />
                    <Route path='/signin' component={SignIn} />
                    <Route path='/signup' component={SignUp} />
                    <Route path='/create' component={CreateProject} />
                </Switch>
            </div>
        );
    }
}

export default App
