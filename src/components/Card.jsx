import { useDispatch, useSelector } from 'react-redux';
import { setFavorite } from '../slices/dataSlice';

export default function Card({ cover, title, synopsis, genre, author, isFavorite }) {
  const dispatch = useDispatch();
  const favorite = useSelector((state) => state.data.favorite);

  const handleFavorite = () => {
    let favoriteBooks = [...favorite];
    const index = favoriteBooks.findIndex(({ book }) => book.title === title);
    if (index === -1) {
      favoriteBooks.unshift({ book: { cover, title, synopsis, genre, author } });
    } else {
      favoriteBooks.splice(index, 1);
    }
    dispatch(setFavorite(favoriteBooks));
  };

  return (
    <div
      className={`${isFavorite ? 'w-48 flex-none hover:w-96' : 'w-96'} group flex h-72 cursor-pointer flex-col items-center rounded-lg border border-gray-200 bg-white shadow transition-all duration-300 ease-in hover:bg-gray-100 md:max-w-xl md:flex-row`}
      onClick={handleFavorite}
    >
      <img
        className={`${isFavorite ? 'w-48 group-hover:w-1/2' : 'w-1/2'} h-full rounded-lg object-cover shadow-2xl transition-all duration-500 ease-in-out hover:rounded-s-lg`}
        src={cover}
        alt={title}
      />
      <div
        className={`${isFavorite ? 'hidden group-hover:flex' : ''} flex h-full w-full animate-fade-right flex-col justify-between p-2 leading-normal animate-once animate-ease-in-out`}
      >
        <h5 className='mb-2 text-xl font-bold tracking-tight text-gray-900'>{title}</h5>
        <p className='mb-3 whitespace-normal font-normal text-gray-700'>{synopsis}</p>
        <p className='mb-3 text-sm font-normal text-gray-700'>{genre}</p>
        <p className='mb-3 text-sm font-normal text-gray-700'>{author}</p>
      </div>
    </div>
  );
}
