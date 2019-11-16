import React from 'react';
import { Text, View } from 'react-native'

export default class Footer extends React.Component {
    render() {
        return (
            <div className="footer">
                <View
                    style={{
                        flexDirection: 'row',
                        justifyContent: "center",
                        backgroundColor: "#222",
                        padding: "20px",
                    }}
                >
                    <Text className="unselectable" style={{color: '#FFF'}}>Proudly powered by </Text>
                    <Text className="unselectable" style={{color: '#AA0505'}}>me </Text>
                    <Text className="unselectable" style={{color: '#FFF'}}>:)</Text>
                </View>
            </div>
        );
    }
}