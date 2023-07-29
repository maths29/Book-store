import React from 'react';
import IndividualBook from './IndividualBook';
import BookForm from './BookForm';
import Navigation from './Navigation';

const books = [
  {
    title: "The Handmaid's Tale",
    author: 'Suzanne Collins',
    category: 'Fiction',
    completed: 81,
    currentChapter: 17,
  },
  {
    title: 'Great Expectations',
    author: 'Suzanne Collins',
    category: 'Classics',
    completed: 71,
    currentChapter: 12,
  },
];
const BookList = () => (
  <div>
    <Navigation />

    {books.map((book) => (
      <IndividualBook key={book.title} book={book} />
    ))}
    <BookForm />
  </div>
);

export default BookList;
