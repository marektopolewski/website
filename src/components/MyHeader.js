import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { MobileWidth } from '..';

export default class MyHeader extends React.Component {

    constructor(props) {
        super(props);
        this.state = { width: window.innerWidth };
    }
    
    componentDidMount() { window.addEventListener('resize', this.handleResize) }
    componentWillUnmount() { window.removeEventListener('resize', this.handleResize) }
    handleResize = () => { this.setState({ width: window.innerWidth }) }

    render() {
        var fs = this.props.style === undefined || this.props.style.fontSize === undefined 
               ? 70 : this.props.style.fontSize;
        return (
            <Text className="unselectable" style={[
                styles.defaultHeaderStyle,
                this.props.style,
                { fontSize: this.state.width < MobileWidth ? fs/1.5 : fs },
            ]}>
                {this.props.children}
            </Text>
        );
    }
}

const styles = StyleSheet.create({
    defaultHeaderStyle: {
        color: '#FFF',
        fontFamily: `Palatino, "Palatino LT STD", "Palatino Linotype", "Book Antiqua", Georgia, serif`,
        fontWeight: 'bold',
        textShadowColor: 'rgba(0, 0, 0, 1)',
        textShadowOffset: {width: -1, height: 1},
        textShadowRadius: 20,
    },
});
