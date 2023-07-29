// components/BookList.js
import React from "react";
import IndividualBook from "./IndividualBook";

const BookList = ({ books, onDelete }) => {
  return (
    <div>
      <h2>Book List</h2>
      {books.map((book) => (
        <IndividualBook key={book.id} book={book} onDelete={onDelete} />
      ))}
    </div>
  );
};

export default BookList;