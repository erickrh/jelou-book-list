import Card from './Card';

export default function FavoriteBooks({ favorite, loading }) {
  return (
    <>
      <h3 className='mt-5 animate-fade text-2xl font-bold text-gray-600 animate-once animate-ease-in-out'>
        Favorite List <span className='text-2xl font-bold text-secondary'>Books</span>
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

        {!favorite.length && !loading && (
          <p className='text-gray-800'>It&apos;s so empty here...</p>
        )}
      </div>
    </>
  );
}
