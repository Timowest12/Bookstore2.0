import React from 'react';
import Book from './Book';

const BookList = (props) => {
  const { bookList } = props;
  return (
    <div>
      <h1>Awesome Books</h1>
      <ul>
        {bookList.map((book) => (
          <Book key={book.id} book={book} />
        ))}
      </ul>
      <form id="add-book">
        <input placeholder="Book Title" />
        <input placeholder="Book Author" />
        <button type="submit">Add Book</button>
      </form>
    </div>
  );
};

export default BookList;
