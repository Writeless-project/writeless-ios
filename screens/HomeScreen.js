import React from 'react';
import { StyleSheet } from 'react-native';

import { Provider } from 'react-redux';
import AllJournals from '../containers/AllJournals';
import configureStore from '../configureStore';

const store = configureStore();

export default class HomeScreen extends React.Component {
  // Currently not used
  static navigationOptions = {
    header: null,
  };

  render() {
    return (
      <Provider store={store}>
        <AllJournals />
      </Provider>
    );
  }
}

// Currently not used
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
