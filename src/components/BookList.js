import React from 'react';
import BookView from '../components/BookView';

function BookList(props) {
  return (
    <div className="mb-2">
      {props.books.map((book, i) => (
        <BookView book={book}>
          <div className="d-flex flex-row mt-2">
            {props.onView && (
              <button
                type="button"
                data-testid="view-book"
                className="btn btn-primary btn-sm mr-2"
                data-toggle="modal" data-target={`#${props.viewBookModalId}`}
                onClick={() => props.onView(book.id)}
              >
                View
              </button>
            )}
            {props.onDelete && (
              <button
                type="button"
                data-testid="delete-book"
                className="btn btn-danger btn-sm mr-2"
                onClick={() =>
                  window.confirm(`Are you sure you wish to delete ${book.title}?`)
                  && props.onDelete(book.id)
                }
              >
                Delete
              </button>
            )}
            {props.onStore && (
              <button
                type="button"
                data-testid="store-book"
                className="btn btn-primary btn-sm mr-2"
                onClick={() => props.onStore(book, i)}
              >
                Store
              </button>
            )}
            {props.onStore && props.storedBooks.includes(i) && (
              <span className="text-success">Book stored!</span>
            )}
          </div>
        </BookView>
      ))}
    </div>
  );
}

export default BookList;