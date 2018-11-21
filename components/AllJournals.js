import React, { Component } from 'react';
import {
    View,
    StyleSheet
} from 'react-native';
import List from './Lists';
import AddJournal from '../containers/AddJournal';
import DeleteJournals from '../containers/DeleteJournals';

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

    render() {
        const { journals } = this.props;

        return (
            <View style={styles.container}>
                <AddJournal />
                <List journals={journals} />
                <DeleteJournals />
            </View>
        );
    }
}

export default AllJournals;
