import React from 'react';
import {
    View,
    StyleSheet,
    TextInput
} from 'react-native';
import { Formik } from 'formik';
import { Text, Button, Item, Input, Form } from 'native-base';

const AddJournal = ({ addJournal }) => {
    return (
        <Form>
        <Formik onSubmit={formValues => addJournal(formValues)}>
        {props => (
            <View>
                <Item>
                    <Input 
                        placeholder="Enter journal title here..."
                        onChangeText={props.handleChange('title')}
                        value={props.values.title}
                    />
                </Item>
                <Item>
                    <Input 
                        placeholder="Enter More Stuff here"
                        onChangeText={props.handleChange('content')}
                        value={props.values.content}
                    />
                </Item>

                <Button 
                full 
                style={styles.button}
                onPress={props.handleSubmit}>
                    <Text>Submit</Text>
                </Button>
                
            </View>
        )}
        </Formik>
        </Form>
    )
};

const styles = StyleSheet.create({

    button: {
        marginTop: 20,
        margin: 20,
    }
});

export default AddJournal;