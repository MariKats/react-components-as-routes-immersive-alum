import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Login from './Login'
import Navbar from './Navbar'

var divStyle = {
  marginTop: '50px',
};

const About = () => {
  return (
    <div>
      <h1>This is my about component!</h1>
    </div>
  );
};

ReactDOM.render((
  <Router>
    <div style={divStyle}>
      <Navbar />
      <Route exact path="/" render={()=> <h1>Home!</h1>} />
      <Route exact path="/about" render={About} />
      <Route exact path="/login" component={Login} />
    </div>
  </Router>),
  document.getElementById('root')
);
