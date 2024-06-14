export default function Card({ image, title, synopsis, genre, author }) {
  return (
    <div className='flex h-72 w-[26rem] cursor-pointer flex-col items-center rounded-lg border border-gray-200 bg-white shadow hover:bg-gray-100 md:max-w-xl md:flex-row'>
      <img
        className='h-full w-1/2 rounded-none rounded-s-lg object-cover'
        src={image}
        alt={title}
      />
      <div className='flex flex-col justify-between p-2 leading-normal'>
        <h5 className='mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white'>
          {title}
        </h5>
        <p className='mb-3 font-normal text-gray-700'>{synopsis}</p>
        <p className='mb-3 text-sm font-normal text-gray-700'>{genre}</p>
        <p className='mb-3 text-sm font-normal text-gray-700'>{author}</p>
      </div>
    </div>
  );
}
