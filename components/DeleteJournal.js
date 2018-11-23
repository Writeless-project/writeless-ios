import React from 'react';
import {
    Button,
    View,
    StyleSheet,
    TextInput
} from 'react-native';
import { Formik } from 'formik'

const DeleteJournal = ({ deleteJournal }) => {
    return (
        <Formik onSubmit={formValues => deleteJournal()}>
            {props => (
                <View>
                    <Button onPress={props.handleSubmit} title="Delete"/>
                </View>
            )}
        </Formik>
    )
};

export default DeleteJournal;