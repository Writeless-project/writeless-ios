import React from 'react';
import { StyleSheet } from 'react-native';
import { Text, List, ListItem } from 'native-base';
import Swipeout from 'react-native-swipeout';

const renderList = (journals, deleteJournal) => {
    if (journals) {
        function callDeleteJournal() {
            deleteJournal(this.id);
        };

        return journals.map((journal, i) => {
            // the buttons that appear when the item is swiped to the left
            var swipeoutBtns = [{
                text: 'Delete',
                backgroundColor: '#dd0000',
                onPress: callDeleteJournal.bind(journal)
            }];

            return (
                <Swipeout key={i} right={swipeoutBtns} sensitivity={100}>
                    <ListItem style={styles.listItem} onPress={() => console.log(`Pressed ${journal.title || "No journals"}`)}>
                        <Text>
                            {journal.title || "No journals. Please press the Add button below to add a journal!"}
                        </Text>
                    </ListItem>
                </Swipeout>
            )
        });
    }
}

const JournalList = ({ journals, deleteJournal }) => {
    return (
        <List>
            {renderList(journals, deleteJournal)}
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