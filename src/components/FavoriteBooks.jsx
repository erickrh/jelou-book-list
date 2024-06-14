import Card from './Card';

export default function FavoriteBooks({ favorite }) {
  return (
    <>
      <h2 className='mt-5 text-3xl font-bold'>Favorite Books</h2>

      <div className='mt-5 grid grid-cols-1 gap-y-5 sm:grid-cols-2 md:grid-cols-3'>
        {favorite.map(({ book }) => (
          <Card
            key={book.title + 'fav'}
            cover={book.cover}
            title={book.title}
            synopsis={book.synopsis}
            genre={book.genre}
            author={book.author}
          />
        ))}
      </div>
    </>
  );
}
