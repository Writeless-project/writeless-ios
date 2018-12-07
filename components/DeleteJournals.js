import React from 'react';
import { StyleSheet } from 'react-native';
import {
    Button,
    Text
} from 'native-base';
import { Formik } from 'formik'

const DeleteJournals = ({ deleteJournals }) => {
    return (
        <Formik onSubmit={formValues => deleteJournals()}>
            {props => (
                <Button danger style={styles.button} full onPress={props.handleSubmit}>
                    <Text>Delete All Journals</Text>
                </Button>
            )}
        </Formik>
    )
};

/* Because the default margin-top is 200.... */
const styles = StyleSheet.create({
    button: {
        marginTop: 20,
        margin: 20,
    }
});

export default DeleteJournals;