import React from 'react';
import { StyleSheet } from 'react-native';
import { Provider } from 'react-redux';
import AllJournals from '../containers/AllJournals';
import configureStore from '../configureStore';
import getTheme from '../native-base-theme/components';
import { StyleProvider } from 'native-base';

const store = configureStore();

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Journals'
  };

  render() {
    return (
      <StyleProvider style={getTheme()}>
        <Provider store={store}>
          <AllJournals navigation={this.props.navigation}/>
        </Provider>
      </StyleProvider>
    );
  }
}
