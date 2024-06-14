import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchData } from '../api';

const initialState = {
  books: [],
};

export const fetchBooksData = createAsyncThunk('data/fetchBooksData', async (_, { dispatch }) => {
  const data = await fetchData();
  dispatch(setBooks(data));
});

const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    setBooks: (state, action) => {
      state.books = action.payload;
    },
  },
});

export const { setBooks } = dataSlice.actions;

export default dataSlice.reducer;
