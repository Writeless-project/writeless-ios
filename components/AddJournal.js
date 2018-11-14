import React from 'react';
import {
    View,
    TextInput
} from 'react-native';

const AddJournal = ({ addJournal }) => {
    return (
        <View>
            <TextInput
                placeholder="Enter journal title here..."
                onSubmitEditing={event => addJournal(event.nativeEvent.text)}
            />
        </View>
    )
};

export default AddJournal;