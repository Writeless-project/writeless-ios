import React from 'react';
import { StyleSheet } from 'react-native';
import { Provider } from 'react-redux';
import AddJournal from '../components/AddJournal';
import configureStore from '../configureStore';
import getTheme from '../native-base-theme/components';
import { StyleProvider } from 'native-base';

const store = configureStore();

export default class AddNewJournal extends React.Component {
    // Currently not used
    static navigationOptions = {
        // header: null,
        title: 'Add a new journal'
    };

    render() {
        return (
            <StyleProvider style={getTheme()}>
                <Provider store={store}>
                    <AddJournal />
                </Provider>
            </StyleProvider>
        );
    }
}
