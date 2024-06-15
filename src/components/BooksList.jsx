import Card from './Card';
import Loading from './Loading';

export default function BookList({ books, loading }) {
  return (
    <>
      <h3 className='ml-9 animate-fade text-2xl font-bold text-gray-600 animate-once animate-ease-in-out'>
        Book List <span className='text-2xl font-bold text-secondary'>Recommendation</span>
      </h3>
      <div className='mt-5 grid grid-cols-1 gap-y-5 sm:grid-cols-2 md:grid-cols-3'>
        {books.map(({ book }) => (
          <Card
            key={book.title}
            cover={book.cover}
            title={book.title}
            synopsis={book.synopsis}
            genre={book.genre}
            author={book.author.name}
            pages={book.pages}
            year={book.year}
            ISBN={book.ISBN}
            isFavorite={false}
          />
        ))}
      </div>

      {loading && <Loading />}
    </>
  );
}
