export default function Card({ image, title, synopsis, genre, author }) {
  return (
    <div className='group flex h-72 w-52 cursor-pointer flex-col items-center rounded-lg bg-white transition-all hover:z-50 hover:w-[26rem] hover:border hover:border-gray-200 hover:bg-gray-100 hover:shadow hover:duration-300 hover:ease-in md:max-w-xl md:flex-row'>
      <img
        className='h-full w-full rounded-lg object-cover shadow-2xl transition-all duration-500 ease-in-out hover:rounded-s-lg group-hover:w-1/2'
        src={image}
        alt={title}
      />
      <div className='animate-fade-right animate-once animate-ease-in-out hidden flex-col justify-between p-2 leading-normal group-hover:flex'>
        <h5 className='mb-2 text-xl font-bold tracking-tight text-gray-900'>{title}</h5>
        <p className='mb-3 font-normal text-gray-700'>{synopsis}</p>
        <p className='mb-3 text-sm font-normal text-gray-700'>{genre}</p>
        <p className='mb-3 text-sm font-normal text-gray-700'>{author}</p>
      </div>
    </div>
  );
}
