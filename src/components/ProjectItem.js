import React from 'react';
import { View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { NavLink } from 'react-router-dom';

import Breakline from './Breakline';
import Text from './MyText';
import { AccentColor } from '..';

export default class ProjectItem extends React.Component {
    render() {
        return (
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
                <img
                    className="proj-thumbnail"
                    src={require(`../assets/${this.props.img.toLowerCase()}`)}
                    alt="File not found"
                />
                </View>
            </View>
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

const Hashtags = (props) => {
    if (props.tags === undefined)
        return (<></>);
    return (
        <View style={tagStyles.container}>
            <Text style={tagStyles.text}>
                <Text style={[tagStyles.text, tagStyles.user]}>
                    {"hash@tags:"}
                </Text>
                <Text style={[tagStyles.text, tagStyles.tilda]}>
                    {"~"}
                </Text>
                <Text style={[tagStyles.text]}>
                    {"$"}
                </Text>
                <Text style={[tagStyles.text, tagStyles.tags]}>
                { props.tags.map(tag => {return " " + tag.toString()}) }
                </Text>
            </Text>
        </View>
    );
};

const tagStyles = StyleSheet.create({
    container: {
        maxWidth: 750,
        flexDirection: 'row-reverse',
    },
    text: {
        fontFamily: 'monospace',
        color: '#DDD',
        fontSize: 12,
    },
    user: {
        color: 'rgb(153, 209, 89)',
    },
    tilda: {
        color: 'rgb(120, 150, 180)',
    },
    tags: {
        fontSize: 14,
    }
});

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