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
          <div className='mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3'>
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
