import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import IndividualBook from './IndividualBook';
import { getBookItems } from '../redux/books/booksSlice';

const BookList = () => {
  const { books } = useSelector((state) => state.books);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBookItems());
  }, [dispatch]);
  return (
    <div>
      {books.map((book) => (
        <IndividualBook key={book.item_id} book={book} />
      ))}
    </div>
  );
};

export default BookList;
