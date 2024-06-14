import axios from 'axios';

export const fetchData = async () => {
  try {
    const { data } = await axios.get('https://jelou-prueba-tecnica1-frontend.rsbmk.workers.dev');
    const booksData = data.default.library;
    return booksData;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};
