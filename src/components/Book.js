import React from 'react';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/books';

const Book = (props) => {
  const dispatch = useDispatch();

  const { book } = props;
  return (
    <li className="book" key={book.item_id}>
      <div className="booktxtblock">
        <span className="category">thriller</span>
        <span className="title">{book.title}</span>
        <span>{book.author}</span>
        <span className="author">J.K. Rowling</span>
        <div className="bookbuttonswrapper">
          <button className="bookbuttons" type="button">Comments</button>
          <button className="bookbuttons" onClick={() => dispatch(removeBook(book.item_id))} type="button">Remove</button>
          <button className="bookbuttons" type="button">Edit</button>
        </div>

      </div>
      <div />
      <div className="infoside">
        <div className="progblock">
          <div className="progbar">
            <div className="circle-wrap">
              <div className="circle">
                <div className="mask full">
                  <div className="fill" />
                </div>
                <div className="mask half">
                  <div className="fill" />
                </div>
                <div className="inside-circle" />
              </div>
            </div>

          </div>
          <div className="progtext">
            <div className="progperc">100%</div>
            <div className="completed">completed</div>
          </div>
        </div>
        <div className="vertline" />
        <div className="chapterblock">
          <div className="currentchapter">current chapter</div>
          <div className="chaptertxt">chapter 17</div>
          <button className="chapterbutton" type="button">update progress</button>
        </div>
      </div>
    </li>
  );
};

export default Book;
