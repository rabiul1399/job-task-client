import React from 'react';
import {Link} from "react-router-dom";

const Navbar = () => {
    return (
        <div>
            <div class="navbar bg-neutral text-neutral-content">
  <div class="navbar-start">
    <div class="dropdown ">
      <label tabindex="0" class="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabindex="0" class="menu bg-neutral text-neutral-content menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
      <li><Link to="/task">MY-Tasks</Link></li>
          <li><Link to="/todo">To-Do</Link></li>
          <li><Link to="/calendar">Calendar</Link></li>
      </ul>
    </div>
    <Link to='/' class="btn btn-ghost normal-case text-xl">Daily Task</Link>
  </div>

  <div class="navbar-end">
  <ul class="menu menu-horizontal p-0 p-2">
          <li><Link to="/task">MY-Tasks</Link></li>
          <li><Link to="/todo">To-Do</Link></li>
          <li><Link to="/calendar">Calendar</Link></li>
        </ul>
    <a class="btn">Task</a>
  </div>
</div>
        </div>
    );
};

export default Navbar;