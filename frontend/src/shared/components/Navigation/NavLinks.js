import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../context/auth-context";

import "./NavLinks.css";

const NavLinks = () => {
  const auth = useContext(AuthContext);

  return (
    <ul className="nav-links">
      {auth.isLoggedIn  && (
        <li>
          <NavLink to="/" exact>
            ALL QUIZZES
          </NavLink>
        </li>
      )}
     {auth.isLoggedIn && auth.role === 'edit' && (
      <li>
        <NavLink to="/quizzes/new">ADD QUIZ</NavLink>
      </li>
     )}
      {!auth.isLoggedIn && (
        <li>
          <NavLink to="/auth">LOGIN</NavLink>
        </li>
      )}
      {auth.isLoggedIn && (
        <li>
          <button onClick={auth.logout}>LOGOUT</button>
        </li>
      )}
    </ul>
  );
};

export default NavLinks;
