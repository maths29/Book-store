import React from 'react';
import { useSelector } from 'react-redux';
import IndividualBook from './IndividualBook';
import BookForm from './BookForm';
import Navigation from './Navigation';

const BookList = () => {
  const { books } = useSelector((state) => state.books);
  return (
    <div>
      <Navigation />

      {books.map((book) => (
        <IndividualBook key={book.title} book={book} />
      ))}
      <BookForm />
    </div>
  );
};

export default BookList;
