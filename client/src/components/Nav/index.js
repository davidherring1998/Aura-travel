import React from "react";
import "../../styles/Nav.css";

import Auth from "../../utils/auth";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <>
      <header>
        <h1>AURA travel</h1>
      </header>
      <nav>
        <ul>
          <Link to="/login" className="buttonNav">
            Login
          </Link>
          <Link to="/" className="buttonNav">
            Home
          </Link>
          <Link className="buttonNav">Profile</Link>
          <Link to="/tools" className="buttonNav">
            Tools{" "}
          </Link>
        </ul>
      </nav>
      <footer>
        <a
          href="https://github.com/jswearingen18"
          className="fa fa-github icons"
        >
          Github
        </a>
      </footer>
    </>
  );
}

export default Nav;
