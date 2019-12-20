import React from 'react';
import { Image, TouchableOpacity } from 'react-native';
import { NavLink } from 'react-router-dom';
import { animateScroll as scroll } from 'react-scroll'

import Text from '../components/MyText';
import Breakline from '../components/Breakline';

class EmailButton extends React.Component {
    constuctor() {
        this.routeChange = this.routeChange.bind(this);
    }

    navigate() {
        scroll.scrollToTop();
    }

    render() {
        return (
            <>
            <NavLink 
                strict exact to={'/contact/send'} key={'/contact/send'}
                onClick={() => this.navigate()}
            >
                <TouchableOpacity
                    onPress={this.routeChange}
                    data-tip="Send email"
                >
                    <Image
                        style={{width: 40, height: 40}}
                        source={require('../assets/gmail.png')}
                    />
                </TouchableOpacity>
            </NavLink>
            <Breakline size={5} />
            <Text>Email</Text>
            </>
        );
    }
}
export default EmailButton;
