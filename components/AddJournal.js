import React from 'react';
import {
    Button,
    View,
    StyleSheet,
    TextInput
} from 'react-native';
import { Formik } from 'formik'

const AddJournal = ({ addJournal }) => {
    return (
        <Formik onSubmit={formValues => addJournal(formValues)}>
            {props => (
                <View>
                    <TextInput
                        style={styles.textInput}
                        placeholder="Enter journal title here..."
                        onChangeText={props.handleChange('title')}
                        value={props.values.title}
                    />
                    <TextInput
                        style={styles.textInput}
                        placeholder="Enter more stuff here..."
                        onChangeText={props.handleChange('content')}
                        value={props.values.content}
                    />
                    <Button onPress={props.handleSubmit} title="Submit" />
                </View>
            )}
        </Formik>
    )
};

const styles = StyleSheet.create({
    textInput: {
        height: 50,
        fontSize: 15,
        marginLeft: 5
    }
});

export default AddJournal;