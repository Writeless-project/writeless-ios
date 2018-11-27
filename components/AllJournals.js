import React, { Component } from 'react';
import {
    View,
    StyleSheet
} from 'react-native';
import JournalList from '../containers/JournalList';
// import AddJournal from '../containers/AddJournal';
// import DeleteJournal from '../containers/DeleteJournal';
import DeleteJournals from '../containers/DeleteJournals';
import {Container, Content } from 'native-base';
// import {
//     ADD_JOURNAL,
// } from '../constants/ActionTypes';
import AddNewButton from '../components/AddNewButton';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 100
  }
});

class AllJournals extends Component {
    componentDidMount() {
        this._initial();
    }

    _initial() {
        this.props.fetchAllJournals();
    }

    _addNewJournal() {
        this.props.navigation.navigate('AddJournal');
    }

    render() {
        const { journals } = this.props;

        return (
            <Container>
                <Content>
                    <JournalList journals={journals} />
                    <DeleteJournals />
                    {/* <DeleteJournal /> */}
                    <AddNewButton onBtnPress={this._addNewJournal.bind(this)} />
                </Content>
            </Container>
        );
    }
}

export default AllJournals;
