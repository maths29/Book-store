// eslint-disable-next-line
import React, { useState } from "react";

const BookState = () => {
  const [books, setBooks] = useState([]);

  const handleAddBook = (newBook) => {
    setBooks([...books, newBook]);
  };

  const handleDeleteBook = (bookId) => {
    setBooks(books.filter((book) => book.id !== bookId));
  };

  return {
    books,
    handleAddBook,
    handleDeleteBook,
  };
};

export default BookState;