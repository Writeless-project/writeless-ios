import React from 'react';
import { Text, List, ListItem } from 'native-base';
import Swipeout from 'react-native-swipeout';

const renderList = entries => {
    if (entries) {
        // the buttons that appear when the item is swiped to the left
        var swipeoutBtns = [{
            text: 'Delete',
            backgroundColor: '#dd0000'
        }];

        return entries.map((entry, i) => {
            if (entry.title) {
                return (
                    <Swipeout key={i} right={swipeoutBtns} sensitivity={100}>
                        <ListItem style={styles.listItem} onPress={() => console.log(`Pressed ${entry.title}`)}>
                            <Text>
                                {entry.title}
                            </Text>
                        </ListItem>
                    </Swipeout>
                )
            } else {
                return (
                    <Swipeout key={i}>
                        <ListItem style={styles.listItem}>
                            <Text>
                                {"No entries. Please press the Add button below to add a entry!"}
                            </Text>
                        </ListItem>
                    </Swipeout>
                )
            }
        });
    }
}

const EntryList = ({ entries }) => {
    return (
        <List>
            {renderList(entries)}
        </List>
    )
}

EntryList.defaultProps = {
    entries: []
}

export default EntryList;