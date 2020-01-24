import React from 'react';
import { View, StyleSheet, Image, TouchableOpacity } from 'react-native';

import ImageGallery from 'react-image-gallery';
import ReactPlayer from 'react-player';
import "react-image-gallery/styles/css/image-gallery.css";

import Breakline from './Breakline';
import Text from './MyText';
import { MobileWidth } from '..';

export default class WithVideoItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            width: window.innerWidth,
            galleryOpen: false,
        };
    }

    componentDidMount() { window.addEventListener('resize', this.handleResize) }
    componentWillUnmount() {  window.removeEventListener('resize', this.handleResize) }
    handleResize = () => { this.setState({ width: window.innerWidth }); };

    render() {
        return (
            <>
            <View style={styles.container}>
                <View style={[styles.main, {width: this.state.width < MobileWidth ? '95%' : '60%'}]}>
                    <View style={styles.header}>
                        <Text style={styles.title}>
                            {this.props.title} 
                        </Text>
                        <VidButton 
                            desc={this.props.btnDesc} img={this.props.btnImg}
                            onClick={() => this.setState({ galleryOpen: !this.state.galleryOpen })}
                            galleryOpen={this.state.galleryOpen}
                        />
                    </View>
                    <Breakline size={20} />
                    <Text style={styles.desc}>
                        <Gallery visible={this.state.galleryOpen} />
                        { this.props.children }
                    </Text>
                </View>
                <View>
                    <View style={styles.img}>
                        <img
                            className="simple-thumbnail"
                            src={require(`../assets/hobbies/${this.props.img1.toLowerCase()}`)}
                            alt="File not found"
                        />
                    </View>
                    { (this.props.img2 !== undefined) ?
                    <View style={styles.img}>
                        <img
                            className="simple-thumbnail"
                            src={require(`../assets/hobbies/${this.props.img2.toLowerCase()}`)}
                            alt="File not found"
                        />
                    </View> : <></>}
                </View>
            </View>
            </>
        );
    }
}

class Gallery extends React.Component {
    render() {
        return ( this.props.visible ?
            <>
                <ImageGallery
                    showFullscreenButton={false} showThumbnails={false}
                    showPlayButton={false} showIndex={true}
                    items={[ 
                        { original: require('../assets/hobbies/gallery/img0.jpeg') },
                        { original: 'vid0', renderItem: () => video("vid0") },
                        { original: require('../assets/hobbies/gallery/img1.jpeg') },
                        { original: 'vid1', renderItem: () => video("vid1") },
                        { original: require('../assets/hobbies/gallery/img2.jpeg') },
                        { original: 'vid2', renderItem: () => video("vid2") },
                    ]}
                />
                <Breakline size={50} />
            </>
            : <></> )
    }
}

function video(url) {
    return (
        <View style={{height: '50vh', width: '100%', justifyContent: 'center', alignItems: 'center'}}>
            <ReactPlayer
                className='react-player' playing loop muted
                url={require('../assets/hobbies/gallery/'+url+'.mp4')}
                width='100%' height='100%'
            />
        </View>
    );
}

const VidButton = (props) => {
    return (
        <TouchableOpacity
            onPress={() => props.onClick()}
            style={btnStyles.button}
        >
            <View style={btnStyles.content}>
                <Text style={btnStyles.text}>{props.galleryOpen ? "Close gallery" : "Open gallery"}</Text>
                <Image
                    style={{width: 30, height: 30}}
                    source={require('../assets/hobbies/movie_icon.png')}
                />
            </View>
        </TouchableOpacity>
    );
};

const btnStyles = StyleSheet.create({
    button: {
        width: 120,
        height: 35,
        borderRadius: 5,
        backgroundColor: '#DDD',
        shadowColor: '#999',
        shadowOpacity: 0.6,
        shadowRadius: 4,
    },
    content: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        fontFamily: '"Trebuchet MS", Helvetica, sans-serif',
        fontSize: '60%',
        color: '#000',
        marginRight: 5,
    },
});

const styles = StyleSheet.create({
    container: {
        width: '100%',
        display: 'flex',
        flexWrap: 'wrap',
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: -40,
    },
    main: {
        maxWidth: 900,
        marginTop: 20,
        marginRight: 10,
    },
    img: {
        minWidth: '400px',
        alignItems: 'center',
        marginTop: 40,
    },
    title: {
        fontSize: '130%',
        letterSpacing: 0.7,
    },
    desc: {
        color: '#BBB',
        maxWidth: 750,
        letterSpacing: 0.5,
        lineHeight: "140%",
        fontSize: "100%",
        textAlign: 'justify',
    },
    header: {
        flexDirection: 'row',
        maxWidth: 750,
        alignItems: 'center',
        justifyContent: 'space-between',
    }
});