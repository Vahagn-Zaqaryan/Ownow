import React, { Component } from 'react'
import NavBar from './components/layout/navBar'
import Footer from './components/layout/footer'
import { Switch, Route } from 'react-router-dom'
import Dashboard from './components/dashboard/dashboard'
import ProjectDetails from './components/projects/projectDetails'
import SignIn from './components/auth/signIn'
import SignUp from './components/auth/signUp'
import CreateProject from './components/projects/createProject'
import License from './components/license'

class App extends Component {
    render() {
        return (
            <div className="App">
                <main>
                    <NavBar />
                    <Switch>
                        <Route exact path='/'component={Dashboard} />
                        <Route path='/project/:id' component={ProjectDetails} />
                        <Route path='/signin' component={SignIn} />
                        <Route path='/signup' component={SignUp} />
                        <Route path='/create' component={CreateProject} />
                        <Route path='/license' component={License} />
                    </Switch>
                </main>
                <Footer/>
            </div>
        );
    }
}

export default App
