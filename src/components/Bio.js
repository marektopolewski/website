import React from 'react';
import { View, StyleSheet } from 'react-native';

import Text from './MyText';
import Header from './MyHeader';
import '../index.css';

export default function BioPage() {
    return (
        <View style={styles.container}>
            <Header style={styles.header}>
                Hi
                <Header style={[styles.header, styles.dot]}>.</Header>
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
        color: '#aa0505',
        marginLeft: 2,
    }
});
