import React from 'react';
import { render } from '@testing-library/react';

import BookView from "../BookView";

test("renders post data", () => {
  const mockBook = { 
    id: 1,
    title: "Mock title",
    author: "Mock author",
    category: "Mock category",
    publicationDate: "2020-02-20"
  };

  const { getByText } = render(<BookView book={mockBook} />);
  const author = getByText(/Mock author/);
  const category = getByText(/Mock category/);
  const publicationDate = getByText("20/02/2020");

  expect(author).toBeInTheDocument();
  expect(category).toBeInTheDocument();
  expect(publicationDate).toBeInTheDocument();
  expect(document.querySelector("img").getAttribute("src")).toBe("no_cover_thumb.gif");
});