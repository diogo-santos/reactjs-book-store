import React from "react";

function Header(props) {
  return (
    <nav className="navbar navbar-light bg-light mb-2">
      <span className="navbar-brand mb-0 h1">{props.title}</span>
    </nav>
  );
}

export default Header;