import { useDispatch, useSelector } from 'react-redux';
import { setFavorite } from '../slices/dataSlice';

export default function Card({
  cover,
  title,
  synopsis,
  genre,
  author,
  pages,
  year,
  ISBN,
  isFavorite,
}) {
  const dispatch = useDispatch();
  const favorite = useSelector((state) => state.data.favorite);

  const handleFavorite = () => {
    let favoriteBooks = [...favorite];
    const index = favoriteBooks.findIndex(({ book }) => book.title === title);
    if (index === -1) {
      favoriteBooks.unshift({
        book: { cover, title, synopsis, genre, author },
      });
    } else {
      favoriteBooks.splice(index, 1);
    }
    dispatch(setFavorite(favoriteBooks));
  };

  return (
    <div
      className={`${!isFavorite && 'flex justify-center py-3 transition-all duration-200 hover:-translate-y-6'}`}
    >
      <div
        className={`${isFavorite ? 'w-48 flex-none hover:w-96' : 'w-96 hover:h-96 hover:w-[26rem]'} group flex h-72 animate-fade-right cursor-pointer flex-col items-center rounded-lg border border-gray-200 bg-white shadow transition-all duration-200 ease-in animate-once animate-ease-in hover:bg-gray-100 md:max-w-xl md:flex-row`}
        onClick={handleFavorite}
      >
        <img
          className={`${isFavorite ? 'w-48 group-hover:w-1/2' : 'w-1/2'} h-full rounded-lg object-cover shadow-2xl transition-all duration-500 ease-in-out hover:rounded-s-lg`}
          src={cover}
          alt={title}
        />
        <div
          className={`${isFavorite && 'hidden group-hover:flex'} flex h-full w-full animate-fade-right flex-col justify-between leading-normal animate-once animate-ease-in-out`}
        >
          <h5 className='rounded-md bg-primary p-2 text-justify text-xl font-bold tracking-tight text-gray-700 shadow-md'>
            {title}
          </h5>
          <p className='whitespace-normal p-2 text-justify font-normal text-gray-700'>{synopsis}</p>
          <p className='p-2 text-sm font-normal text-gray-700'>{genre}</p>
          <p className='p-2 text-sm font-normal text-gray-700'>{author}</p>
          <p
            className={`hidden animate-fade p-2 text-xs font-normal text-gray-700 animate-duration-300 animate-once animate-ease-in ${!isFavorite && 'group-hover:flex'}`}
          >
            {pages} páginas
          </p>
          <p
            className={`hidden animate-fade p-2 text-xs font-normal text-gray-700 animate-duration-300 animate-once animate-ease-in ${!isFavorite && 'group-hover:flex'} `}
          >
            Año {year}
          </p>
          <p
            className={`hidden animate-fade p-2 text-xs font-normal text-gray-700 animate-duration-300 animate-once animate-ease-in ${!isFavorite && 'group-hover:flex'}`}
          >
            ISBN: {ISBN}
          </p>
        </div>
      </div>
    </div>
  );
}
