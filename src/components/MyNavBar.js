import React from 'react';
import { NavLink } from 'react-router-dom';
import { slide as Menu } from 'react-burger-menu';
import { StyleSheet } from 'react-native';

import Text from './MyText';
 
export default class MyNavBar extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      menuOpen: false
    };
  };

  handleStateChange (state) {
    this.setState({menuOpen: state.isOpen}) ;
    this.toggleMenuButton(state); 
  };

  closeMenu() {
    this.setState({menuOpen: false})
  };

  toggleMenuButton(state) {
    if (state.isOpen) {
      document.getElementsByClassName("bm-burger-button")[0].style.display = "none";
    } else {
      document.getElementsByClassName("bm-burger-button")[0].style.display = "";
    }
  };

  render () {
    return (
      <Menu id="menu-nav-bar"
        pageWrapId={ "page-wrap" } 
        outerContainerId={ "outer-container" } 
        onStateChange={ (state) => this.handleStateChange(state) }
        isOpen={ this.state.menuOpen }
      >
        <NavLink 
          exact to={`/`}
          style={{color: 'white'}} activeStyle={{color: '#aa0505'}}
          onClick={() => this.closeMenu()}
        >
          <Text style={styles.navText} >Home</Text>
        </NavLink>
        <br />
        <NavLink 
          exact to={`/projects`}
          style={{color: 'white'}} activeStyle={{color: '#aa0505'}}
          onClick={() => this.closeMenu()}
        >
          <Text style={styles.navText} >Projects</Text>
        </NavLink>
      </Menu>
    );
  }
}

const styles = StyleSheet.create({
  navText: {
    color: 'black',
  },
});
