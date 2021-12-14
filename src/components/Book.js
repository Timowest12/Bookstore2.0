import React from 'react';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/books';

const Book = (props) => {
  const dispatch = useDispatch();

  const { book } = props;
  return (
    <li key={book.id}>
      <span>{book.title}</span>
      <span>{book.author}</span>
      <button onClick={() => dispatch(removeBook(book.id))} type="button">Remove book</button>
    </li>
  );
};

export default Book;
