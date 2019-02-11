import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import LoginForm from './components/LoginForm';
import Dashboard from './components/Dashboard';
import './components/styles.css';

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <div>
            <Navbar />
            <Route exact={true} path='/' component={LoginForm} />
            <Route exact={true} path='/dashboard' component={Dashboard} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
