import React from "react";
import moment from 'moment';
import noCoverThumb from "../images/no_cover_thumb.gif";

function BookView(props) {
  return (
    <div className="d-flex flex-row">
      <div className="p-2">
        <img src={props.book.image || noCoverThumb} width="128" alt="Front cover" />
      </div>
      <div className="p-2">
        <div>Author <span className="text-muted">{props.book.author}</span></div>
        <div>Category <span className="text-muted">{props.book.category}</span></div>
        <div>Published Date 
          <span className="text-muted ml-1">
            {props.book.publishedDate && props.book.publishedDate.length === 10
              ? moment(props.book.publishedDate, "YYYY-MM-DD").format('DD/MM/YYYY')
              : props.book.publishedDate
            }
          </span>
        </div>
      </div>
    </div>
  );
}

export default BookView;