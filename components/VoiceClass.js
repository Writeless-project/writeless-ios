import React, { Component } from 'react';
import Voice from 'react-native-voice';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import {
    Button,
    Text
} from 'native-base';
import { Formik } from 'formik';

class VoiceClass extends Component{
    constructor() {
        super();
        this.state = {
            results: []
        }

        Voice.onSpeechStart = this.onSpeechStart;
        Voice.onSpeechRecognized = this.onSpeechRecognized;
        Voice.onSpeechEnd = this.onSpeechEnd;
        Voice.onSpeechError = this.onSpeechError;
        Voice.onSpeechResults = this.onSpeechResults;
    }

    onSpeechResults = e => {
        this.setState({
            results: e.value
        });
    }

    _startRecognizing = async () => {
        this.setState({
            results: []
        });

        try {
            await Voice.start('en-US');
        } catch (e) {
            console.log('ERROR: ', e);
        }
    }

    _stopRecognizing = async () => {
        try {
            await Voice.stop();
        } catch (e) {
            console.log('ERROR: ', e);
        }
    };

    _cancelRecognizing = async () => {
        try {
            await Voice.cancel();
        } catch (e) {
            console.log('ERROR: ', e);
        }
    };

    render() {
        return (
            <View>
                    <TouchableOpacity style={styles.button} full onPress={this._startRecognizing}>
                        <Text>Record voice</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.button} full onPress={this._stopRecognizing}>
                        <Text>Stop voice</Text>
                    </TouchableOpacity>
                {
                    this.state.results.map((result, index) => {
                        return (
                            <Text key={index}>
                                {result}
                            </Text>
                        );
                    })
                }
            </View>
        );
    }
}

/* Because the default margin-top is 200.... */
const styles = StyleSheet.create({
    button: {
        marginTop: 20,
        margin: 20,
    }
});

export default VoiceClass;