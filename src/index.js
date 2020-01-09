import React from 'react';
import ReactDOM from 'react-dom';
import { StyleSheet } from 'react-native';

import App from './App';

export const MobileWidth = 700;
export const AccentColor = "#aa0505";
export const BgColor = "#111111";
export const Theme = StyleSheet.create({
    accent: {
        color: AccentColor,
    },
    content: { 
        backgroundColor: BgColor,
    },
});

ReactDOM.render(<App />, document.getElementById('root'));