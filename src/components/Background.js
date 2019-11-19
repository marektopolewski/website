import React from 'react';
import { View, StyleSheet } from 'react-native';

export default class BackgroundImage extends React.Component {
  constructor(props) {
    super(props);
    this.height = this.props.size + 'vh';
  };
  
  getPos(size) {
    return Math.round(size / 3);
  }

  render() {
    return (
        <View style={{ marginBottom: this.height }}>
          <div className="bg" style={{height: this.height}}>
            <View className="title" style={styles.title}>
              {this.props.children}
            </View>
          </div>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  title: {
    flex: 1,
    height: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
})
