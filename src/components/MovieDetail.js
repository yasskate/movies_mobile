import React, { PureComponent } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet
} from 'react-native';
import { connect } from 'react-redux';
import { renderLoader } from '../utils/loader/Loader';

export class MovieDetail extends PureComponent {
  renderMovieDetail = () => {
    const {
      selectedMovie: { name, genre, explicit, cover_image: coverImage }
    } = this.props;

    return (
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image
            source={{ uri: coverImage }}
            style={{ height: 220, width: 180 }}
          />
        </View>
        <View style={styles.textContainer}>
          <View style={styles.titleContainer}>
            <Text style={styles.title} numberOfLines={2}>
              {name}
            </Text>
            <View style={styles.line} />
          </View>

          <Text style={styles.genre}>{genre}</Text>
        </View>
      </View>
    );
  };

  _handleRender = () => {
    const { selectedMovie } = this.props;

    if (!selectedMovie) {
      return renderLoader();
    }

    return this.renderMovieDetail();
  };

  render = () => {
    return this._handleRender();
  };
}

const mapStateToProps = ({ movies }) => {
  const { selectedMovie } = movies;

  return {
    selectedMovie
  };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'white'
  },
  imageContainer: {
    marginTop: 20
  },
  textContainer: {
    alignItems: 'center',
    marginTop: 30,
    marginHorizontal: 20
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center'
  },
  line: {
    height: 3,
    width: '100%',
    backgroundColor: 'black'
  },
  genre: {
    marginTop: 10,
    fontSize: 18
  },
  titleContainer: {
    alignItems: 'center',
    borderBottomWidth: 3,
    borderBottomColor: 'black'
  }
});

export default connect(mapStateToProps)(MovieDetail);
