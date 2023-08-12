import React from "react";
import { NavLink } from "react-router-dom";
import "./header.scss";

import { useMatch } from "react-router-dom";

function HeaderLink({ to, children }) {
  let match = useMatch(to);
  return (
    <NavLink
      to={to}
      style={match ? { color: "#e93f3f" } : { color: "antiquewhite" }}
    >
      {children}
    </NavLink>
  );
}

function Header() {
  return (
    <div>
      <header className="header">
        <NavLink className="header-icon" to="/">
          {" "}
          MISO <span className="title-small">Presents</span>{" "}
        </NavLink>
        <div className="nav-links">
          {/* <HeaderLink to="/work">Work</HeaderLink> */}
          <br />
          <HeaderLink to="/contact">+Contact</HeaderLink>
        </div>
      </header>
    </div>
  );
}

export default Header;
