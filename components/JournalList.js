import React from 'react';
import { Text, List, ListItem } from 'native-base';

const renderList = journals => {
    if (journals) {
        return journals.map((journal, i) => {
            return (
                <ListItem key={i}>
                    <Text>
                        {journal.title}
                    </Text>
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

export default JournalList;