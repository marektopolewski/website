import React from 'react';
import ReactDOM from 'react-dom';
import { View, StyleSheet } from 'react-native';

import Text from './MyText';
import Header from './MyHeader';
import Breakline from './Breakline';

import { Theme } from '..';
import '../index.css';

export default class BioPage extends React.Component {
    componentDidMount() {
        let y = ReactDOM.findDOMNode(this.refs['cntRef']).getBoundingClientRect().y;
        this.props.cb(y)
    }

    render() {
        return (
            <View style={[this.props.style, styles.pageView]}>
                <View style={styles.container}>
                    <Header ref='cntRef' style={styles.header}>
                        Hi
                        <Header style={[styles.header, styles.dot, Theme.accent]}>.</Header>
                    </Header>

                    <Breakline size={50} />

                    <View style={styles.intro}>
                        <View style={styles.introText}>
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
                    </View>

                    <Breakline size={200} />

                    <View style={[styles.para, {flexWrap: 'wrap-reverse'}]}>
                        <View style={[styles.paraText, {marginRight: '2vw'}]}>
                            <Text style={styles.secText}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore 
                                et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut 
                                aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse 
                                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa 
                                qui officia deserunt mollit anim id est laborum
                            </Text>
                        </View>
                        <View style={styles.img}>
                            <img
                                className="bio-img"
                                src={require(`../assets/marek_pro.jpg`)}
                                alt="File not found"
                            />
                        </View>
                    </View>

                    <Breakline size={100} />

                    <View style={[styles.para, {flexWrap: 'wrap'}]}>
                        <View style={[styles.img, {marginRight: '2vw'}]}>
                            <img
                                className="bio-img"
                                src={require(`../assets/marek_fun.jpg`)}
                                alt="File not found"
                            />
                        </View>
                        <View style={styles.paraText}>
                            <Text style={styles.secText}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore 
                                et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut 
                                aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse 
                                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa 
                                qui officia deserunt mollit anim id est laborum
                            </Text>
                        </View>
                    </View>
                </View>
            </View>
        );
    };
}

const styles = StyleSheet.create({
    pageView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    container: {
        paddingVertical: '10%',
        width: '60vw',
    },
    header: {
        fontSize: 50,
        textAlign: 'center',
    },
    dot: {
        marginLeft: 2,
    },
    intro: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    introText: {
        width: '40vw',
    },
    para: {
        flex: 1,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: -20,
    },
    paraText: {
        width: '40vw',
        minWidth: 300,
        maxWidth: 900,
        marginTop: 20,
    },
    img: {
        alignItems: 'center',
        marginTop: 20,
    },
    text: {
        fontFamily: '"Segoe UI", Roboto, Ubuntu, "Helvetica Neue", sans-serif',
        textAlign: 'justify',
    },
    secText: {
        fontFamily: '"Segoe UI", Roboto, Ubuntu, "Helvetica Neue", sans-serif',
        fontSize: 17,
        lineHeight: 22,
        textAlign: 'justify',
    },
});
