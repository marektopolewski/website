import React from 'react';
import { StyleSheet } from 'react-native';

import Header from './MyHeader';
import '../index.css';

export default function BackgroundImage() {
  return (
      <div className="bg">
        <div className="title">
          <Header>Mar</Header>
          <Header style={styles.accent}>e</Header>
          <Header>k Topol</Header>
          <Header style={styles.accent}>e</Header>
          <Header>wski</Header>
        </div>
      </div>
  );
}

const styles = StyleSheet.create({
  accent: {
      color: '#aa0505',
  },
});
