import React from 'react';
import EditJournal from '../containers/EditJournal';
import getTheme from '../native-base-theme/components';
import { StyleProvider } from 'native-base';
import { View, TouchableOpacity } from 'react-native';
import { Entypo  } from '@expo/vector-icons';

export default class EditJournalScreen extends React.Component {
    selectedJournalId = null;

    constructor(props) {
        super(props);
        selectedJournal = this.props.navigation.state.params;
    }
    static navigationOptions = ({navigation}) => ({
        title: "Edit Journal",
        headerLeft: (
            <View>
                <TouchableOpacity onPress={() => navigation.goBack() }>
                    <Entypo name={'chevron-small-left' || "chevron-left"} size={42 || 80} color="blue" />
                </TouchableOpacity>
            </View>
        ),
    });


    render() {
        return (
            <StyleProvider style={getTheme()}>
                <EditJournal navigation={this.props.navigation} />
            </StyleProvider>
        );
    }
}
