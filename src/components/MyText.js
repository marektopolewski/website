import React from 'react';
import { Text, StyleSheet } from 'react-native';

export default class MyText extends React.Component {
    render() {
        return (
            <Text style={[styles.defaultTextStyle, this.props.style]}>
                {this.props.children}
            </Text>
        );
    }
}
  
const styles = StyleSheet.create({
    defaultTextStyle: {
        color: '#FFF',
        fontSize: '120%',
    },
});
  