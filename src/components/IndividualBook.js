import PropTypes from 'prop-types';
import React from 'react';
import { CircularProgressbar } from 'react-circular-progressbar';
import '../App.css';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/booksSlice';

const IndividualBook = ({ book }) => {
  const dispatch = useDispatch();
  const progressNum = Math.floor(Math.random() * 100);

  return (
    <div className="book-el">
      <div>
        <p>{book.category}</p>
        <h3>{book.title}</h3>
        <p>{book.author}</p>
        <div className="user-action">
          <button type="button" className="user-action-link">Comments</button>
          <button type="button" onClick={() => dispatch(removeBook(book.item_id))} className="user-action-link">Remove</button>
          <button type="button" className="user-action-link">Edit</button>
        </div>
      </div>
      <div className="complete-percentage">
        <CircularProgressbar value={progressNum} className="class" />
        <span>{progressNum}</span>
        <span>%</span>
      </div>
      <div>
        <p className="current-chapter">Current Chapter</p>
        <p className="current-chapter-data">
          Chapter
          {book.currentChapter}
        </p>
        <button type="submit" className="update-btn">
          Update Progress
        </button>
      </div>
    </div>
  );
};
IndividualBook.propTypes = {
  book: PropTypes.shape().isRequired,
};
export default IndividualBook;
