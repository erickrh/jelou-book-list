import Card from './Card';

export default function FavoriteBooks({ favorite, loading }) {
  return (
    <>
      <h3 className='mt-5 text-2xl font-bold text-gray-600'>
        Favorite List <span className='text-secondary text-2xl font-bold'>Books</span>
      </h3>

      <div className='mt-5 box-border flex flex-row flex-nowrap gap-5 overflow-x-auto overflow-y-hidden'>
        {favorite.map(({ book }) => (
          <Card
            key={book.title + 'fav'}
            cover={book.cover}
            title={book.title}
            synopsis={book.synopsis}
            genre={book.genre}
            author={book.author}
            isFavorite={true}
          />
        ))}

        {!favorite.length && !loading && <p>It&apos;s so empty here...</p>}
      </div>
    </>
  );
}
