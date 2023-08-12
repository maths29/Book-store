import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuid } from 'uuid';
import { addBookItems } from '../redux/books/booksSlice';
import '../App.css';

const BookForm = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [category, setCategory] = useState('');

  const dispatch = useDispatch();

  const addNewBook = (e) => {
    e.preventDefault();
    const newBook = {
      item_id: uuid(),
      title,
      author,
      category,
    };
    dispatch(addBookItems(newBook));
    setTitle('');
    setAuthor('');
    setCategory('');
  };

  return (
    <div className="form">
      <h2>Add New Book</h2>
      <form>
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Book Name" />
        <select className="action-btn" value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="Action">Action</option>
          <option value="Fiction">Fiction</option>
          <option value="Non-Fiction">Non-Fiction</option>
        </select>
        <button type="submit" className="addbook-btn" onClick={addNewBook}>Add Book</button>
      </form>
    </div>
  );
};

export default BookForm;
