import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BookList from './components/BookList';
import Category from './components/Category';

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<BookList />} />
      <Route path="/categories" element={<Category />} />
    </Routes>
  </Router>
);

export default App;
