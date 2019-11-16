import React from 'react';
import { View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { NavLink } from 'react-router-dom';

import Text from './MyText';
import { AccentColor } from '..';

export default class ProjectItem extends React.Component {
    render() {
        return (
            <View style={styles.row}>
                <View style={styles.main}>
                    <View style={styles.header}>
                        <ProjectTitle val={this.props.title} />
                        <GitButton 
                            url={this.props.url}
                        />
                    </View>
                    <Text style={styles.desc}>
                        { this.props.children }
                    </Text>
                </View>
                <img
                    className="proj-thumbnail"
                    src={require(`../assets/${this.props.img.toLowerCase()}`)}
                    alt="File not found"
                />
            </View>
        );
    }
}

const ProjectTitle = (props) => {
    return (
        <NavLink style={{color: AccentColor, pointerEvents: 'none'}} to={``}>
            <Text style={styles.title}>
                {props.val}
            </Text>
        </NavLink>
    );
};

const GitButton = (props) => {
    return (
        <TouchableOpacity
            onPress={() => {window.open(props.url)}}
            style={gitStyles.button}
        >
            <View style={gitStyles.content}>
                <Text style={gitStyles.text}>View on GitHub</Text>
                <Image
                    style={{width: 25, height: 25}}
                    source={require('../assets/github.png')}
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
        fontSize: 10,
        color: '#000',
        marginRight: 5,
    },
});

const styles = StyleSheet.create({
    main: {
        flex: 1,
        paddingRight: 60,
    },
    title: {
        fontSize: 20,
        letterSpacing: 0.7,
    },
    desc: {
        color: '#BBB',
        letterSpacing: 0.5,
        lineHeight: 20,
        fontSize: 15,
        textAlign: 'justify',
    },
    row: {
        flex: 1,
        flexDirection: 'row',
    },
    header: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    }
});