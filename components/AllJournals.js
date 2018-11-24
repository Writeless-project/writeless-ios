import React, { Component } from 'react';
import {
    View,
    StyleSheet
} from 'react-native';
import List from './Lists';
import AddJournal from '../containers/AddJournal';
import {Container, Content } from 'native-base';
import {
    ADD_JOURNAL,
} from '../constants/ActionTypes';
import AddNewButton from '../components/AddNewButton';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 100
  }
});

class AllJournals extends Component {
    // ERROR This doesn't work here. It has to be as the screen level
    static navigationOptions = {
        title: 'Journals',
      };

    componentDidMount() {
        this._initial();
    }

    _initial() {
        this.props.fetchAllJournals();
    }

    _addNewJournal() {
        this.props.navigation.navigate.push('AddJournal');
    }

    render() {
        const { journals } = this.props;

        return (
            <Container>
                <Content>
                    <List journals={journals} />
                    <AddNewButton onBtnPress={this._addNewJournal.bind(this)} />
                </Content>
            </Container>
        );
    }
}

export default AllJournals;
