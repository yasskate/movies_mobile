import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './src/state/index';
import Navigator from './src/navigation/navigator';

// p12 password file:  vsazididff

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Navigator />
      </Provider>
    );
  }
}
