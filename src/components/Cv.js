import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';

import { GiMagnifyingGlass } from "react-icons/gi"; 
import { TiDownload } from "react-icons/ti";

import { DownloadPdf } from '../components/PdfModal';
import Text from '../components/MyText';
import Breakline from '../components/Breakline';
import { Theme } from '..';

export const Thumbnail = (props) => {
    return (
        <View style={cvStyles.container}>
            <Text style={{textAlign: 'center'}}>
                {props.title}
                <Text style={[Theme.accent, {fontSize: 25}]}>.</Text>
            </Text>
            <Breakline size={10} />
            <View>
                <View style={styles.pdf}>
                    <img
                        className="cv-thumbnail"
                        src={require(`../assets/${props.file}.jpg`)}
                        alt="CV thumbnail not found"
                    />
                </View>
                <View style={cvStyles.buttons}>
                    <CvButton
                        text="Preview"
                        action={props.previewFoo}
                    >
                        <GiMagnifyingGlass/>
                    </CvButton>
                    <Breakline size={10}/>
                    <CvButton
                        text="Download"
                        action={() => DownloadPdf("/api/" + props.file + ".pdf")}
                    >
                        <TiDownload/>
                    </CvButton>
                </View>
            </View>
        </View>
    );
}

const CvButton = (props) => {
    return (
        <TouchableOpacity
            onPress={props.action}
            style={cvStyles.btn}
        >
            <View style={cvStyles.btnLabel}>
                <Text style={cvStyles.btnText}>{props.text}</Text>
                {props.children}
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    pageView: {
        paddingVertical: '20vh',
        paddingHorizontal: '10vw',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    linkgroup: {
        marginTop: -50, // add flex wrap space
        flex: 1,
        width: '60vw',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-evenly',
    },
    linksContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
    },
    itemContainer: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 20,
    },
    cvgroup: {
        marginTop: -50, // add flex wrap space
        flex: 1,
        width: '40vw',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-evenly',
    },
    pdf: {
        shadowColor: '#DDD',
        shadowOpacity: 0.4,
        shadowRadius: 5,
    },
    dot: {
        fontSize: 50,
        marginTop: 5,
        marginLeft: 4,
    }
});

const cvStyles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignContent: 'center',
        marginTop: 50,
    },
    buttons: {
        position: 'absolute',
        flex: 1,
        flexDirection: 'column',
        bottom: 5,
        right: 5,
    },
    btn: {
        width: 120,
        height: 35,
        borderRadius: 5,
        backgroundColor: '#DDD',
        shadowColor: '#000',
        shadowOpacity: 0.6,
        shadowRadius: 4,
    },
    btnLabel: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    btnText: {
        fontFamily: '"Trebuchet MS", Helvetica, sans-serif',
        fontSize: 12,
        color: '#000',
        marginRight: 5,
    },
});
