
import React from "react"
import Signup from "./views/Signup"
import { AuthProvider } from "./hooks/AuthContext.js"
import {BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Login from "./views/Login"
import ForgotPassword from "./views/ForgotPassword"
import UpdateProfile from "./views/UpdateProfile"
import Game from "./views/Game"
import MyCollection from "./views/MyCollection"
import 'bootstrap/dist/css/bootstrap.min.css';
import PrivateRoute from "./components/general/PrivateRoute"


const App = () =>  {
  return (
    <div>
      <div>
        {/* <HashRouter basename="/"> */}
        <Router>
          <AuthProvider>
            <Switch>
              
              <Route path="/login" component={Login} />
              <Route path="/forgot-password" component={ForgotPassword} />
              <Route path="/game" component={Game} />
              <Route path="/my-collection" component={MyCollection} />
              <Route path="/update-profile" component={UpdateProfile} />
              <Route path="/" component={Signup} />
              <Route path="/signup" component={Signup} />
            </Switch>
          </AuthProvider>
        </Router>
      </div>
    </div>
  )
}

export default App;