import React from 'react';
import StickyFooter from 'react-sticky-footer';
import { Text } from 'react-native'

export default class Footer extends React.Component {
    render() {
        return (
            <div className="footer">
                <StickyFooter
                    normalStyles={{
                        backgroundColor: "#222",
                        padding: "20px",
                        textAlign: "center"
                    }}
                >
                    <Text className="unselectable" style={{color: '#FFF'}}>Proudly powered by </Text>
                    <Text className="unselectable" style={{color: '#AA0505'}}>me </Text>
                    <Text className="unselectable" style={{color: '#FFF'}}>:)</Text>
                </StickyFooter>
            </div>
        );
    }
}