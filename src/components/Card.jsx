import { useState } from 'react';
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
  const [like, setLike] = useState(false);

  const handleLike = () => {
    setLike(true);

    setTimeout(() => {
      setLike(false);
    }, 1000);
  };

  const handleFavorite = () => {
    let favoriteBooks = [...favorite];
    const index = favoriteBooks.findIndex(({ book }) => book.title === title);
    if (index === -1) {
      favoriteBooks.unshift({
        book: { cover, title, synopsis, genre, author },
      });
    } else {
      if (isFavorite) {
        favoriteBooks.splice(index, 1);
      }
    }
    dispatch(setFavorite(favoriteBooks));

    handleLike();
  };

  return (
    <div
      className={`${!isFavorite && 'relative flex justify-center py-3 transition-all duration-200 hover:-translate-y-6'}`}
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
        <svg
          viewBox='0 0 24 24'
          className={`${like ? 'absolute inset-0 z-50 m-auto h-28 w-28 animate-ping fill-red-400 animate-duration-1000 animate-once animate-ease-in' : 'hidden'} `}
        >
          <path d='M14 20.408c-.492.308-.903.546-1.192.709-.153.086-.308.17-.463.252h-.002a.75.75 0 0 1-.686 0 16.709 16.709 0 0 1-.465-.252 31.147 31.147 0 0 1-4.803-3.34C3.8 15.572 1 12.331 1 8.513 1 5.052 3.829 2.5 6.736 2.5 9.03 2.5 10.881 3.726 12 5.605 13.12 3.726 14.97 2.5 17.264 2.5 20.17 2.5 23 5.052 23 8.514c0 3.818-2.801 7.06-5.389 9.262A31.146 31.146 0 0 1 14 20.408Z'></path>
        </svg>
      </div>
    </div>
  );
}
