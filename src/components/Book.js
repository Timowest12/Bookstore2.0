import React from 'react';

const Book = (props) => {
  const { book } = props;
  return (
    <li>
      <span>{` ${book.title} `}</span>
      <span>{` ${book.author} `}</span>
      <button type="button">Remove book</button>
    </li>
  );
};

export default Book;
