import React, { Component } from 'react';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from './components/Header';
import BookSearch from './components/BookSearch';
import BookSearchWeb from './components/BookSearchWeb';

class App extends Component {
  constructor(props) {
    super();
    this.state = {
      menu: ""
    };
    this.handleMenu = this.handleMenu.bind(this);
  }
  handleMenu = (menu) => {
    this.setState({ menu })
  }
  render() {
    return (
      <div className="container">
        <Header
          title="Book Store App"
          onSelect={this.handleMenu}
        />
        { this.state.menu === 'WebSearch' && (<
          BookSearchWeb />
        )}
        { this.state.menu === 'StoreSearch' && (<
          BookSearch />
        )}
      </div>
    );
  }
}

export default App;