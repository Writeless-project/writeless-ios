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
        <AllJournals style={styles.journal}/>
      </Provider>
    );
  }
}

// Currently not used
const styles = StyleSheet.create({
  journal: {
    height: 150,
  },
});
