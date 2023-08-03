import PropTypes from 'prop-types';
import React from 'react';
import { NavLink } from 'react-router-dom';

const IndividualBook = ({ book }) => (
  <div className="book-el">
    <div>
      <p>{book.category}</p>
      <h3>{book.title}</h3>
      <p>{book.author}</p>
      <div className="user-action">
        <NavLink className="user-action-link">Comments</NavLink>
        <NavLink className="user-action-link">Remove</NavLink>
        <NavLink className="user-action-link">Edit</NavLink>
      </div>
    </div>
    <div className="complete-percentage">
      <span>{book.completed}</span>
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
IndividualBook.propTypes = {
  book: PropTypes.shape().isRequired,
};
export default IndividualBook;
