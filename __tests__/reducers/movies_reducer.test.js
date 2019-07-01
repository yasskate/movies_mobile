import movies_reducer from '../../src/state/reducers/movies_reducer';
import {
  setMoviesList,
  setSelectedMovie
} from '../../src/state/actions/movies_actions';
import { moviesListMockResponse } from '../../src/utils/mocks/movies_mocks';

describe('Movies reducer', () => {
  const INITIAL_STATE = {
    moviesList: undefined,
    selectedMovie: undefined
  };

  it('initializes the default state', () => {
    expect(movies_reducer(undefined, {})).toEqual(INITIAL_STATE);
  });

  it('sets movies list data', () => {
    expect(movies_reducer({}, setMoviesList(moviesListMockResponse))).toEqual({
      moviesList: moviesListMockResponse
    });
  });

  it('sets the selected movie', () => {
    expect(
      movies_reducer({}, setSelectedMovie(moviesListMockResponse[0]))
    ).toEqual({
      selectedMovie: moviesListMockResponse[0]
    });
  });

  it('returns the default state', () => {
    expect(movies_reducer({}, { type: 'default', payload: {} })).toEqual({
      ...INITIAL_STATE
    });
  });
});
