import { useDispatch, useSelector } from 'react-redux';
import { setFavorite } from '../slices/dataSlice';

export default function Card({ cover, title, synopsis, genre, author }) {
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
      className='flex h-72 w-96 cursor-pointer flex-col items-center rounded-lg border border-gray-200 bg-white shadow transition-all duration-300 ease-in hover:bg-gray-100 md:max-w-xl md:flex-row'
      onClick={handleFavorite}
    >
      <img
        className='h-full w-1/2 rounded-lg object-cover shadow-2xl transition-all duration-500 ease-in-out hover:rounded-s-lg'
        src={cover}
        alt={title}
      />
      <div className='animate-fade-right animate-once animate-ease-in-out flex h-full w-full flex-col justify-between p-2 leading-normal'>
        <h5 className='mb-2 text-xl font-bold tracking-tight text-gray-900'>{title}</h5>
        <p className='mb-3 font-normal text-gray-700'>{synopsis}</p>
        <p className='mb-3 text-sm font-normal text-gray-700'>{genre}</p>
        <p className='mb-3 text-sm font-normal text-gray-700'>{author}</p>
      </div>
    </div>

    // <div className='group flex h-72 w-52 cursor-pointer flex-col items-center rounded-lg bg-white transition-all hover:z-50 hover:w-[26rem] hover:border hover:border-gray-200 hover:bg-gray-100 hover:shadow hover:duration-300 hover:ease-in md:max-w-xl md:flex-row'>
    //   <img
    //     className='h-full w-full rounded-lg object-cover shadow-2xl transition-all duration-500 ease-in-out hover:rounded-s-lg group-hover:w-1/2'
    //     src={cover}
    //     alt={title}
    //   />
    //   <div className='animate-fade-right animate-once animate-ease-in-out hidden flex-col justify-between p-2 leading-normal group-hover:flex'>
    //     <h5 className='mb-2 text-xl font-bold tracking-tight text-gray-900'>{title}</h5>
    //     <p className='mb-3 font-normal text-gray-700'>{synopsis}</p>
    //     <p className='mb-3 text-sm font-normal text-gray-700'>{genre}</p>
    //     <p className='mb-3 text-sm font-normal text-gray-700'>{author}</p>
    //   </div>
    // </div>
  );
}
