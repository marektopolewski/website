import React from 'react';
import StickyFooter from 'react-sticky-footer';
import { Text } from 'react-native'

export default class Footer extends React.Component {
    render() {
        return (
            <div className="footer">
                <StickyFooter
                    normalStyles={{
                        backgroundColor: "#999",
                        padding: "20px",
                        textAlign: "center"
                    }}
                >
                    <Text className="unselectable">	&laquo; PROUDLY &raquo;  POWERED BY </Text>
                    <Text className="unselectable" style={{color: '#aa0505'}}>MYSELF</Text>
                </StickyFooter>
            </div>
        );
    }
}