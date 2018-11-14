import React from 'react';
import {
    View,
    Text,
    StyleSheet,
} from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    listItem: {
        margin: 5
    }
});

const renderList = journals => {
    if (journals) {
        return journals.map((journal, i) => {
            <Text styles={styles.listItem} key={i}>
                {journal.title}
            </Text>
        });
    }
}

const List = ({ journals }) => {
    return (
        <View styles={styles.container}>
            {renderList(journals)}
        </View>
    )
}

List.defaultProps = {
    journals: []
}

export default List;