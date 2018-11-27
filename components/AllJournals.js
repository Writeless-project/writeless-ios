import React, { Component } from 'react';
import {
    StyleSheet
} from 'react-native';
import JournalList from '../containers/JournalList';
import DeleteJournals from '../containers/DeleteJournals';
import {Container, Content } from 'native-base';
import AddNewButton from '../components/AddNewButton';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 100
  }, addButton: {

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
                    <AddNewButton onBtnPress={this._addNewJournal.bind(this)} style={styles.addButton}/>
                </Content>
            </Container>
        );
    }
}

export default AllJournals;
