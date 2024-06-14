import axios from 'axios';

export const fetchData = async () => {
  try {
    const { data } = await axios.get('https://jelou-prueba-tecnica1-frontend.rsbmk.workers.dev');
    return data.default.library;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};
