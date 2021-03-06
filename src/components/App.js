import React from 'react'
import Signup from './Signup'
import Dashboard from './Dashboard'
import Login from './Login'
import ForgotPassword from "./ForgotPassword"
import {Container} from 'react-bootstrap'
import {AuthProvider} from "../contexts/AuthContext"
import PrivateRoute from "./PrivateRoute"
import Diary from "./diary"
import Analytics from "./Analytics"
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
function App() {
  return(
  <Container
    className = "d-flex align-items-center justify-content-center"
    style = {{minHeight:"100vh"}}>
    <div className="w-100" style={{maxWidth:"400px"}}>
      <Router>
        <AuthProvider>
          <Switch>
            <PrivateRoute exact path = "/" component = {Login}/>
            <Route path = "/signup" component = {Signup}/>
            <Route path = "/dashboard" component = {Dashboard}/>
            <Route path = "/login" component= {Login} />
            <Route path= "/forgot-password" component = {ForgotPassword} />
            <Route path= "/diary" component = {Diary}/>
            <Route path= "/Analytics" component = {Analytics} />
          </Switch>
        </AuthProvider>
      </Router>
    </div>
  </Container>

  )
}

export default App;
