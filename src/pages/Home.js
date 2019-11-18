import React from 'react';
import { View, StyleSheet, Animated, Easing, Text } from 'react-native';

import Bio from '../components/Bio'
import Header from '../components/MyHeader';
import BackgroundImage from '../components/Background';
import { Theme } from '..';

export default class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {cntY: window.innerHeight * 2};
    }

    render() {
        return (
            <>
            <View>
                <BackgroundImage size="100">
                    <Header>Mar</Header>
                    <Header style={Theme.accent}>e</Header>
                    <Header>k Topol</Header>
                    <Header style={Theme.accent}>e</Header>
                    <Header>wski</Header>
                </BackgroundImage>
                <ScrollDownTip contentY={this.state.cntY} />
            </View>
            <Bio cb={(y) => this.setState({cntY: y})} />
            </>
        );
    }
}

const ScrollDownTip = (props) => {
    const state = {
        fadeAnim: new Animated.Value(0),
        moveAnim: new Animated.Value(0),
    };

    function fade(endValue, time) {
        return Animated.timing(
            state.fadeAnim, 
            { toValue: endValue, duration: time }
        );
    }
    function move(endValue, time) {
        return Animated.timing(
            state.moveAnim,
            { easing: Easing.back(), toValue: endValue, duration: time }
        );
    }

    let animation = Animated.sequence([
        Animated.delay(1000), fade(1, 700),
        Animated.delay(1000), move(0.4, 500), move(0, 500),
        Animated.delay(200), move(0.4, 500), move(0, 500),
        Animated.delay(2000),
        Animated.parallel(
            [ fade(0, 1000), move(-1, 1000) ],
        ),
    ]);

    let initY = window.scrollY + window.innerHeight;
    console.log(props.contentY);
    if (initY < 1.1*props.contentY) {
        window.addEventListener('scroll', () => {
            console.log(window.scrollY + window.innerHeight);
            if (window.scrollY + window.innerHeight > 1.1 * props.contentY) {
                animation.stop();
                fade(0,400).start();
            }
        }, true);
        animation.start();
    }

    const anim = StyleSheet.create({
        styles: {
            opacity: state.fadeAnim,
            transform: [{
                translateY: state.moveAnim.interpolate({
                    inputRange: [-1, 1],
                    outputRange: [50, -50]
                }),
            }],
        },
    });

    return (
        <Animated.View style={[styles.div, anim.styles]}>
            <Text style={styles.text}>
                Scroll down to read more..
            </Text>
        </Animated.View>
    );
}

const styles = StyleSheet.create({
    div: {
        position: 'absolute',
        left: 0, right: 0,
        marginLeft: 'auto', marginRight: 'auto',
        bottom: 10,
        width: 300, height: 50,
        backgroundColor: '#FFF',
        borderRadius: 10,
        shadowColor: '#000', shadowRadius: 10,
        justifyContent: 'center', alignItems: 'center',
    },
    text: {
        fontSize: 15,
    }
})