import React from 'react';
import { Provider } from 'react-redux';
import AllJournals from '../containers/AllJournals';
import configureStore from '../configureStore';
import getTheme from '../native-base-theme/components';
import { StyleProvider, Container, Button } from 'native-base';
import AddNewButton from '../components/AddNewButton';

const store = configureStore();

export default class HomeScreen extends React.Component {
  
  static navigationOptions = {
    title: 'Journals'
  };

  _addNewJournal() {
    console.log(`this: `, JSON.stringify(this.props));
    this.props.navigation.navigate('AddJournal');
}

  render() {
    return (
      <StyleProvider style={getTheme()}>
        {/* <Provider store={store}> */}
          <Container>
            <AllJournals />
            <AddNewButton onBtnPress={this._addNewJournal.bind(this)}/>
          </Container>
        {/* </Provider> */}
      </StyleProvider>
    );
  }
}
