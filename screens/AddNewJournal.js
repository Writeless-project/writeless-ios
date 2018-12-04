import React from 'react';
import { Provider } from 'react-redux';
import AddJournal from '../containers/AddJournal';
import configureStore from '../configureStore';
import getTheme from '../native-base-theme/components';
import { StyleProvider } from 'native-base';
import { View, TouchableOpacity, Button } from 'react-native';
import { Entypo  } from '@expo/vector-icons';


// import BackButton from '../components/BackButton';

const store = configureStore();

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
        // console.log(`vleafd: ${JSON.stringify(this.props)}`);
        return (
            <StyleProvider style={getTheme()}>
                {/* <Provider store={store}> */}
                    <AddJournal navigation={this.props.navigation}/>
                {/* </Provider> */}
            </StyleProvider>
        );
    }
}
