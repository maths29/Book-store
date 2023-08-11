// /src/redux/books/booksSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const baseUrl = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/iLtGG7rMZzkSA4DsDESP/books';

const initialState = {
  books: [],
};

export const getBookItems = createAsyncThunk('books/getBookItems', async (thunkAPI) => {
  try {
    const response = await axios.get(baseUrl);
    return response.data;
  } catch (error) {
    thunkAPI.rejectWithValue(error);
    return error;
  }
});

export const addBookItems = createAsyncThunk('books/addBookItems', async (data, thunkAPI) => {
  const newData = {
    item_id: data.item_id,
    title: data.title,
    author: data.author,
    category: data.category,
  };

  try {
    const response = await axios.post(baseUrl, newData);
    thunkAPI.dispatch(getBookItems());
    return { data, response };
  } catch (error) {
    thunkAPI.rejectWithValue(error);
    return error;
  }
});

export const removeBookItems = createAsyncThunk('books/removeBookItems', async (id, thunkAPI) => {
  try {
    const response = await axios.delete(`${baseUrl}/${id}`, id);
    thunkAPI.dispatch(getBookItems());
    return { id, response: response.data };
  } catch (error) {
    thunkAPI.rejectWithValue(error);
    return error;
  }
});

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBook: (state, action) => {
      const newBook = action.payload;
      state.books.push(newBook);
    },
    removeBook: (state, action) => {
      const bookIdToRemove = action.payload;
      state.books = state.books.filter((book) => book.item_id !== bookIdToRemove);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getBookItems.fulfilled, (state, action) => {
      const getBook = Object.keys(action.payload).map(((index) => {
        const data = {};
        data.item_id = index;
        data.title = action.payload[index][0].title;
        data.author = action.payload[index][0].author;
        data.category = action.payload[index][0].category;
        return data;
      }));
      state.books = getBook;
    });
  },
});

export const { addBook, removeBook } = booksSlice.actions;
export default booksSlice.reducer;
