import React from 'react';
import { Link } from 'react-router-dom';



const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
         {/* this  '/'  should match home in index.js*/}
          <Link to="/">Home</Link>
        </li>

        <li>
          <Link to="/about">About</Link>
        </li>

        <li>
          <Link to="/people">People</Link>
        </li>
      </ul>
    </nav>
  )
  // <nav>navbar</nav>;
};

export default Navbar;
