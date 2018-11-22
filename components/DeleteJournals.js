import React from 'react';
import {
    Button,
    View,
    StyleSheet,
    TextInput
} from 'react-native';
import { Formik } from 'formik'

const DeleteJournals = ({ deleteJournals }) => {
    return (
        <Formik onSubmit={formValues => deleteJournals()}>
            {props => (
                <View>
                    <Button onPress={props.handleSubmit} title="Delete All Journals" />
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

export default DeleteJournals;