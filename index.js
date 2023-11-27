import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import './style.css';
import Home from './views/home';
import Signup from './components/Signup'
import LoginForm from './components/LoginForm';
import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom.min';

const App = () => {
  const path = window.location.pathname;

  return (
    <BrowserRouter>
    <Router>
      <Route component={Home} exact path="/" />
      <Route component={LoginForm} path="/login" />
      <Route path="/Signup" component={Signup}></Route>
   </Router>
    </BrowserRouter>
  );
};

ReactDOM.render(<App />, document.getElementById('app'));