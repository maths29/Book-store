import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Books from './components/Books';
import Category from './components/Category';

function App() {
  return (
    <>

      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<Books />} />
          <Route path="/categories" element={<Category />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
