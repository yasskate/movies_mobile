import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import {
  View,
  Text,
  FlatList,
  Image,
  StyleSheet,
  TouchableWithoutFeedback
} from 'react-native';
import { getMoviesList, setSelectedMovie } from '../state/actions/index';
import { renderLoader } from '../utils/loader/Loader';
import { colors, images } from '../assets/index';

export class Movies extends PureComponent {
  static navigationOptions = ({ navigation }) => {
    return {
      headerLeft: <View />,
      headerRight: (
        <TouchableWithoutFeedback>
          <View style={{ paddingHorizontal: 12, paddingVertical: 12 }}>
            <Image
              source={images.plus_icon}
              style={{ width: 22, height: 22 }}
            />
          </View>
        </TouchableWithoutFeedback>
      )
    };
  };

  keyExtractor = item => Number(item.id);

  _isExplicitMovie = isExplicit => {
    if (isExplicit) {
      return (
        <Image
          source={images.success_active}
          style={{ height: 15, width: 15 }}
        />
      );
    }

    return (
      <Image
        source={images.success_inactive}
        style={{ height: 15, width: 15 }}
      />
    );
  };

  getMovieDetail = movie => {
    this.props.setSelectedMovie(movie);
    this.props.navigation.navigate('movieDetail');
  };

  _getTextMovieItem = item => (
    <View
      style={{
        justifyContent: 'space-between',
        marginRight: 15,
        width: '70%'
      }}
    >
      <Text
        style={{
          color: colors.hardGray,
          fontSize: 22,
          fontWeight: 'bold'
        }}
        numberOfLines={2}
      >
        {item.name}
      </Text>

      <Text style={{ marginTop: 5, fontSize: 16 }}>{item.genre}</Text>
      <Text>Is a explicit movie: {this._isExplicitMovie(item.explicit)}</Text>
    </View>
  );

  _getImageMovieItem = item => (
    <View>
      <Image
        source={{ uri: item.cover_image }}
        resizeMode="cover"
        style={{ height: 130, width: 90 }}
      />
    </View>
  );

  _getMovieItem = item => {
    return (
      <TouchableWithoutFeedback onPress={() => this.getMovieDetail(item)}>
        <View style={styles.itemContainer}>
          {this._getTextMovieItem(item)}
          {this._getImageMovieItem(item)}
        </View>
      </TouchableWithoutFeedback>
    );
  };

  _getMoviesList = () => (
    <FlatList
      data={this.props.moviesList}
      renderItem={({ item }) => this._getMovieItem(item)}
      keyExtractor={this.keyExtractor}
    />
  );

  renderMovies = () => {
    return (
      <View
        style={{
          flex: 1,
          width: '100%',
          justifyContent: 'space-around',
          backgroundColor: colors.lightGray
        }}
      >
        {this._getMoviesList()}
      </View>
    );
  };

  handleRender = () => {
    const { moviesList } = this.props;

    if (!moviesList) {
      this.props.getMoviesList();
      return renderLoader();
    }

    return this.renderMovies();
  };

  render = () => {
    return this.handleRender();
  };
}

const styles = StyleSheet.create({
  itemContainer: {
    flex: 1,
    marginHorizontal: 15,
    marginVertical: 12,
    paddingHorizontal: 10,
    paddingVertical: 15,
    flexDirection: 'row',
    backgroundColor: colors.white
  }
});

const mapStateToProps = ({ movies }) => {
  const { moviesList } = movies;
  return {
    moviesList
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getMoviesList: () => dispatch(getMoviesList()),
    setSelectedMovie: movie => dispatch(setSelectedMovie(movie))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Movies);
