// this is Stateless Functional Component
import React from 'react';
import { Link, NavLink } from 'react-router-dom';
// then esing ES6 arrow => don't forget () around return
const Nav = () => (
  
  <ul className='nav'>
    <li>
      <NavLink exact activeClassName='active' to='/'>
        Home
      </NavLink>
    </li>
    <li>
      <NavLink activeClassName='active' to='/battle'>
        Battle
      </NavLink>
    </li>
    <li>
      <NavLink activeClassName='active' to='/popular'>
        Popular
      </NavLink>
    </li>
  </ul>
)

export default Nav;
