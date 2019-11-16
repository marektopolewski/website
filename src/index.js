import React from 'react';
import ReactDOM from 'react-dom';
import { StyleSheet } from 'react-native';

import App from './App';

export const AccentColor = "#aa0505";
export const Theme = StyleSheet.create({
    accent:{
        color: AccentColor,
    },
});

ReactDOM.render(<App />, document.getElementById('root'));