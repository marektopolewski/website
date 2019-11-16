import React from 'react';
import { View, StyleSheet, TouchableOpacity, Image } from 'react-native';

import ReactTooltip from 'react-tooltip'
import { ToastContainer, toast, Flip } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { SocialIcon } from 'react-social-icons';
import { GiMagnifyingGlass } from "react-icons/gi"; 
import { TiDownload } from "react-icons/ti";

import PdfModal from '../components/MyModal';
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
            />
            <Breakline size={5} />
            <Text>{props.title}</Text>
        </View>
    );
}

const EmailLink = (props) => {
    return (
        <View style={styles.itemContainer}>
            <TouchableOpacity
                onPress={() => props.onPress(props.url)}
                data-tip="Copy to clipboard"
            >
                <Image
                    style={{width: 40, height: 40}}
                    source={require('../assets/gmail.png')}
                />
            </TouchableOpacity>
            <Breakline size={5} />
            <Text>{props.title}</Text>
        </View>
    );
}

export default class Contact extends React.Component {
    state = {
        numPages: null,
        pageNumber: 1,
        modalOpen: false,
    }

    closeModal = () => { this.setState({ modalOpen: false }); }
    openModal = () => { this.setState({ modalOpen: true }); }
    
    onDocumentLoadSuccess = ({ numPages }) => {
        this.setState({ numPages });
    }

    onDownloadRequested = (url) => {
        const link = document.createElement('a');
        link.href = url;
        link.target = '_blank';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }

    onPreviewRequested = () => { this.openModal(); }

    render() {
        return (
            <>
            <PdfModal 
                isOpen={this.state.modalOpen}
                onHide={this.closeModal}
                pdf={require("./academic_cv.pdf")}
            />
            <BackgroundImage size="50">
                <Header style={{textAlign: 'center'}}>
                    Contact
                </Header>
            </BackgroundImage>
            <View style={styles.pageView}>

                <View style={styles.linkgroup}>
                    <Social/>
                    <GetInTouch onCopied={this.emailCopied} />
                </View>

                <Breakline size={150}/>

                <Header style={{fontSize: 50}}>
                    CV<Header style={[Theme.accent, {fontSize: 50}]}>.</Header>
                </Header>
                <Breakline size={40}/>
                <View style={styles.cv}>
                    <Document
                        file={require("./academic_cv.pdf")}
                        onLoadSuccess={this.onDocumentLoadSuccess}
                    >
                        <View style={styles.pdf}>
                            <Page pageNumber={this.state.pageNumber} scale={0.4}/>
                        </View>
                    </Document>
                    <View style={cvStyles.buttons}>
                        <CvButton
                            text="Preview"
                            action={this.onPreviewRequested}
                        >
                            <GiMagnifyingGlass/>
                        </CvButton>
                        <Breakline size={20}/>
                        <CvButton
                            text="Download"
                            action={() => this.onDownloadRequested("/api/academic_cv.pdf")}
                        >
                            <TiDownload/>
                        </CvButton>
                    </View>
                </View>
            </View>
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
    const sendMail = (email) => {
        const link = document.createElement('a');
        link.href = 'mailto:'+email;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        copyToClipboard(email);
        toast.info(email, {autoClose: 3000, transition: Flip});
        toast.info("Email copied to clipboard.", {autoClose: 2000, transition: Flip});
    }
    return (
        <View style={{flexDirection: 'column', marginTop: 50}}>
            <Header style={{fontSize: 40}}>
                Get in touch<Header style={[Theme.accent, styles.dot]}>.</Header>
            </Header>
            <Breakline size={40}/>
            <View style={styles.linksContainer}>
                <EmailLink title="Email"
                    url="marek.topolewski@gmail.com"
                    onPress={sendMail}
                />
                <Breakline size={30}/>
                <SocialLink title="GitHub"
                    url="https://github.com/marektopolewski"
                />
            </View>
            <ReactTooltip />
            <ToastContainer />
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
    cv: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignContent: 'center'
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
        flex: 1,
        flexDirection: 'column',
        marginLeft: 20,
        marginTop: 10,
    },
    btn: {
        width: 120,
        height: 35,
        borderRadius: 5,
        backgroundColor: '#DDD',
        shadowColor: '#999',
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

function copyToClipboard (str) {
    // Create new element
    var el = document.createElement('textarea');
    // Set value (string to be copied)
    el.value = str;
    // Set non-editable to avoid focus and move outside of view
    el.setAttribute('readonly', '');
    el.style = {position: 'absolute', left: '-9999px'};
    document.body.appendChild(el);
    // Select text inside element
    el.select();
    // Copy text to clipboard
    document.execCommand('copy');
    // Remove temporary element
    document.body.removeChild(el);
 }
 