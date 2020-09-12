import React from "react";

function Header(props) {
  return (
    <nav className="navbar sticky-top navbar-expand-sm navbar-light bg-light mb-2">
      <span className="navbar-brand mb-0 h1">{props.title}</span>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav">
        <button type="button" 
          onClick={() => props.onSelect('WebSearch')} 
          className="nav-item nav-link btn btn-light mr-1"
        >
          Web
        </button>
        <button type="button"
          onClick={() => props.onSelect('StoreSearch')} 
          className="nav-item nav-link btn btn-light mr-1"
        >
          Store
        </button>
      </div>
    </div>
    </nav>
  );
}

export default Header;