import { useEffect } from 'react';
import { useSelector, useDispatch, shallowEqual } from 'react-redux';
import { fetchBooksData } from './slices/dataSlice';
import BookList from './components/BooksList';
import FavoriteBooks from './components/FavoriteBooks';
import logo from './assets/logo.png';
import Footer from './components/Footer';

function App() {
  const dispatch = useDispatch();
  const books = useSelector((state) => state.data.books, shallowEqual);
  const favorite = useSelector((state) => state.data.favorite);
  const loading = useSelector((state) => state.ui.loading);

  useEffect(() => {
    dispatch(fetchBooksData());
  }, [dispatch]);

  return (
    <>
      <header className='bg-primary flex animate-fade-down flex-col items-center shadow-md animate-once animate-ease-in-out'>
        <img className='h-20 w-20 rounded-lg' src={logo} alt='logo' />
        <h1 className='text-secondary text-5xl font-medium'>Jelou</h1>
        <h2 className='text-secondary'>Book List</h2>
      </header>

      <main className='mt-12'>
        <section>
          <BookList books={books} loading={loading} />
        </section>

        <section>
          <FavoriteBooks favorite={favorite} loading={loading} />
        </section>

        <Footer />
      </main>
    </>
  );
}

export default App;
