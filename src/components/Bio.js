import React from 'react';
import ReactDOM from 'react-dom';
import { View, StyleSheet } from 'react-native';

import Text from './MyText';
import Header from './MyHeader';

import { Theme } from '..';
import '../index.css';

export default class BioPage extends React.Component {
    componentDidMount() {
        let y = ReactDOM.findDOMNode(this.refs['cntRef']).getBoundingClientRect().y;
        this.props.cb(y)
    }

    render() {
        return (
            <View style={styles.container}>
                <Header ref='cntRef' style={styles.header}>
                    Hi
                    <Header style={[styles.header, styles.dot, Theme.accent]}>.</Header>
                </Header>
                <Text style={styles.text}>
                    I am a human, creator and a software engineer.
                    I am a human, creator and a software engineer.
                    I am a human, creator and a software engineer.
                    I am a human, creator and a software engineer.
                    I am a human, creator and a software engineer.
                    I am a human, creator and a software engineer.
                    I am a human, creator and a software engineer.    
                </Text>
            </View>
        );
    };
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        maxWidth: 800,
        margin: 'auto',
        paddingVertical: '10%',
    },
    header: {
        fontSize: 50,
        textAlign: 'center',
    },
    text: {
        marginTop: 50,
        fontFamily: '"Segoe UI", Roboto, Ubuntu, "Helvetica Neue", sans-serif',
        textAlign: 'justify',
        marginHorizontal: '10%',
    },
    dot: {
        marginLeft: 2,
    }
});
