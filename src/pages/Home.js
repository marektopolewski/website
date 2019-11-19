import React from 'react';
import { View } from 'react-native';
import { toast, Flip } from 'react-toastify';
import { FaAngleDoubleDown } from "react-icons/fa";
import { css } from 'glamor';

import Bio from '../components/Bio'
import Header from '../components/MyHeader';
import BackgroundImage from '../components/Background';
import { Theme } from '..';

export default class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cntY: window.innerHeight * 2,
            showTip: false,
        };
    }

    componentDidMount() { this.setState({showTip: true }); }

    render() {
        return (
            <>
            <View>
                <BackgroundImage size="100">
                    <Header>Mar</Header>
                    <Header style={Theme.accent}>e</Header>
                    <Header>k Topol</Header>
                    <Header style={Theme.accent}>e</Header>
                    <Header>wski</Header>
                </BackgroundImage>
                <ScrollDownTip show={this.state.showTip} cntY={this.state.cntY} />
            </View>
            <Bio
                style={Theme.content}
                cb={(y) => this.setState({cntY: y})}
            />
            </>
        );
    }
}

const ScrollDownTip = (props) => {
    let Tip = () => { return(
        <View style={{ flexDirection: "row", justifyContent: "center", alignItems: "center"}}>
            <FaAngleDoubleDown style={{marginRight: 10}} />
            <>Scroll down to read more..</>
        </View>
    ); }
    if (props.show)
    {
        let windowY = () => { return window.scrollY + window.innerHeight; };
        let contentY =  () => { return 1.1 * props.cntY; };
        if (windowY() < contentY()) {
            let toastId = toast(<Tip />, {
                position: "bottom-center",
                autoClose: 4000,
                transition: Flip,
                hideProgressBar: true,
                draggable: false,
                className: css({
                    background: "#111 !important",
                    border: "#AAA 0.5px solid",
                }),
            });
            window.addEventListener('scroll', () => {
                if (windowY() > contentY()) {
                    toast.update(toastId, { render: "", type:toast.TYPE.INFO, autoClose:1 });
                }
            }, true);
        }
    }
    return <></>;
}
