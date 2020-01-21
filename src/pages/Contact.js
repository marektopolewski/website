import React from 'react';
import { View, StyleSheet } from 'react-native';
import ReactTooltip from 'react-tooltip'

import { SocialIcon } from 'react-social-icons';

import EmailButton from '../components/SendEmail'
import { PdfModal } from '../components/PdfModal';
import { Thumbnail as Cv } from '../components/Cv';
import BackgroundImage from '../components/Background'
import Header from '../components/MyHeader';
import Text from '../components/MyText';
import Breakline from '../components/Breakline';
import { Theme } from '..';

import { } from 'react-pdf/dist/entry.webpack';

const SocialLink = (props) => {
    return (
        <View style={styles.itemContainer}>
            <SocialIcon 
                url={props.url}
                style={{ height: 40, width: 40 }}
                fgColor="#fff"
                target="_blank"
                data-tip="View profile in a new tab"
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
        loadedCnt: 0,
    }

    onLoadedPdf = () => {
        this.setState({ loadedCnt: this.state.loadedCnt+1 });
        if (this.state.loadedCnt+1 >= 2) {
            this.props.loading(false);
        }
    }

    onOpenPdf1 = () => {
        this.onPdfLoadStart();
        this.setState({ modalOpen1: true });
    }
    onOpenPdf2 = () => {
        this.onPdfLoadStart();
        this.setState({ modalOpen2: true });
    }

    onCloseModal1 = () => {
        this.setState({ modalOpen1: false });
        this.onPdfLoadDone();
    }
    onCloseModal2 = () => {
        this.setState({ modalOpen2: false });
        this.onPdfLoadDone();
    }

    onPdfLoadStart = () => {
        this.props.delay(1000);
        this.props.loading(true);
    }
    onPdfLoadDone = () => {
        this.props.delay(undefined);
        this.props.loading(false);
    }

    render() {
        return (
            <>
            <PdfModal 
                isOpen={this.state.modalOpen1}
                onHide={this.onCloseModal1}
                onPdfLoaded={this.onPdfLoadDone}
                pdf={require("./pdfs/academic.pdf")}
                pages={['1','2']}
            />
            <PdfModal 
                isOpen={this.state.modalOpen2}
                onHide={this.onCloseModal2}
                onPdfLoaded={this.onPdfLoadDone}
                pdf={require("./pdfs/professional.pdf")}
                pages={['1']}
            />

            <BackgroundImage size="60">
                <Header style={{textAlign: 'center'}}>
                    Contact
                </Header>
            </BackgroundImage>

            <View style={[styles.pageView, Theme.content]}>

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
                    <View style={{marginLeft: 20}}>
                    <Cv
                        title="Academic"
                        previewFoo={this.onOpenPdf1}
                        file={"academic"}
                        onSuccess={() => this.onLoadedPdf()}
                    />
                    </View>
                    <View style={{marginLeft: 20}}>
                    <Cv
                        title="Professional"
                        previewFoo={this.onOpenPdf2}
                        file={"professional"}
                        onSuccess={() => this.onLoadedPdf()}
                    />
                    </View>
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
                    <EmailButton />
                </View>
            </View>
        </View>
    );
}

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
        marginLeft: -55,
    },
    itemContainer: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 40,
    },
    cvgroup: {
        marginTop: -50, // add flex wrap space
        marginLeft: -20,
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
