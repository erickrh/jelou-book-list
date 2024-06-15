import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchData } from '../lib/api';
import { setLoading } from './uiSlice';

const initialState = {
  books: [],
  favorite: [],
};

export const fetchBooksData = createAsyncThunk('data/fetchBooksData', async (_, { dispatch }) => {
  const data = await fetchData();
  dispatch(setBooks(data));
  dispatch(setLoading(false));
});

const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    setBooks: (state, action) => {
      state.books = action.payload;
    },
    setFavorite: (state, action) => {
      state.favorite = action.payload;
    },
  },
});

export const { setBooks, setFavorite } = dataSlice.actions;

export default dataSlice.reducer;
