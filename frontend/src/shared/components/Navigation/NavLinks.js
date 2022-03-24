import React from "react";
import { NavLink } from "react-router-dom";

import "./NavLinks.css";

const NavLinks = (props) => {
  return (
    <ul className="nav-links">
      <li>
        <NavLink to="/" exact>
          ALL QUIZZES
        </NavLink>
      </li>
      <li>
        <NavLink to="/quizzes/new">ADD QUIZ</NavLink>
      </li>
      <li>
        <NavLink to="/auth">LOGIN</NavLink>
      </li>
    </ul>
  );
};

export default NavLinks;
