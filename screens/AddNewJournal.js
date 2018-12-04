import React from 'react';
import AddJournal from '../containers/AddJournal';
import getTheme from '../native-base-theme/components';
import { StyleProvider } from 'native-base';
import { View, TouchableOpacity, Button } from 'react-native';
import { Entypo  } from '@expo/vector-icons';

export default class AddNewJournal extends React.Component {

    back;
    
    static navigationOptions = ({navigation}) => ({
        title: "New Journal",
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
                <AddJournal navigation={this.props.navigation}/>
            </StyleProvider>
        );
    }
}
