import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

import LoadingOverlay from 'react-loading-overlay'
import ScaleLoader from 'react-spinners/ScaleLoader'

export default class MyLoadOverlay extends React.Component {
    state = {
        active: false,
        startTime: 0,
        deactivate: () => { this.setState({active: false}) }
    }

    static getDerivedStateFromProps(props, state) {
        if (props.active && !state.active) {
            return {
                active: true,
                startTime: Date.now()
            };
        }
        else if (!props.active && state.active) {
            let delay = 3000 - (Date.now()-state.startTime);
            setTimeout(() => state.deactivate(), delay);
            return null;
        }
    }

    render() {
        return(
            <LoadingOverlay 
                active={this.state.active} 
                spinner={<ScaleLoader
                    height={150}
                    width={15}
                    margin="10px"
                    color={'#FFF'}
                />}
                styles={{
                    overlay: (base) => ({
                        ...base,
                        background: 'radial-gradient(circle, rgba(0,0,0,1) 10%, rgba(0,0,0,0.91) 50%, rgba(0,0,0,0.945) 100%)',
                        position: 'fixed',
                    })
                }}
                text={<LoadingMg/>}
            >
                {this.props.children}
            </LoadingOverlay>
        );
    }
}

const LoadingMg = () => {
    return (
        <View>
            <Text style={styles.msg} >
                <span role="img" aria-label="x">🦸‍♀️ </span>
                teaching the neural net
                <span role="img" aria-label="x"> 🦸‍♂️</span>
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    msg: {
        color: '#FFF',
        fontSize: 40,
        paddingTop: 50,
        fontFamily: "Marker Felt, fantasy",
        letterSpacing: 2,
    },
    spinner: {
        display: 'block',
        margin: '0 auto',
        borderColor: 'red',
    }
})
