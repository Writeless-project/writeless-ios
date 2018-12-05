import React from 'react';
import AllJournals from '../containers/AllJournals';
import getTheme from '../native-base-theme/components';
import { StyleProvider, Container, Button } from 'native-base';
import AddNewButton from '../components/AddNewButton';

export default class HomeScreen extends React.Component {
  
  static navigationOptions = {
    title: 'Journals'
  };

  _addNewJournal() {
    this.props.navigation.navigate('AddJournal');
}

  render() {
    return (
      <StyleProvider style={getTheme()}>
        <Container>
          <AllJournals />
          <AddNewButton onBtnPress={this._addNewJournal.bind(this)}/>
        </Container>
      </StyleProvider>
    );
  }
}
