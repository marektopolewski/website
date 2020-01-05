import React from 'react';
import { View, TouchableOpacity, Animated, Easing } from 'react-native';
import { IoIosArrowDown } from "react-icons/io";
import { animateScroll as scroll } from 'react-scroll';

import Bio from '../components/Bio'
import Header from '../components/MyHeader';
import BackgroundImage from '../components/Background';
import { Theme } from '..';

export default class Home extends React.Component {

    componentDidMount() { this.setState({showTip: true }); }

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
                    <ScrollDownTip/>
                </BackgroundImage>
            </View>
            <Bio style={Theme.content} />
            </>
        );
    }
}

class ScrollDownTip extends React.Component {
    state = {
        fadeAnim: new Animated.Value(0),
        moveAnim: new Animated.Value(0),
    };

    fade = (endValue, time) => {
        return Animated.timing(
            this.state.fadeAnim, 
            { toValue: endValue, duration: time }
        );
    }
    move = (endValue, time) => {
        return Animated.timing(
            this.state.moveAnim,
            { easing: Easing.back(), toValue: endValue, duration: time }
        );
    }
    animation = Animated.sequence([
        Animated.delay(1000), this.fade(1, 700),
        Animated.delay(1000), this.move(0.4, 500), this.move(0, 500),
        Animated.delay(200), this.move(0.4, 500), this.move(0, 500),
        Animated.delay(1000), this.move(0.4, 500), this.move(0, 500),
        Animated.delay(200), this.move(0.4, 500), this.move(0, 500),
    ]);

    componentDidMount() {
        this.animation.start();
    }

    onClick = () => {
        this.animation.stop();
        Animated.parallel([this.move(0, 100), this.fade(1, 100)]).start();
        scroll.scrollTo(window.innerHeight);
    }

    render() {
        return (
            <Animated.View style={{
                position: "absolute",
                bottom:"5%",
                zIndex: 10,
                opacity: this.state.fadeAnim,
                transform: [{ translateY: this.state.moveAnim.interpolate({
                    inputRange: [-1, 1],
                    outputRange: [50, -50]
                })}]
            }}>
                <TouchableOpacity onClick={() => { this.onClick() }} >
                    <IoIosArrowDown
                        size="7em"
                        color="white"
                        style={{ filter: "drop-shadow( 0px 3px 5px rgba(0, 0, 0, .7))" }}
                    />
                </TouchableOpacity>
            </Animated.View>
        );
    }
}
