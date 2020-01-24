import React from 'react';
import { View, StyleSheet } from 'react-native';
import { IoIosQuote } from 'react-icons/io';

import Text from './MyText';
import Header from './MyHeader';
import Breakline from './Breakline';

import { Theme, MobileWidth, AccentColor} from '..';
import '../index.css';

export default class BioPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = { width: window.innerWidth };
    }

    componentDidMount() { window.addEventListener('resize', this.handleResize) }
    componentWillUnmount() {  window.removeEventListener('resize', this.handleResize) }
    handleResize = () => { this.setState({ width: window.innerWidth }); };

    render() {
        return (
            <View style={[this.props.style, styles.pageView]}>
                <View style={{
                    width: this.state.width < MobileWidth ? '70%' : '60%',
                    paddingVertical: this.state.width < MobileWidth ? '20%' : '10%',
                }}>
                    <Header ref='cntRef' style={styles.header}>
                        Hi
                        <Header style={[styles.header, styles.dot, Theme.accent]}>.</Header>
                    </Header>

                    <Breakline size={this.state.width < MobileWidth ? 70 : 50} />

                    <View style={styles.intro}>
                        <View style={{width: '90%', maxWidth: '500px'}}>
                            <IoIosQuote size="10em" color={AccentColor} style={{
                                zIndex: -1, opacity: 0.3,
                                position: 'absolute', left: '-50px', top: '-60px'
                            }}/>
                            <Text style={styles.quote}>
                                In fear of plagarism, I will not put an inspirational
                                quote here. Regardless, having it would likely
                                imply I was incapable of producing something witty
                                of my own. 
                            </Text>
                            <Text style={{position: 'absolute', fontSize:'80%', right: 0, bottom: '-30px'}}>~ Unkown Author</Text>
                        </View>
                    </View>

                    <Breakline size={this.state.width < MobileWidth ? 150 : 200} />

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
    quote: {
        fontFamily: "'EB Garamond', serif", fontStyle: 'italic',
        textAlign: 'justify',
        lineHeight: '1.5em', letterSpacing: '0.2px',
    },
    text: {
        fontFamily: '"Segoe UI", Roboto, Ubuntu, "Helvetica Neue", sans-serif',
        textAlign: 'justify',
    },
    secText: {
        fontFamily: '"Segoe UI", Roboto, Ubuntu, "Helvetica Neue", sans-serif',
        fontSize: '105%',
        lineHeight: '140%',
        textAlign: 'justify',
    },
});
