import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import ReactTooltip from 'react-tooltip'

import { SocialIcon } from 'react-social-icons';
import { GiMagnifyingGlass } from "react-icons/gi"; 
import { TiDownload } from "react-icons/ti";

import SendEmail from '../components/SendMail'
import { PdfModal, DownloadPdf } from '../components/PdfModal';
import BackgroundImage from '../components/Background'
import Header from '../components/MyHeader';
import Text from '../components/MyText';
import Breakline from '../components/Breakline';
import { Theme } from '..';

import { Document, Page, pdfjs } from 'react-pdf';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const SocialLink = (props) => {
    return (
        <View style={styles.itemContainer}>
            <SocialIcon 
                url={props.url}
                style={{ height: 40, width: 40 }}
                fgColor="#fff"
                target="_blank"
                data-tip="View profile in new tab"
            />
            <Breakline size={5} />
            <Text>{props.title}</Text>
        </View>
    );
}

export default class Contact extends React.Component {
    state = {
        modalOpen1: false,
        modalOpen2: false,
    }

    onOpenPdf1 = () => { this.setState({ modalOpen1: true }); }
    onOpenPdf2 = () => { this.setState({ modalOpen2: true }); }

    onClosePdf1 = () => { this.setState({ modalOpen1: false }); }
    onClosePdf2 = () => { this.setState({ modalOpen2: false }); }

    render() {
        return (
            <>
            <PdfModal 
                isOpen={this.state.modalOpen1}
                onHide={this.onClosePdf1}
                pdf={require("./academic_cv.pdf")}
                pages={['1','2']}
            />
            <PdfModal 
                isOpen={this.state.modalOpen2}
                onHide={this.onClosePdf2}
                pdf={require("./industry_cv.pdf")}
                pages={['1']}
            />

            <BackgroundImage size="50">
                <Header style={{textAlign: 'center'}}>
                    Contact
                </Header>
            </BackgroundImage>

            <View style={styles.pageView}>

                {/**************************** Contact Links ****************************/}
                <View style={styles.linkgroup}>
                    <Social/>
                    <GetInTouch/>
                </View>
                <Breakline size={150}/>

                {/***************************** CV Section *****************************/}
                <Header style={{fontSize: 50}}>
                    CV<Header style={[Theme.accent, {fontSize: 50}]}>.</Header>
                </Header>
                <Breakline size={40}/>
                <View style={styles.cvgroup}>
                    <Cv
                        title="Academic"
                        previewFoo={this.onOpenPdf1}
                        file={"academic_cv.pdf"}
                    />
                    <Cv
                        title="Professional"
                        previewFoo={this.onOpenPdf2}
                        file={"industry_cv.pdf"}
                    />
                </View>
            </View>
            <ReactTooltip />
            </>
        );
    }
}

const Social = () => {
    return (
        <View style={{flexDirection: 'column', marginTop: 50}}>
            <Header style={{fontSize: 40}}>
                Social media<Header style={[Theme.accent, styles.dot]}>.</Header>
            </Header>
            <Breakline size={40}/>
            <View style={styles.linksContainer}>
                <SocialLink title="LinkedIn"
                    url="https://linkedin.com/in/marek-topolewski/"
                />
                <Breakline size={30}/>
                <SocialLink title="GitHub"
                    url="https://github.com/marektopolewski"
                />
            </View>
        </View>
    );
}

const GetInTouch = () => {
    return (
        <View style={{flexDirection: 'column', marginTop: 50}}>
            <Header style={{fontSize: 40}}>
                Get in touch<Header style={[Theme.accent, styles.dot]}>.</Header>
            </Header>
            <Breakline size={40}/>
            <View style={styles.linksContainer}>
                <View style={styles.itemContainer}>
                    <SendEmail />
                </View>
                <Breakline size={30}/>
                <SocialLink title="GitHub"
                    url="https://github.com/marektopolewski"
                />
            </View>
        </View>
    );
}

const Cv = (props) => {
    return (
        <View style={styles.cv}>
            <Text style={{textAlign: 'center'}}>
                {props.title}
                <Text style={[Theme.accent, {fontSize: 25}]}>.</Text>
            </Text>
            <Breakline size={10} />
            <View>
                <Document
                    file={require("./" + props.file)}
                >
                    <View style={styles.pdf}>
                        <Page pageNumber={1} scale={0.4}/>
                    </View>
                </Document>
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
                        action={() => DownloadPdf("/api/" + props.file)}
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
    cv: {
        justifyContent: 'center',
        alignContent: 'center',
        marginTop: 50,
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
