import React from 'react';
import { NavLink } from 'react-router-dom';

const link = {
  width: '50px',
  textAligh: 'center',
  display: 'inline-block',
  padding: '12px',
  background: 'blue',
  textDecoration: 'none',
  color: 'white'
}

const navStyle = {
  textAligh: 'center',
  display: 'inline',
  backgroundColor: 'blue',
  position: 'fixed',
  top: '0',
  left: '0',
  width: '100%'
}

const Navbar = () =>
  <div style={navStyle}>
    <NavLink
      to="/"
      /* set exact so it knows to only set activeStyle when route is deeply equal to link */
      exact
      /* add styling to Navlink */
      style={link}
      /* add prop for activeStyle */
      activeStyle={{
        background: 'darkblue'
      }}
    >Home</NavLink>
    <NavLink

      to="/about"
      exact
      style={link}
      activeStyle={{
        background: 'darkblue'
      }}
    >About</NavLink>
    <NavLink
      to="/login"
      exact
      style={link}
      activeStyle={{
        background: 'darkblue'
      }}
    >Login</NavLink>
  </div>;

export default Navbar
