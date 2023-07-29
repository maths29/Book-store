// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BookList from './components/BookList';
import BookForm from './components/BookForm';
import Navigation from './components/Navigation';

const App = () => (
  <Router>
    <div>
      <h1>My Book Library</h1>
      <Navigation />
      <Routes>
        <Route
          path="/"
          element={<BookList />}
        />
        <Route path="/add" element={<BookForm />} />
      </Routes>
    </div>
  </Router>
);

export default App;
