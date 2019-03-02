const INITIAL_STATE = {
  moviesList: undefined,
  selectedMovie: undefined
};

const executeIfFunction = f => (typeof f === 'function' ? f() : f);

export const switchcase = cases => defaultCase => key =>
  cases.hasOwnProperty(key) ? cases[key] : defaultCase;

export const switchcaseF = cases => defaultCase => key =>
  executeIfFunction(switchcase(cases)(defaultCase)(key));

export default (state = INITIAL_STATE, action) =>
  switchcaseF({
    SET_MOVIES_LIST: () => ({ ...state, moviesList: action.payload }),
    SET_SELECTED_MOVIE: () => ({ ...state, selectedMovie: action.payload }),
    default: () => ({ ...state })
  })(state)(action.type);
