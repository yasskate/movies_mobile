import React from 'react';
import { View, ActivityIndicator } from 'react-native';

export const renderLoader = () => {
  // if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center' }}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  // }
};
