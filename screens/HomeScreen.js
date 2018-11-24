import React from 'react';
import { StyleSheet } from 'react-native';
import { Provider } from 'react-redux';
import AllJournals from '../containers/AllJournals';
import configureStore from '../configureStore';
import getTheme from '../native-base-theme/components';
import { StyleProvider } from 'native-base';

const store = configureStore();

export default class HomeScreen extends React.Component {
  // Currently not used
  static navigationOptions = {
    // header: null,
    title: 'Writeless'
  };

  render() {
    return (
      <StyleProvider style={getTheme()}>
        <Provider store={store}>
          <AllJournals />
        </Provider>
      </StyleProvider>
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
