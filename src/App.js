import React, { Component } from 'react';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from "./components/Header";
import BookSearch from "./components/BookSearch";

class App extends Component {
  constructor(props) {
    super();

  }
  render() {
    return (
      <div className="container">
        <Header
          title="Book Store App"
        />
        <BookSearch />
      </div>
    );
  }
}

export default App;