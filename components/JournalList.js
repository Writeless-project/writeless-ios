import React from 'react';
import { StyleSheet } from 'react-native';
import DeleteJournal from './DeleteJournal';
import { Text, List, ListItem } from 'native-base';

const renderList = journals => {
    if (journals) {
        return journals.map((journal, i) => {
            return (
                <ListItem key={i} style={styles.listItem}>
                    <Text>
                        {journal.title}
                    </Text>
                    <DeleteJournal/>
                </ListItem>
            )
        });
    }
}

const JournalList = ({ journals }) => {
    return (
        <List>
            {renderList(journals)}
        </List>
    )
}

JournalList.defaultProps = {
    journals: []
}

const styles = StyleSheet.create({
    listItem: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
});

export default JournalList;