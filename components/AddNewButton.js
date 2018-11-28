import React, { Component } from 'react'
import {
    View,
    StyleSheet,
    TouchableOpacity
} from 'react-native';

import Icon from './Icon';

export default class AddNoteButton extends Component {
    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity onPress={this.handlePress.bind(this)}>
                    <Icon/>
                </TouchableOpacity>
            </View>
        );
    }

    handlePress() {
        this.props.onBtnPress();
    }
}

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        bottom: 0,
        right: 15,
    }
});