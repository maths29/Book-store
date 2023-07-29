import PropTypes from 'prop-types';
import React from 'react';

const IndividualBook = ({ book }) => (
  <div>
    <h3>{book.title}</h3>
    <p>
      Author:
      {book.author}
    </p>
    <p>
      Genre:
      {book.category}
    </p>
    <button type="submit">Delete</button>
  </div>
);
IndividualBook.propTypes = {
  book: PropTypes.shape().isRequired,
};
export default IndividualBook;
