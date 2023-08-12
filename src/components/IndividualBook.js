import PropTypes from 'prop-types';
import React from 'react';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import '../App.css';
import { useDispatch } from 'react-redux';
import { removeBookItems } from '../redux/books/booksSlice';

const IndividualBook = ({ book }) => {
  const dispatch = useDispatch();
  const progressNum = Math.floor(Math.random() * 100);
  const nextChapter = Math.floor(Math.random() * 50);
  return (
    <main className="book-el">
      <div className="bookcms">
        <div className="bookText">
          <div className="action">
            <span className="categories">{book.category}</span>
            <span className="titles">{book.title}</span>
            <span className="authors">{book.author}</span>
          </div>
          <ul className="btn">
            <li>
              {' '}
              <button type="button" className="user-action-link">Comments</button>
              {' '}
            </li>
            <li>
              {' '}
              <button type="button" onClick={() => dispatch(removeBookItems(book.item_id))} className="user-action-link">Remove</button>
              {' '}
            </li>
            <li>
              {' '}
              <button type="button" className="user-action-link">Edit</button>
              {' '}
            </li>
          </ul>
        </div>
        <div className="prgBar">
          <CircularProgressbar value={progressNum} className="class-pic" />
          <div className="progress-text">
            <span className="percent">
              {`${progressNum}%`}
            </span>
            <span className="stat">Completed</span>
          </div>
        </div>
      </div>
      <div className="currentbook">
        <span className="current-chapter">Current Chapter</span>
        <span className="current-chapter-data">
          Chapter
          {' '}
          {nextChapter}
        </span>
        <button type="submit" className="update-btn">
          Update Progress
        </button>
      </div>
    </main>
  );
};
IndividualBook.propTypes = {
  book: PropTypes.shape().isRequired,
};
export default IndividualBook;
