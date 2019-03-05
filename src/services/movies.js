import axios from 'axios';

const API_URL = 'https://movies-api-koa.herokuapp.com';

axios.defaults.headers.common['Content-Type'] = 'application/json';
axios.defaults.headers.common['Accept'] = 'application/json';

export default {
  getMoviesList: async () => {
    return axios.get(`${API_URL}/api/v1/movies`);
  }
};
