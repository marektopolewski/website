import React from 'react';
import { View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { NavLink } from 'react-router-dom';

import Breakline from './Breakline';
import Text from './MyText';
import Hashtags from './Hashtags';
import { AccentColor } from '..';

export default class ProjectItem extends React.Component {

    constructor(props) {
        super(props);
        this.state = { width: window.innerWidth };
    }

    componentDidMount() { window.addEventListener('resize', this.handleResize) }
    componentWillUnmount() { window.removeEventListener('resize', this.handleResize) }
    handleResize = () => { this.setState({ width: window.innerWidth }) }

    render() {
        var show = this.props.filtered === undefined || this.props.filtered;
        return ( !show ? <></> :
            <>
            <View style={styles.container}>
                <View style={styles.main}>
                    <View style={styles.header}>
                        <ProjectTitle val={this.props.title} />
                        <GitButton
                            url={this.props.url}
                        />
                    </View>
                    <Breakline size={20} />
                    <Text style={styles.desc}>
                        { this.props.children }
                    </Text>
                    <Breakline size={10} />
                    <Hashtags tags={this.props.tags} />
                </View>
                <View style={styles.img}>
                    <Image
                        className="simple-thumbnail"
                        source={require(`../assets/projects/${this.props.img.toLowerCase()}`)}
                        accessibilityLabel="File not found"
                        resizeMode="contain"
                        style={{
                            width: this.state.width < 240 ? this.state.width * 0.6 : 240,
                            height: 240
                        }}
                    />
                </View>
            </View>
            <Breakline size={120}/>
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

const GitButton = (props) => {
    const onPressFoo = props.url ? () => {window.open(props.url)} : () => {};
    const buttonText = props.url ? "View on GitHub" : "Repo is private";
    return (
        <TouchableOpacity
            onPress={onPressFoo}
            style={gitStyles.button}
        >
            <View style={gitStyles.content}>
                <Text style={gitStyles.text}>{buttonText}</Text>
                <Image
                    style={{width: 25, height: 25}}
                    source={require('../assets/projects/github.png')}
                />
            </View>
        </TouchableOpacity>
    );
};

const gitStyles = StyleSheet.create({
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
        fontSize: '65%',
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
        marginTop: -20,
    },
    main: {
        width: '50vw',
        minWidth: 300,
        maxWidth: 900,
        marginTop: 20,
        marginRight: 10,
    },
    img: {
        minWidth: '400px',
        alignItems: 'center',
        marginTop: 20,
    },
    title: {
        fontSize: '130%',
        letterSpacing: 0.7,
    },
    desc: {
        color: '#BBB',
        maxWidth: 750,
        letterSpacing: 0.5,
        lineHeight: 20,
        fontSize: '90%',
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