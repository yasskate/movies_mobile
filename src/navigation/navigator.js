import { StackNavigator } from 'react-navigation';
import Movies from '../screens/Movies';
import MovieDetail from '../components/MovieDetail';

const moviesStack = StackNavigator(
  {
    movies: {
      screen: Movies,
      navigationOptions: {
        title: 'Movies',
        headerBackTitle: ''
      }
    },
    movieDetail: {
      screen: MovieDetail,
      navigationOptions: {
        title: 'Movie Detail',
        headerBackTitle: ' '
      }
    }
  },
  {}
);

export default moviesStack;
