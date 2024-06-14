import { useEffect } from 'react';
import image from './assets/33.jpg';
import Card from './components/card';
import { fetchData } from './api';

function App() {
  useEffect(() => {
    const getData = async () => {
      const data = await fetchData();
      console.log(data);
    };

    getData();
  }, []);

  return (
    <>
      <header className='bg-slate-50'>
        <h1 className='text-3xl font-bold'>Welcome to Jelou Book</h1>
        <p className='text-gray-500'>Your personalized book list</p>
      </header>

      <main className='mt-12'>
        <article className='flex gap-x-2'>
          <h2 className='text-2xl font-bold'>Book List</h2>
          <h2 className='text-2xl font-bold text-gray-400'>Recommendation</h2>
        </article>

        <article>
          <div className='mt-5 grid grid-cols-3 gap-5'>
            {/* <div className='flex h-72 w-[26rem] cursor-pointer flex-col items-center rounded-lg border border-gray-200 bg-white shadow hover:bg-gray-100 md:max-w-xl md:flex-row'>
              <img
                className='h-full w-1/2 rounded-none rounded-s-lg object-cover'
                src={image}
                alt=''
              />
              <div className='flex flex-col justify-between p-2 leading-normal'>
                <h5 className='mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white'>
                  Title
                </h5>
                <p className='mb-3 font-normal text-gray-700'>
                  Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse
                  chronological order.
                </p>
                <p className='mb-3 text-sm font-normal text-gray-700'>Horror, Adventure</p>
                <p className='mb-3 text-sm font-normal text-gray-700'>Author</p>
              </div>
            </div> */}

            <Card
              image={image}
              title={'Harry Potter'}
              synopsis={'lorem10'}
              genre={'idk'}
              author={'JK Rolling'}
            />

            <Card
              image={image}
              title={'Harry Potter'}
              synopsis={'lorem10'}
              genre={'idk'}
              author={'JK Rolling'}
            />
          </div>
        </article>
      </main>
    </>
  );
}

export default App;
