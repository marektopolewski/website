import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { NavLink } from 'react-router-dom';
import ReactTooltip from 'react-tooltip';
import { animateScroll as scroll } from 'react-scroll'

import BackgroundImage from '../components/Background'
import Header from '../components/MyHeader';
import { Theme } from '..';
import Breakline from '../components/Breakline';

export default class EmailPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            fname: '', lname: '',
            affil: '',
            email: '', message: '',
            confirm: true
        }
    }

    confirmHide = (e) => {
        if (this.state.fname === "" && this.state.lname === ""  && this.state.affil === ""
            && this.state.email === "" && this.state.message === "") {
            scroll.scrollToTop();
            return;
        }
        if (window.confirm("\nCareful!\n\nDo you wish to close this form and abandon your changes?\n")) {
            this.setState({ fname: "", lname: "", affil: "", email: "", message: "" });
            scroll.scrollToTop();
            return;
        }
        e.preventDefault();
        e.stopPropagation();
        e.nativeEvent.stopImmediatePropagation();
    }

    handleSubmit = (e) => {
        console.log(this.state);
        var form = document.getElementById("email-form");
        var btn = document.createElement("button");
        btn.setAttribute("type", "submit");
        form.appendChild(btn);
        btn.click();
    }

    render() {
        return (
            <>
            <BigCross onClick={this.confirmHide}/>
            <BackgroundImage size="30">
                <View style={{flexDirection:'column'}}>
                    <View>
                        <Header style={{textAlign:'center', fontSize:30 }}>
                            Contact
                        </Header>
                    </View>
                    <Breakline size={10} />
                    <View>
                        <Header style={{textAlign:'center', fontSize:40 }}>
                        Send<Header style={[Theme.accent, {fontSize:40}]}> e</Header>mail
                        </Header>
                    </View>
                </View>
            </BackgroundImage>

            <View style={[styles.pageView, Theme.content]}>
                <View style={styles.form}>
                    <View>
                        <p className="h5 mb-4 bright">Your information</p>
                    </View>
                    {/* row 1 - Name */}
                    <form className="needs-validation" id="email-form" action="../assets/test-src.php" method="post">
                        <div className="form-row mb-4">
                            <div className="col mb-3 input-group">
                                <div className="input-group-prepend">
                                    <span className="input-group-text" id="fnamePre">First name</span>
                                </div>
                                <input type="text" className="form-control" id="fname" aria-describedby="fnamePre" required
                                    placeholder="Your first name"
                                    value={this.state.fname}
                                    onChange={e => this.setState({ fname: e.target.value })}
                                />
                            </div>
                            <div className="col mb-3 input-group">
                                <div className="input-group-prepend">
                                    <span className="input-group-text" id="lnamePre">Last name</span>
                                </div>
                                <input type="text" className="form-control" id="lname" aria-describedby="lnamePre" required
                                    placeholder="Your last name"
                                    value={this.state.lname}
                                    onChange={e => this.setState({ lname: e.target.value })}
                                />
                            </div>
                         </div>
                        {/* row 2 - Affiliation */}
                        <div className="form-row mb-4 nomargin">
                                <div className="col-md-12 mb-3 input-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text" id="affilPre">Affiliation</span>
                                    </div>
                                    <input type="text" className="form-control" id="affil" aria-describedby="affilPre"
                                        placeholder="Company, university, group..."
                                        value={this.state.affil}
                                        onChange={e => this.setState({ affil: e.target.value })}
                                    />
                                    <div className="input-group-append">
                                        <span className="input-group-text append-form" id="">(optional)</span>
                                    </div>
                                </div>
                        </div>

                        <p className="h5 mb-4 bright">Email</p>
                        {/* row 3 - Email */}
                        <div className="form-row mb-4">
                            <div className="col-md-8 mb-3 input-group wide">
                                <div className="input-group-prepend">
                                    <span className="input-group-text" id="emailPre">Email address</span>
                                </div>
                                <input type="text" className="form-control" id="email" aria-describedby="emailPre" required
                                    placeholder="Your email address"
                                    value={this.state.email}
                                    onChange={e => this.setState({ email: e.target.value })}
                                />
                            </div>
                            <div className="col-md-4 mb-3 send-confirm">
                                <label className="customcheck" style={{top: '7px', margin: '0 20px 0 20px'}}>
                                    Send me a confirmation email
                                    <input type="checkbox"
                                        checked={this.state.confirm}
                                        onChange={e => this.setState({ confirm: e.target.checked })}
                                    />
                                    <span className="checkmark"></span>
                                </label>
                            </div>
                        </div>
                        {/* row 4 - Message */}
                        <div className="form-group col-md-12 mb-3 text-area">
                            <textarea className="form-control" id="message" rows="10" required
                                placeholder="Type your message here"
                                value={this.state.message}
                                onChange={e => this.setState({ message: e.target.value })}
                            />
                        </div>
                    </form>
                    <Breakline size={20} />

                    <View style={styles.footerBtns}>
                        <NavLink 
                            strict exact to={'/contact'} key={'/contact'}
                            style={{color: '#000', width: 'fit-content', textDecoration: 'none'}}
                            onClick={e => this.confirmHide(e)}
                        >
                            <TouchableOpacity
                                style={[btnStyle.touchOp, btnStyle.whiteBtn]}
                            >
                                <View style={btnStyle.btnContainer}>
                                    <Text style={btnStyle.btnText}>Close</Text>
                                </View>
                            </TouchableOpacity>
                        </NavLink>
                        <TouchableOpacity
                            style={[btnStyle.touchOp, btnStyle.greenBtn]}
                            onClick={() => this.handleSubmit()}
                        >
                            <View style={btnStyle.btnContainer}>
                                <Text style={btnStyle.btnText}>Send</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
            <ReactTooltip />
            </>
        );
    }
}

const BigCross = (props) => {
    return (
        <NavLink 
            strict exact to={'/contact'} key={'/contact'}
            style={{color: '#000', width: 'fit-content', textDecoration: 'none'}}
            onClick={e => props.onClick(e)}
            data-tip="Cancel"
        >
            <span style={{
                position: 'fixed',
                width: '42px', height: '42px',
                left: '100px', top: '48px',
                zIndex: 500,
            }} >
                <span className="bm-burger-bars rotate1" style={{position:'absolute', height:'20%', left:0, right:0, top:0, opacity:1}}></span>
                <span className="bm-burger-bars rotate2" style={{position:'absolute', height:'20%', left:0, right:0, top:0, opacity:1}}></span>
        </span>
        </NavLink>
    );
}

const styles = StyleSheet.create({
    pageView: {
        paddingTop: '5vh',
        paddingBottom: '20vh',
        paddingHorizontal: '20vw',
    },
    footerBtns: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
    }
});

const btnStyle = StyleSheet.create({
    touchOp: {
        width: 100,
        height: 35,
        borderRadius: 5,
        shadowOpacity: 0.6,
        shadowRadius: 4,
    },
    whiteBtn: {
        backgroundColor: '#FFF',
        shadowColor: '#000',
    },
    greenBtn: {
        backgroundColor: '#02cf32',
        shadowColor: '#000',
    },
    btnContainer: {
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
