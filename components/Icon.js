import React from 'react';
import { Ionicons  } from '@expo/vector-icons';

export default class Icon extends React.Component {
    render() {
        return (
            <Ionicons name={this.props.name || "ios-add-circle"} 
            size={this.props.size || 80} 
            color={this.props.color || "#4e7373"} />
        );
    }
}