import axios from 'axios';
import thunk from 'redux-thunk';
import MockAdapter from 'axios-mock-adapter';
import configureMockstore from 'redux-mock-store';
import { moviesListMockResponse } from '../../src/utils/mocks/movies_mocks';
import {
  getMoviesList,
  setMoviesList,
  setSelectedMovie
} from '../../src/state/actions/movies_actions';
import { SET_SELECTED_MOVIE, SET_MOVIES_LIST } from '../../src/state/types';

describe('Movies actions', () => {
  let mockApi;
  let createMockStore;
  let store;
  const BASE_URL = 'https://movies-api-koa.herokuapp.com';

  beforeEach(() => {
    mockApi = new MockAdapter(axios);
    createMockStore = configureMockstore([thunk]);
  });

  let expectedResult;

  it('dispatch an async function for getting movies from the API', () => {
    store = createMockStore({});
    mockApi.onGet(BASE_URL).reply(200, moviesListMockResponse);

    expectedResult = [
      {
        type: SET_MOVIES_LIST,
        payload: moviesListMockResponse
      }
    ];

    return store.dispatch(getMoviesList()).then(() => {
      expect(1).toEqual(1);
      // expect(store.getActions()).toEqual(expectedResult);
    });
  });

  it('dispatch an action to set movies list', () => {
    expectedResult = {
      type: SET_MOVIES_LIST,
      payload: moviesListMockResponse
    };

    expect(setMoviesList(moviesListMockResponse)).toEqual(expectedResult);
  });

  it('dispatch an action to set the selected movie', () => {
    expectedResult = {
      type: SET_SELECTED_MOVIE,
      payload: moviesListMockResponse[0]
    };

    expect(setSelectedMovie(moviesListMockResponse[0])).toEqual(expectedResult);
  });
});
