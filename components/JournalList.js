import React from 'react';
import DeleteJournal from './DeleteJournal';
import { Text, List, ListItem } from 'native-base';

const renderList = journals => {
    if (journals) {
        return journals.map((journal, i) => {
            return (
                <ListItem key={i}
                style={{flexDirection:'row', justifyContent: 'space-between'}}>
                    <Text>
                        {journal.title}
                    </Text>
                    <DeleteJournal style={{}}/>
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