import React from 'react';
import { StyleSheet } from 'react-native';
import { Provider } from 'react-redux';
import AddJournal from '../containers/AddJournal';
import configureStore from '../configureStore';
import getTheme from '../native-base-theme/components';
import { StyleProvider } from 'native-base';

const store = configureStore();

export default class AddNewJournal extends React.Component {

    static navigationOptions = {
        // header: null,
        title: 'New Journal'
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
