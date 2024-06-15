import { useDispatch, useSelector } from 'react-redux';
import { setFavorite } from '../slices/dataSlice';

const useHandleFavorite = () => {
  const dispatch = useDispatch();
  const favorite = useSelector((state) => state.data.favorite);

  const handleFavorite = ({ cover, title, synopsis, genre, author, isFavorite }) => {
    let favoriteBooks = [...favorite];
    const index = favoriteBooks.findIndex(({ book }) => book.title === title);

    if (index === -1) {
      favoriteBooks.unshift({
        book: { cover, title, synopsis, genre, author },
      });
      dispatch(setFavorite(favoriteBooks));
    } else {
      if (isFavorite) {
        setTimeout(() => {
          favoriteBooks.splice(index, 1);
          dispatch(setFavorite(favoriteBooks));
        }, 500);
      }
    }
  };

  return handleFavorite;
};

export default useHandleFavorite;
