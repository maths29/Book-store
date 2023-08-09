// /src/redux/categories/categoriesSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  categories: [],
  status: 'Under construction',
};

const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    checkstatus: () => 'Under construction',
  },
});

export const checkstatus = (state) => state.categories.status;
export default categoriesSlice.reducer;
