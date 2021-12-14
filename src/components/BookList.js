import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import Book from './Book';
import { addBook } from '../redux/books/books';

const BookList = () => {
  const dispatch = useDispatch();

  const submitForm = (e) => {
    e.preventDefault();
    const title = e.target.querySelector('#title');
    const author = e.target.querySelector('#author');
    const newbook = { id: uuidv4(), title: title.value, author: author.value };
    title.value = '';
    author.value = '';
    dispatch(addBook(newbook));
  };
  const bookList = useSelector((state) => state.booksReducer);
  // console.log(bookList)

  return (
    <div>

      <h1>Awesome Books</h1>

      <ul>

        {bookList.map((book) => (

          <Book key={book.id} book={book} />
        ))}
      </ul>
      <form id="add-book-form" onSubmit={(e) => submitForm(e)}>

        <input id="title" placeholder="Title" />
        <input id="author" placeholder="Author" />
        <button type="submit">Add Book</button>
      </form>
    </div>
  );
};

export default BookList;
