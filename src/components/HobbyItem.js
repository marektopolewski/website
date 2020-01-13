import React from 'react';
import { View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { NavLink } from 'react-router-dom';

import Breakline from './Breakline';
import Text from './MyText';
import { AccentColor, MobileWidth } from '..';

export default class HobbyItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = { width: window.innerWidth };
    }

    componentDidMount() { window.addEventListener('resize', this.handleResize) }
    componentWillUnmount() {  window.removeEventListener('resize', this.handleResize) }
    handleResize = () => { this.setState({ width: window.innerWidth }); };

    render() {
        return (
            <>
            <View style={styles.container}>
                <View style={[styles.main, {width: this.state.width < MobileWidth ? '95%' : '60%'}]}>
                    <View style={styles.header}>
                        <ProjectTitle val={this.props.title} />
                        <WebButton 
                            url={this.props.url}
                            img={this.props.urlImg}
                        />
                    </View>
                    <Breakline size={20} />
                    <Text style={styles.desc}>
                        { this.props.children }
                    </Text>
                    <Breakline size={10} />
                </View>
                <View>
                    <View style={styles.img}>
                        <img
                            className="simple-thumbnail"
                            src={require(`../assets/hobbies/${this.props.img1.toLowerCase()}`)}
                            alt="File not found"
                        />
                    </View>
                    { (this.props.img2 !== undefined) ?
                    <View style={styles.img}>
                        <img
                            className="simple-thumbnail"
                            src={require(`../assets/hobbies/${this.props.img2.toLowerCase()}`)}
                            alt="File not found"
                        />
                    </View> : <></>}
                </View>
            </View>
            </>
        );
    }
}

const ProjectTitle = (props) => {
    return (
        <NavLink
            style={{color:AccentColor, pointerEvents:'none', position:'relative', bottom:-10}}
            to={``}>
            <Text style={styles.title}>
                {props.val}
            </Text>
        </NavLink>
    );
};

const WebButton = (props) => {
    return (
        <TouchableOpacity
            onPress={() => {window.open(props.url)}}
            style={btnStyles.button}
        >
            <View style={btnStyles.content}>
                <Text style={btnStyles.text}>Visit website</Text>
                <Image
                    style={{width: 30, height: 30}}
                    source={require('../assets/hobbies/' + props.img + '.png')}
                />
            </View>
        </TouchableOpacity>
    );
};

const btnStyles = StyleSheet.create({
    button: {
        width: 120,
        height: 35,
        borderRadius: 5,
        backgroundColor: '#DDD',
        shadowColor: '#999',
        shadowOpacity: 0.6,
        shadowRadius: 4,
    },
    content: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        fontFamily: '"Trebuchet MS", Helvetica, sans-serif',
        fontSize: 10,
        color: '#000',
        marginRight: 5,
    },
});

const styles = StyleSheet.create({
    container: {
        width: '100%',
        display: 'flex',
        flexWrap: 'wrap',
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: -40,
    },
    main: {
        maxWidth: 900,
        marginTop: 20,
        marginRight: 10,
    },
    img: {
        minWidth: '400px',
        alignItems: 'center',
        marginTop: 40,
    },
    title: {
        fontSize: 20,
        letterSpacing: 0.7,
    },
    desc: {
        color: '#BBB',
        maxWidth: 750,
        letterSpacing: 0.5,
        lineHeight: 20,
        fontSize: 15,
        textAlign: 'justify',
    },
    header: {
        flex: 1,
        flexDirection: 'row',
        maxWidth: 750,
        alignItems: 'center',
        justifyContent: 'space-between',
    }
});