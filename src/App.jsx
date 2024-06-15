import { useEffect } from 'react';
import { useSelector, useDispatch, shallowEqual } from 'react-redux';
import { fetchBooksData } from './slices/dataSlice';
import BookList from './components/BooksList';
import FavoriteBooks from './components/FavoriteBooks';
import logo from './assets/logo.png';
import Footer from './components/Footer';
import Modal from './components/Modal';
import { useLocalStorage } from './hooks/useLocalStorage';
import { setShowModal, setFilteredBooks, setSelectedGenres } from './slices/uiSlice';

function App() {
  useLocalStorage(); // Get favorite books

  const books = useSelector((state) => state.data.books, shallowEqual);
  const dispatch = useDispatch();
  const favorite = useSelector((state) => state.data.favorite);
  const loading = useSelector((state) => state.ui.loading);
  const showModal = useSelector((state) => state.ui.showModal);
  const selectedGenres = useSelector((state) => state.ui.selectedGenres);
  const filteredBooks = useSelector((state) => state.ui.filteredBooks, shallowEqual);
  const genres = ['Fantasía', 'Ciencia ficción', 'Zombies', 'Terror'];

  const handleCheckboxChange = (genre) => {
    const newSelectedGenres = selectedGenres.includes(genre)
      ? selectedGenres.filter((g) => g !== genre)
      : [...selectedGenres, genre];
    dispatch(setSelectedGenres(newSelectedGenres));
  };

  // Update filtered books
  useEffect(() => {
    if (books.length > 0) {
      if (selectedGenres.length === 0) {
        dispatch(setFilteredBooks(books));
      } else {
        dispatch(
          setFilteredBooks(books.filter((book) => selectedGenres.includes(book.book.genre)))
        );
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [books, selectedGenres]);

  useEffect(() => {
    dispatch(fetchBooksData());
  }, [dispatch]);

  return (
    <>
      <header className='flex animate-fade-down flex-col items-center bg-primary shadow-md animate-once animate-ease-in-out'>
        <img className='h-20 w-20 rounded-lg' src={logo} alt='logo' />
        <h1 className='text-5xl font-medium text-secondary'>Jelou</h1>
        <h2 className='text-secondary'>Book List</h2>
      </header>

      <button
        onClick={() => dispatch(setShowModal(true))}
        className='fixed bottom-1 left-1/2 z-50 flex h-8 w-32 -translate-x-1/2 transform items-center justify-center rounded bg-secondary px-4 py-2 text-primary hover:bg-gray-700'
      >
        Filtrar
      </button>

      <Modal showModal={showModal} setShowModal={setShowModal} title={'Filtrar por género'}>
        {genres.map((genre) => (
          <div key={genre}>
            <input
              type='checkbox'
              id={genre}
              value={genre}
              onChange={() => handleCheckboxChange(genre)}
              checked={selectedGenres.includes(genre)}
              className='cursor-pointer'
            />
            <label className='ml-2 cursor-pointer text-gray-800' htmlFor={genre}>
              {genre}
            </label>
          </div>
        ))}
      </Modal>

      <main className='mx-10 mt-12'>
        <section>
          <BookList books={filteredBooks} loading={loading} />
        </section>

        <section>
          <FavoriteBooks favorite={favorite} loading={loading} />
        </section>
      </main>

      <Footer />
    </>
  );
}

export default App;
