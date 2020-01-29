import React from 'react';
import { View, StyleSheet } from 'react-native';
import { IoIosQuote } from 'react-icons/io';
import { NavLink } from 'react-router-dom';
import { animateScroll as scroll } from 'react-scroll';

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
                        <View style={[
                            styles.paraText,
                            {marginRight: '2vw'},
                            this.state.width < MobileWidth ? {width:'90%'} : {width:'60%'}
                        ]}>
                            <Text style={this.state.width < MobileWidth ? styles.secMobText : styles.secText}>
                            I am a Computer Scientist with a degree from the University of Warwick, currently working as a Software
                            Engineer at Cisco. I moved from Poland to England in 2016 to develop academically by studying at one of
                            the top universities in Europe and strengthen as an individual. After graduating, I decided to broaden
                            my professional experience and find a specialisation I am passionate about for my Master’s degree.
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
                            <Text style={this.state.width < MobileWidth ? styles.secMobText : styles.secText}>
                            This website began as a fun side project to pick up new web development technologies. However, it has
                            proven to be an entertaining endeavour and allows to me to provide a more comprehensive image than a CV
                            could. That being said, I encourage you to explore this page and get in touch using
                            the <ContactLink/> page.
                            </Text>
                        </View>
                    </View>
                </View>
            </View>
        );
    };
}

const ContactLink = () => {
    return (
        <NavLink
            strict exact to={'/contact'} key={'/contact'}
            style={{color: AccentColor, width: 'fit-content', textDecoration: 'none'}}
            onClick={ () => scroll.scrollToTop() }
        >
            Contact
        </NavLink>
    );
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
        width: '60%',
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
        lineHeight: '160%',
        letterSpacing: 0.5,
        textAlign: 'justify',
    },
    secMobText: {
        fontFamily: '"Segoe UI", Roboto, Ubuntu, "Helvetica Neue", sans-serif',
        fontSize: '95%',
        lineHeight: '150%',
        textAlign: 'justify',
    },
});
