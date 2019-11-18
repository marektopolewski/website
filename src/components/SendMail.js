import React from 'react';
import { TouchableOpacity, Image } from 'react-native';

import { ToastContainer, toast, Flip } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Text from './MyText';
import Breakline from './Breakline';

const sendMail = (email) => {
    const link = document.createElement('a');
    link.href = 'mailto:'+email;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    toast.info(email, {autoClose: 3000, transition: Flip});
    toast.info("Email copied to clipboard.", {autoClose: 2000, transition: Flip});
}

export default class SendMail extends React.Component {
    render() {
        return (
            <>
            <TouchableOpacity
                onPress={() => sendMail("marek.topolewski@gmail.com")}
                data-tip="Copy to clipboard"
            >
                <Image
                    style={{width: 40, height: 40}}
                    source={require('../assets/gmail.png')}
                />
            </TouchableOpacity>
            <Breakline size={5} />
            <Text>Email</Text>

            <ToastContainer />
            </>
        );
    }
}
