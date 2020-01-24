import React from 'react';
import { View, StyleSheet } from 'react-native';

import Breakline from './Breakline';
import Text from './MyText';
import Hashtags from './Hashtags';

export default class ExperienceItem extends React.Component {
    render() {
        return (
            <>
            <View style={styles.container}>
                <View style={styles.main}>
                    <View style={styles.header}>
                        <CompanyAndTitle company={this.props.company} title={this.props.title} />
                        <Dates from={this.props.from} to={this.props.to} />
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
                    className="simple-thumbnail"
                    src={require(`../assets/experience/${this.props.img.toLowerCase()}`)}
                    alt="File not found"
                />
                </View>
            </View>
            <Breakline size={120}/>
            </>
        );
    }
}

const CompanyAndTitle = (props) => {
    return (
        <View style={{flexDirection: "column"}}>
            <Text style={styles.company}>{props.company}</Text>
            <Text style={styles.title}>{props.title}</Text>
        </View>
    );
};

const Dates = (props) => {
    var from = props.from;
    var to = props.to !== "" ? props.to : "Present";
    return (
        <View style={{ minWidth: 'fit-content', marginTop: '1em' }}>
            <Text style={styles.dates}>{from} - {to}</Text>
        </View>
    );
};

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
    company: {
        fontSize: '150%',
        letterSpacing: 0.7,
    },
    title: {
        fontSize: '120%',
        letterSpacing: 0.7,
    },
    dates: {
        flex: 1,
        fontSize: '100%',
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
        flexWrap: 'wrap',
        maxWidth: 750,
        alignItems: 'center',
        justifyContent: 'space-between',
    }
});