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
        <Formik onSubmit={formValues => deleteJournals()}>
            {props => (
                <View>
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