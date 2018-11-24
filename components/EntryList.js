import React from 'react';
import { Text, List, ListItem } from 'native-base';
import Swipeout from 'react-native-swipeout';

const renderList = journals => {
    if (journals) {
        
        // the buttons that appear when the item is swiped to the left
        var swipeoutBtns = [{
            text: 'Delete',
            backgroundColor: '#dd0000'
        }];

        return journals.map((journal, i) => {
            return (
                <Swipeout key={i} right={swipeoutBtns}>
                    <ListItem style={styles.listItem}>
                        <Text>
                            {journal.title}
                        </Text>
                    </ListItem>
                </Swipeout>
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

export default JournalList;