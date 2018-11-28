import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { Entypo  } from '@expo/vector-icons';

export default class BackButton extends React.Component {
    render() {
        return (
            <View>
                <TouchableOpacity onPress={this.props.navigation.goBack()}>
                    <Entypo name={this.props.name || "chevron-left"} size={this.props.size || 80} color="blue" />
                </TouchableOpacity>
            </View>
        );
    }
}