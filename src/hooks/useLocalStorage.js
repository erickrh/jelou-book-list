import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setFavorite } from '../slices/dataSlice';

function useLocalStorage() {
  const dispatch = useDispatch();
  const favorite = useSelector((state) => state.data.favorite);

  // Get saved favorite books
  useEffect(() => {
    let books;
    const item = JSON.parse(localStorage.getItem('favorite_books'));
    if (item) books = item;
    else books = {};
    dispatch(setFavorite(Object.values(books)));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleFavorite = ({ cover, title, synopsis, genre, author, isFavorite }) => {
    let favoriteBooks = [...favorite];
    const index = favoriteBooks.findIndex(({ book }) => book.title === title);

    const updateFavorites = (updatedBooks) => {
      dispatch(setFavorite(updatedBooks));
      localStorage.setItem('favorite_books', JSON.stringify(updatedBooks));
    };

    if (index === -1) {
      favoriteBooks.unshift({
        book: { cover, title, synopsis, genre, author },
      });
      updateFavorites(favoriteBooks);
    } else {
      if (isFavorite) {
        setTimeout(() => {
          favoriteBooks.splice(index, 1);
          updateFavorites(favoriteBooks);
        }, 500);
      }
    }
  };

  return handleFavorite;
}
export { useLocalStorage };
