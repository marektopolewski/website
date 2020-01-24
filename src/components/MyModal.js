import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { IconContext } from 'react-icons';
import { MdClose } from "react-icons/md";

import Modal from 'react-bootstrap/Modal';
import 'bootstrap/dist/css/bootstrap.min.css';

import Text from './MyText';
import { AccentColor } from '..';

export default class MyModal extends React.Component {    
    render() {
        return (
            <Modal 
                show={this.props.show}
                onHide={this.props.onHide}
            >
            <Modal.Header>
                <View style={styles.header}>
                    <Text style={styles.title}>
                        {this.props.title}
                    </Text>
                </View>
                <View style={styles.closeIcon}>
                    <TouchableOpacity onPress={this.props.onHide}>
                        <IconContext.Provider value={{ color: AccentColor }}>
                            <MdClose size="1.5em"/>
                        </IconContext.Provider>
                    </TouchableOpacity>
                </View>
            </Modal.Header>
            <Modal.Body>
                {this.props.children}
            </Modal.Body>
            <Modal.Footer>
                <TouchableOpacity
                    onPress={this.props.onHide}
                    style={btnStyle.touchOp}
                >
                    <View style={btnStyle.btnContainer}>
                        <Text style={btnStyle.btnText}>Close</Text>
                    </View>
                </TouchableOpacity>
            </Modal.Footer>
            </Modal>
        );
    }
}

const btnStyle = StyleSheet.create({
    touchOp: {
        width: 100,
        height: 35,
        borderRadius: 5,
        backgroundColor: '#FFF',
        shadowColor: '#000',
        shadowOpacity: 0.6,
        shadowRadius: 4,
    },
    btnContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    btnText: {
        fontFamily: '"Trebuchet MS", Helvetica, sans-serif',
        fontSize: '80%',
        color: '#000',
        marginRight: 5,
    },
});

const styles = StyleSheet.create({
    header: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        color: '#000',
        fontSize: '120%',
        fontWeight: 'bold',
        letterSpacing: 1,
        textShadowColor: 'rgba(0, 0, 0, 0)',
        textShadowOffset: {width: 0, height: 0},
        textShadowRadius: 0,
    },
    pdf: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-evenly'
    },
    closeIcon: {
        position: 'absolute', 
        right: 20,
    }
});