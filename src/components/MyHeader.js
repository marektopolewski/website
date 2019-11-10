import React from 'react';
import { StyleSheet, Text } from 'react-native';

export default class MyHeader extends React.Component {
    render() {
        return (
            <Text className="unselectable" style={[ styles.defaultHeaderStyle, this.props.style ]}>
                {this.props.children}
            </Text>
        );
    }
}

const styles = StyleSheet.create({
    defaultHeaderStyle: {
        color: '#FFF',
        fontSize: 70,
        fontFamily: `Palatino, "Palatino LT STD", "Palatino Linotype", "Book Antiqua", Georgia, serif`,
        fontWeight: 'bold',
        textShadowColor: 'rgba(0, 0, 0, 1)',
        textShadowOffset: {width: -1, height: 1},
        textShadowRadius: 20,
    },
});
