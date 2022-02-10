import React from 'react'
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import LoadingPage from './pages/LoadingPage';
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage'
import LandingPage from './pages/LandingPage'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

function App() {
  return (
    <React.Fragment>
      <Router>
        <Switch>
          {/* Loading Page */}
          <Route exact path="/">
            <LoadingPage/>
          </Route>

          {/* Login Page */}
          <Route exact path="/login">
            <LoginPage/>
          </Route>

          {/* Sign Up Page */}
          <Route exact path="/sign-up">
            <SignUpPage/>
          </Route>

          {/* Landing Page */}
          <Route exact path="/home">
            <LandingPage />
          </Route>
        </Switch>
      </Router>
    </React.Fragment>
  );
}

export default App;
