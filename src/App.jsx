import { useEffect } from 'react';
// import image from './assets/33.jpg';
// import Card from './components/Card';
import { useSelector, useDispatch, shallowEqual } from 'react-redux';
import { fetchBooksData } from './slices/dataSlice';
import BookList from './components/BooksList';
import FavoriteBooks from './components/FavoriteBooks';

function App() {
  const dispatch = useDispatch();
  const books = useSelector((state) => state.data.books, shallowEqual);
  const favorite = useSelector((state) => state.data.favorite);

  useEffect(() => {
    dispatch(fetchBooksData());
  }, [dispatch]);

  return (
    <>
      <header className='bg-slate-50'>
        <h1 className='text-3xl font-bold'>Welcome to Jelou Book</h1>
        <p className='text-gray-500'>Your personalized book list</p>
      </header>

      <main className='mt-12'>
        <article className='flex gap-x-2'>
          <h2 className='text-2xl font-bold'>Book List</h2>
          <h2 className='text-2xl font-bold text-gray-400'>Recommendation</h2>
        </article>

        <article>
          <BookList books={books} />
        </article>

        <article>
          <FavoriteBooks favorite={favorite} />
        </article>
      </main>
    </>
  );
}

export default App;
