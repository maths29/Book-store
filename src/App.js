// App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BookList from "./components/BookList";
import BookForm from "./components/BookForm";
import Navigation from "./components/Navigation";
import BookState from "./components/BookState";

const App = () => {
  const bookState = BookState();

  return (
    <Router>
      <div>
        <h1>My Book Library</h1>
        <Navigation />
        <Routes>
          <Route
            path="/"
            element={<BookList books={bookState.books} onDelete={bookState.handleDeleteBook} />}
          />
          <Route path="/add" element={<BookForm onAdd={bookState.handleAddBook} />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;