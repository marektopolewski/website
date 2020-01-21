import React from 'react';
import { StyleSheet, View } from 'react-native';

import Text from './MyText';

export default class Hashtags extends React.Component {
    render() {
        return ( this.props.tags === undefined ? <></> :
            <View style={tagStyles.container}>
                <View style={{flexDirection: 'row'}}>

                    <View style={tagStyles.consoleWrap}>
                        <Text style={[tagStyles.text, tagStyles.user]}>
                            {"hash@tags:"}
                        </Text>
                        <Text style={[tagStyles.text, tagStyles.tilda]}>
                            {"~"}
                        </Text>
                        <Text style={[tagStyles.text]}>
                            {"$"}
                        </Text>
                    </View>

                    <View style={tagStyles.tagsWrap}>
                    { this.props.tags.map(tag => { return (
                        <View key={tag} style={tagStyles.tagsView}>
                            <Text style={[tagStyles.text, tagStyles.tags]}>
                                {" " + tag.toString()}
                            </Text>
                        </View>
                    ); })}
                    </View>

                </View>
            </View>
        );
    }
};

const tagStyles = StyleSheet.create({
    container: {
        maxWidth: 750,
        width: '100%',
    },
    consoleWrap: {
        flexDirection: 'row',
        flexWrap: 'nowrap',
    },
    text: {
        fontFamily: 'monospace',
        color: '#DDD',
        fontSize: '80%',
    },
    user: {
        color: 'rgb(153, 209, 89)',
    },
    tilda: {
        color: 'rgb(120, 150, 180)',
    },
    tagsWrap: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        maxWidth: 'calc(100% - 104px)',
        marginTop: -8,
    },
    tagsView: {
        width: 'fit-content',
        marginTop: 8,
    },
    tags: {
        fontSize: '90%',
    }
});
