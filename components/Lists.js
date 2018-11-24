import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    AsyncStorage
} from 'react-native';

const styles = StyleSheet.create({
    listItem: {
        marginLeft: 10,
        paddingLeft: 10
    }
});

const renderList = journals => {
    if (journals) {
        return journals.map((journal, i) => {
            return (
                <Text styles={styles.listItem} key={i}>
                    {/* {journal.title} */}
                </Text>
            )
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