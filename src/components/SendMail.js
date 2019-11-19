import React from 'react';
import { TouchableOpacity, Image } from 'react-native';

import { toast, Flip } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { MdEmail } from "react-icons/md"; 
import { css } from 'glamor';

import Text from './MyText';
import Breakline from './Breakline';

const copy = (str) => {
    let EmailToast = (props) => { return (
        <><MdEmail style={{ marginRight:10 }} />{props.text}</>
    )};
    navigator.clipboard.writeText(str)
    .then(() => {
        toast.info(<EmailToast text={str}/>, {
            autoClose: 3000,
            transition: Flip,
            className: css({
                background: "#111 !important",
                border: "#AAA 0.5px solid",
            }),
        });
        toast.info(<EmailToast text="Emailed copied to clipboard"/>, {
            autoClose: 2500,
            transition: Flip,
            className: css({
                background: "#111 !important",
                border: "#AAA 0.5px solid",
            }),
        });
    })
    .catch(err => {
        alert("Sorry:(\n\nEmail could not be copied, please do so manually.\n\n" + str);
    });
}

const send = (email) => {
    const link = document.createElement('a');
    link.href = 'mailto:'+email;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

const handleMailClick = (email) => {
    send(email);
    copy(email);
}

export default class SendMail extends React.Component {
    render() {
        return (
            <>
            <TouchableOpacity
                onPress={() => handleMailClick("marek.topolewski@gmail.com")}
                data-tip="Copy to clipboard"
            >
                <Image
                    style={{width: 40, height: 40}}
                    source={require('../assets/gmail.png')}
                />
            </TouchableOpacity>
            <Breakline size={5} />
            <Text>Email</Text>
            </>
        );
    }
}
