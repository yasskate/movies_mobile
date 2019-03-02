import React, { PureComponent } from 'react';
import { View, Text, StyleSheet } from 'react-native';

class AddMovieModal extends PureComponent {
  render = () => {
    return (
      <View style={styles.container}>
        <Text>Add Movie Modal</Text>
      </View>
    );
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  }
});

export default AddMovieModal;