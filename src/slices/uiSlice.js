import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  loading: true,
  showModal: false,
  selectedGenres: [],
  filteredBooks: [],
};

export const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setShowModal: (state, action) => {
      state.showModal = action.payload;
    },
    setSelectedGenres: (state, action) => {
      state.selectedGenres = action.payload;
    },
    setFilteredBooks: (state, action) => {
      state.filteredBooks = action.payload;
    },
  },
});

export const { setLoading, setShowModal, setSelectedGenres, setFilteredBooks } = uiSlice.actions;

export default uiSlice.reducer;
