import React from 'react';
import { Routes, Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import Navigation from './components/Navigation';
import BookList from './components/BookList';
import BookForm from './components/BookForm';
import { addBook } from './redux/books/booksSlice';
import { checkstatus } from './redux/categories/categoriesSlice';

function App() {
  const dispatch = useDispatch();
  const books = useSelector((state) => state.books.books);
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<Books books={books} onAdd={(newBook) => dispatch(addBook(newBook))} />} />
        <Route path="/categories" element={<Categories />} />
      </Routes>
    </>
  );
}

function Books({ books, onAdd }) {
  return (
    <>
      <h1>Book Page</h1>
      <BookList books={books} />
      <BookForm onAdd={onAdd} />
    </>
  );
}

function Categories() {
  const status = useSelector(checkstatus);

  return (
    <>
      <h1>Categories Page</h1>
      <p>{status}</p>
    </>
  );
}

Books.propTypes = {
  books: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
  })).isRequired,
  onAdd: PropTypes.func.isRequired,
};

export default App;

// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import BookList from './components/BookList';
// import Category from './components/Category';

// const App = () => (
//   <Router>
//     <Routes>
//       <Route path="/" element={<BookList />} />
//       <Route path="/categories" element={<Category />} />
//     </Routes>
//   </Router>
// );

// export default App;
