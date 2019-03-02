import axios from 'axios';

axios.defaults.headers.common['Content-Type'] = 'application/json';
axios.defaults.headers.common['Accept'] = 'application/json';

export default {
  getMoviesList: async () => {
    return axios.get('http://localhost:3000/api/v1/movies');
  }
}