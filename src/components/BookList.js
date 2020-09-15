import React from "react";
import moment from 'moment';
import noCoverThumb from "../images/no_cover_thumb.gif";

function BookList(props) {
  return (
    <div className="mb-2">
      {props.books.map((book, i) => (
        <div className="d-flex flex-row" key={i}>
          <div className="p-2">
            <img src={book.image || noCoverThumb} width="128" alt="Front cover" />
          </div>
          <div className="p-2">
            <h6>{book.title}</h6>
            <div>Author <span className="text-muted">{book.author}</span></div>
            <div>Category <span className="text-muted">{book.category}</span></div>
            <div>Published on
              <span className="text-muted ml-1">
                {book.publishedDate && book.publishedDate.length === 10
                  ? moment(book.publishedDate, "YYYY-MM-DD").format('YYYY')
                  : book.publishedDate
                }
              </span>
            </div>
            <div className="d-flex flex-row mt-2">
            {props.onView && (
                <button
                  type="button"
                  data-testid="view-book"
                  className="btn btn-primary btn-sm mr-2"
                  data-toggle="modal" data-target={`#${props.viewBookModalId}`}
                  onClick={() => props.onView(book.id)}
                >
                  View Book
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
                  Delete Book
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
                <span className="text-success">Book stored sucessfuly!</span>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default BookList;