import React from 'react';
import IndividualBook from './IndividualBook';
import BookForm from './BookForm';

const books = [{
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
}];
const BookList = () => (

  <div>
    <h2>Book List</h2>
    {books.map((book) => (
      <IndividualBook key={book.id} book={book} />
    ))}
    <BookForm />
  </div>
);

export default BookList;
