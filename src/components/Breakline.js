import React from 'react';
import { View } from 'react-native';

export default class Breakline extends React.Component {
    render() {
        return (
            <View style={{height: this.props.size}}/>
        );
    }
}