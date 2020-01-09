import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { NavLink, Prompt } from 'react-router-dom';
import ReactTooltip from 'react-tooltip';
import { animateScroll as scroll } from 'react-scroll'
import ReCAPTCHA from "react-google-recaptcha";

import $ from 'jquery'

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import BackgroundImage from '../components/Background'
import Header from '../components/MyHeader';
import { Theme, MobileWidth } from '..';
import Breakline from '../components/Breakline';

export default class EmailPage extends React.Component {

    constructor(props) {
        super(props);
        this.recaptchaRef = React.createRef();
        this.state = {
            fname: '', lname: '',
            affil: '',
            email: '', message: '',
            confirm: true,
            sendValid: { fname: true, lname: true, affil: true, email: true, message: true },
            regex: { fname: true, lname: true, email: true },
            currValid: { fname: true, lname: true, affil: true, email: true, message: true },
            recaptcha: false,
            width: window.innerWidth,
        }
    }

    clearForm() {
        this.setState({ fname: "", lname: "", affil: "", email: "", message: "",
                        sendValid: this.setValid(this.state.sendValid, undefined, undefined, true),
                        currValid: this.setValid(this.state.currValid, undefined, undefined, true) });
    }
    leaveForm() { this.clearForm(); window.open("/contact", "_self"); }

    componentWillUnmount() {
        window.removeEventListener('resize', () => this.setState({ width: window.innerWidth }));
        this.clearForm();
        scroll.scrollToTop();
    }
    componentDidMount() {
        window.addEventListener('resize', () => this.setState({ width: window.innerWidth }));
        this.recaptchaRef.current.execute();
    }

    valueChange = (e) => {
        var id = e.target.id;
        var val = e.target.value;
        this.setState({ [id]: val });
        if (!this.state.sendValid[id]) {
            var temp;
            if (val !== "") {
                temp = this.setValid(this.state.currValid, id, true);
            }
            else
                temp = this.setValid(this.state.currValid, id, false);

            this.setState({ currValid: temp });
        }
    }
    checkedChange = (e) => { this.setState({ confirm: e.target.checked }); }

    setValid = (array, key, value, defval) => {
        if (array === undefined) return;
        var obj = {};
        Object.entries(array).forEach(([k,v]) => {
            if (k === key) obj[k] = value;
            else obj[k] = defval === undefined ? v : true;
        });
        return obj;
    }

    handleClick = () => {
        if (!this.state.recaptcha) {
            this.setState({ recaptcha: false });
            this.recaptchaRef.current.reset();
            this.recaptchaRef.current.execute();
        }
        else
            this.handleSubmit();
    }

    onReCaptchaChange = (val, submit) => {
        if (val === null || val === undefined || val === "")
            return;
        this.setState({ recaptcha: true });
        if (submit === true)
            this.handleSubmit();
    }

    handleSubmit = () => {
        var errFound = false;
        var updatedValid = {};
        this.setState({ regex: this.setValid(this.state.regex, undefined, undefined, true) });
        Object.entries(this.state.sendValid).forEach(([field,_]) => {
            var obj = $("#"+field);
            var objValid = true;
            if (field === "affil") ;
            else if ((this.state[field].length === 0)) {
                objValid = false;
                obj.attr('data-tip', 'This field cannot be empty');
            }
            else if (field === "message") ;
            else if (!this.state[field].match(/^([a-zA-Z|\W]+)$/i)) {
                objValid = false;
                this.setState({ regex: this.setValid(this.state.regex, field, false) });
                obj.attr('data-tip', 'Only letters are allowed here');
            }
            else if (field === "email") {
                if (!this.state.email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)) {
                    objValid = false;
                    this.setState({ regex: this.setValid(this.state.regex, field, false) });
                    obj.attr('data-tip', 'Please enter a valid address');
                }
            }

            if (!objValid) {
                obj.css('border', 'solid 1px #F0AD4E');
                updatedValid[field] = false;
                if (!errFound) { errFound = true; obj.focus(); }
            }
            else if (field !== "affil") {
                obj.css('border', 'solid 1px #02cf32');
                obj.attr('data-tip', 'Looks good!');
                obj.attr('data-type', 'success');
            }
        });
        this.setState({ sendValid: updatedValid }); this.setState({ currValid: updatedValid });

        if (!errFound) {
            var self = this;
            $.ajax({
                data: {
                    'fname':    self.state.fname,
                    'lname':    self.state.lname,
                    'affil':    self.state.affil,
                    'email':    self.state.email,
                    'message':  self.state.message,
                    'confirm':  self.state.confirm,
                },
                type: 'POST',
                url: '/api/send.php',
                success: function(data) {
                    toast.success("Email sent", { autoClose: 2500 });
                    setTimeout(function(){ self.leaveForm(); }, 2000);
                },
                error: function(xhr, status, err) {
                    alert("\nWhoops!\n\nThe email could not be sent, try again later!\n\n" +
                          "Request status: [" + status + "]. Request message: [" + err.toString() + "]" +
                          "\n\nIf the issue continues get in touch at:\nmarekwebsite@viva-rumia.com\n");
                    toast.error("Email not sent", { autoClose: false });
                }
            });
            this.setState({ recaptcha: false });
        }
    }

    render() {
        return (
            <>
            <Prompt
                when={this.state.fname !== "" || this.state.lname !== ""  || this.state.affil !== ""
                      || this.state.email !== "" || this.state.message !== ""}
                message="Careful! Do you wish to close this form without sending?"
            />
            <BigCross/>

            <BackgroundImage size="40">
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

            <View style={[styles.pageView, Theme.content, { paddingHorizontal: this.state.width < MobileWidth ? '5%' : '20%' }]}>
                <View>
                    <View>
                        <p className="h5 mb-4 bright">Your information</p>
                    </View>
                    {/* row 1 - Name */}
                    <form className="needs-validation" id="email-form" action="">
                        <div className="form-row mb-4">
                            <div className="col mb-3 input-group">
                                <div className="input-group-prepend">
                                    <span className="input-group-text" id="fnamePre">First name</span>
                                </div>
                                <input type="text" className="form-control" id="fname" aria-describedby="fnamePre"
                                    placeholder="Your first name"
                                    value={this.state.fname}
                                    onChange={e => this.valueChange(e)}
                                    data-tip="This field cannot be empty" data-tip-disable={this.state.currValid.fname}
                                />
                            </div>
                            <div className="col mb-3 input-group">
                                <div className="input-group-prepend">
                                    <span className="input-group-text" id="lnamePre">Last name</span>
                                </div>
                                <input type="text" className="form-control" id="lname" aria-describedby="lnamePre"
                                    placeholder="Your last name"
                                    value={this.state.lname}
                                    onChange={e => this.valueChange(e)}
                                    data-tip="This field cannot be empty" data-tip-disable={this.state.currValid.lname}
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
                                        onChange={e => this.valueChange(e)}
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
                                <input type="text" className="form-control" id="email" aria-describedby="emailPre"
                                    placeholder="Your email address"
                                    value={this.state.email}
                                    onChange={e => this.valueChange(e)}
                                    data-tip="This field cannot be empty" data-tip-disable={this.state.currValid.email}
                                />
                            </div>
                            <div className="col-md-4 mb-3 send-confirm">
                                <label className="customcheck" style={{top: '7px', margin: '0 20px 0 20px'}}>
                                    Send me a confirmation email
                                    <input type="checkbox"
                                        checked={this.state.confirm}
                                        onChange={e => this.checkedChange(e)}
                                    />
                                    <span className="checkmark"></span>
                                </label>
                            </div>
                        </div>
                        {/* row 4 - Message */}
                        <div className="form-group col-md-12 mb-3 text-area">
                            <textarea className="form-control" id="message" rows="10"
                                placeholder="Type your message here"
                                value={this.state.message}
                                onChange={e => this.setState({ message: e.target.value })}
                                data-tip="This field cannot be empty" data-tip-disable={this.state.currValid.message}
                            />
                        </div>
                    </form>
                    <Breakline size={20} />

                    <View style={styles.footerBtns}>
                        <NavLink id="cancelBtn"
                            strict exact to={'/contact'} key={'/contact'}
                            style={{color: '#000', width: 'fit-content', textDecoration: 'none'}}
                        >
                            <TouchableOpacity
                                style={[btnStyle.touchOp, btnStyle.whiteBtn]}
                            >
                                <View style={btnStyle.btnContainer}>
                                    <Text style={btnStyle.btnText}>Close</Text>
                                </View>
                            </TouchableOpacity>
                        </NavLink>
                        <SubmitButton onClick={() => this.handleClick()} rcp={this.state.recaptcha} />
                    </View>
                </View>
            </View>
            <ReactTooltip type="warning" effect="solid" />
            <ReCAPTCHA
                ref={this.recaptchaRef}
                onChange={(e) => this.onReCaptchaChange(e, false)}
                sitekey="6LdvmcoUAAAAAGZNZ0SoaK_NJQHJoogOP6bZ5is3"
                size="invisible" theme="dark"
            />
            </>
        );
    }
}

class SubmitButton extends React.Component {
    render() {
        return (
            <TouchableOpacity
                style={[btnStyle.touchOp, btnStyle.greenBtn]}
                onClick={() => this.props.onClick()}
                data-place="bottom" data-disabled={this.props.rcp}
                data-tip="Click to submit" data-type="success"
            >
                <View id="submitOverlay" style={ btnStyle.btnContainer }>
                    <Text style={btnStyle.btnText}>Send</Text>
                </View>
            </TouchableOpacity>
    )};
}

const BigCross = (props) => {
    return (
        <>
        <NavLink
            strict exact to={'/contact'} key={'/contact'}
            style={{color: '#000', width: 'fit-content', textDecoration: 'none'}}
            data-tip="Cancel" data-type="light" data-effect="float"
        >
            <span style={{
                position: 'fixed',
                width: '35px', height: '35px',
                left: 'calc(5% + 60px)', top: '4%',
                zIndex: 500,
            }} >
                <span className="bm-burger-bars rotate1" style={{position:'absolute', height:'20%', left:0, right:0, top:0, opacity:1}}></span>
                <span className="bm-burger-bars rotate2" style={{position:'absolute', height:'20%', left:0, right:0, top:0, opacity:1}}></span>
        </span>
        </NavLink>
        </>
    );
}

const styles = StyleSheet.create({
    pageView: {
        paddingTop: '5vh',
        paddingBottom: '20vh',
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
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0)',
    },
    btnText: {
        fontFamily: '"Trebuchet MS", Helvetica, sans-serif',
        fontSize: 12,
        color: '#000',
        marginRight: 5,
    },
});
