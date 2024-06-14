import Card from './Card';

export default function BookList({ books }) {
  return (
    <div className='mt-5 grid grid-cols-1 gap-y-5 sm:grid-cols-2 md:grid-cols-3'>
      {books.map(({ book }) => (
        <Card
          key={book.title}
          cover={book.cover}
          title={book.title}
          synopsis={book.synopsis}
          genre={book.genre}
          author={book.author.name}
        />
      ))}
    </div>
  );
}
