import React from 'react';
import { render } from '@testing-library/react';

import Modal from "../Modal";
import BookView from "../BookView";

test("renders post data", () => {
  const mockBook = { 
    id: 1,
    title: "Mock title",
    author: "Mock author",
    category: "Mock category",
    publicationDate: "2020-02-20",
    image: "Mock image url"
  };

  const { getByText, getByTestId } = render
    (<Modal 
      id="Mock id" 
      title="Mock title" 
      body={<BookView book={mockBook}/>} 
    />);
  const modal = getByTestId(/Mock id/i);
  const title = getByText(/Mock title/);
  const author = getByText(/Mock author/);
  const category = getByText(/Mock category/);
  const publicationDate = getByText("20/02/2020");

  expect(modal).toBeInTheDocument();
  expect(title).toBeInTheDocument();
  expect(author).toBeInTheDocument();
  expect(category).toBeInTheDocument();
  expect(publicationDate).toBeInTheDocument();
  expect(document.querySelector("img").getAttribute("src")).toBe("Mock image url");
});