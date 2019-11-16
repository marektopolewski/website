import React from 'react';

import Bio from '../components/Bio'
import Header from '../components/MyHeader';
import BackgroundImage from '../components/Background';
import { Theme } from '..';

export default class Home extends React.Component {
    render() {
        return (
            <>
            <BackgroundImage size="100" pos="60">
                <Header>Mar</Header>
                <Header style={Theme.accent}>e</Header>
                <Header>k Topol</Header>
                <Header style={Theme.accent}>e</Header>
                <Header>wski</Header>
            </BackgroundImage>
            <Bio />
            </>
        );
    }
}