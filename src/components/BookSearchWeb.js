import React, { Component } from 'react';

import {getBooksFromWeb, createBook} from '../services/BookService';

import Alert from './Alert';
import BookList from './BookList';

class BookSearchWeb extends Component {
  constructor(props) {
    super();
    this.state = {
      books: [],
      query: "",
      alertMessage: "",
      storedBooks: []
    };

    this.handleCloseAlert = this.handleCloseAlert.bind(this);
    this.handleStoreBook = this.handleStoreBook.bind(this);
  }
  handleCloseAlert = () => {
    this.setState({ alertMessage: "" });
  }
  fetchBooksFromWeb(query) {
    if (query) {
      getBooksFromWeb(query)
      .then((response) => response.json())
      .then((data) => {
        const books = !data.items
        ? []
        : data.items.map(book => {
            let image = book.volumeInfo.imageLinks && book.volumeInfo.imageLinks.thumbnail ? book.volumeInfo.imageLinks.thumbnail : '';

            return {
              title: book.volumeInfo.title || "",
              author: book.volumeInfo.authors ? book.volumeInfo.authors.join(", ") : "Undefined",
              category: book.volumeInfo.categories ? book.volumeInfo.categories.join(", ") : "Undefined",
              publishedDate: book.volumeInfo.publishedDate,
              image: image.replace('http://', 'https://')
            }
        });
        this.setState({ books });
      })
      .catch((e) => { 
        console.log(e);
        this.setState({
          alertMessage: "It was not possible to fetch books from web. Please, try again later"
        });
      });
    }
  }
  handleStoreBook = (book, index) => {
    console.log(book);
    if (book) {
      createBook(book)
      .then((response) => {
        if (response.ok) {
          let storedBooks = this.state.storedBooks;
          storedBooks.push(index);
          this.setState({ storedBooks });
        }
      })
      .catch((e) => { 
        console.log(e);
        this.setState({
          alertMessage: "It was not possible to store this book. Please, try again later"
        });
      });
    }
  }
  handleOnInputChange = (event) => {
    const query = event.target.value;
    this.setState({ query });
  }
  handleOnInputKeyDown = (event) => {
    if (event.key === 'Enter') {
      this.handleSearch();
    }
  }
  handleSearch = () => {
    this.fetchBooksFromWeb(this.state.query);
  }
  render() {
    return (
      <div>
        <Alert
          type="warning"
          message={this.state.alertMessage}
          onClose={this.handleCloseAlert}
        />
        <div className="d-flex justify-content-left mb-2">
          <input 
            type="text" 
            className="form-control col-9 col-sm-6 col-md-5 col-lg-4 mr-2" 
            placeholder="Search book from Web" 
            aria-label="Book search"
            aria-describedby="basic-addon2"
            onChange={this.handleOnInputChange}
            onKeyDown={this.handleOnInputKeyDown}
          />
          <div className="input-group-append col-3">
            <button
              type="button"
              className="btn btn-outline-primary"
              onClick={this.handleSearch} 
            >
              Search
            </button>
          </div>
        </div>
        <BookList
          books={this.state.books}
          onStore={this.handleStoreBook}
          storedBooks={this.state.storedBooks}
        />
      </div>
    );
  }
}

export default BookSearchWeb;