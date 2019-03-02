import { SET_SELECTED_MOVIE, SET_MOVIES_LIST } from '../types/index';
import Movies from '../../services/movies';

export const getMoviesList = () => {
  return async dispatch => {
    try {
      const response = await Movies.getMoviesList();
      dispatch(setMoviesList(response.data.data));
    } catch (error) {
      console.log('error', error);
    }
  };
};

export const setSelectedMovie = selectedMovie => ({
  type: SET_SELECTED_MOVIE,
  payload: selectedMovie
});

export const setMoviesList = moviesList => ({
  type: SET_MOVIES_LIST,
  payload: moviesList
});
