import React from 'react';
import { NavLink } from 'react-router-dom';
import { slide as Menu } from 'react-burger-menu';
import { StyleSheet } from 'react-native';
import { animateScroll as scroll } from 'react-scroll'


import Text from './MyText';
import { AccentColor } from '..';
 
export default class MyNavBar extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      menuOpen: false
    };
    this.accentColor = AccentColor;
  };

  handleStateChange (state) {
    this.setState({menuOpen: state.isOpen}) ;
    this.toggleMenuButton(state);
  };

  closeMenu() {
    this.setState({menuOpen: false});
    scroll.scrollToTop();
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
          strict exact to={'/'} key={'/'}
          style={{color: 'white'}} activeStyle={{color: this.accentColor}}
          onClick={() => this.closeMenu()}
        >
          <Text style={styles.navText} >Home</Text>
        </NavLink>
        <br />
        <NavLink 
          strict exact to={'/projects'} key={'/projects'}
          style={{color: 'white'}} activeStyle={{color: this.accentColor}}
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
