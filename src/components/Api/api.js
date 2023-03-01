import axios from 'axios';
import { toast } from 'react-hot-toast';

const KEY = '30932931-541e61a77d62bc2845be72b94';

axios.defaults.baseURL = `https://pixabay.com/api/`;

export const searchImages = async (query, pageNumber) => {
  try {
    const response = await axios.get(
      `/?key=${KEY}&q=${query}&page=${pageNumber}&image_type=photo&orientation=horizontal&per_page=12`
    );

    return response.data.hits;
  } catch (error) {
    toast.error('Please wait, we are repair problem');
    return [];
  }
};
