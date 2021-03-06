import React from 'react';
import { NavLink } from 'react-router-dom';
import { StyleSheet, View, Image } from 'react-native';
import { animateScroll as scroll } from 'react-scroll'
import { FaGithub, FaHotTub, FaPhoneSquare, FaHome, FaUserFriends } from 'react-icons/fa';

import Text from './MyText';
import Dropdown from './MyDropDown';
import { AccentColor, MobileWidth } from '..';
 
export default class MyNavBar extends React.Component {

  constructor(props) {
    super(props);
    this.state = { width: window.innerWidth, iconSize: 0.05 * window.innerHeight };
  }

  componentDidMount() { window.addEventListener('resize', this.handleResize) }
  componentWillUnmount() {  window.removeEventListener('resize', this.handleResize) }
  handleResize = () => {
    this.setState({ width: window.innerWidth });
    this.setState({ iconSize: 0.05 * window.innerHeight });
  };

  navItems = [
    {to: 'Home', icon:<FaHome/>, iconLarge:<FaHome size="1.2em"/>},
    {to: "Projects", icon: <FaGithub/>, iconLarge:<FaGithub size="1.2em"/>},
    {to: "Experience", icon: <FaUserFriends/>, iconLarge:<FaUserFriends size="1.2em"/>},
    {to: "Hobbies", icon: <FaHotTub/>, iconLarge:<FaHotTub size="1.2em"/>},
    {to: "Contact", icon: <FaPhoneSquare/>, iconLarge:<FaPhoneSquare size="1.2em"/>},
  ];

  render () {
    return (
      <View style={[styles.wrapper, {height: "8%" }]}>
        <View style={styles.logo}>
          <NavLink strict exact to={'/'} key={'/'} onClick={() => scroll.scrollToTop()}>
            <Image
              style={{width: this.state.iconSize , height: this.state.iconSize}}
              source={require('../assets/icon.png')}
            />
          </NavLink>
        </View>
        <View style={styles.items}>
          { this.state.width >= MobileWidth ?
            <>{ this.navItems.map(item => <Item key={item.to} to={item.to} icon={item.icon} />) }</>
            :
            <Dropdown options={this.navItems} />
          }
        </View>
      </View>
    );
  }
}

const Item = (props) => {
  var inactiveCol = '#AAA'
  var activeCol = AccentColor;
  var url = props.to === "Home" ? '/' : '/' + props.to.toLowerCase();
  var isActive = (path, match, location) => !!(match || path === location.pathname);

  return (
    <View style={{width:'20%', maxWidth:'200px', minWidth:'100px', justifyContent:'center', alignItems:'center'}}>
      <NavLink 
        strict exact to={url} key={url}
        style={{textDecoration: 'none', color: inactiveCol}} activeStyle={{color: activeCol}}
        isActive={isActive.bind(this, url)}
        onClick={() => scroll.scrollToTop()}
      >
        <View style={styles.navItem}>
          { props.icon }
          { props.to !== undefined ?
            <Text style={styles.navText}>
              <Text style={{color: 'inherit', fontSize: '100%'}}>{props.to.substr(0,1).toUpperCase()}</Text>
              <Text style={{color: 'inherit', fontSize: '80%'}}>{props.to.substr(1).toUpperCase()}</Text>
            </Text>
          : <></> }
        </View>
      </NavLink>
    </View>
  );
}

const styles = StyleSheet.create({
  navItem: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  navText: {
    color: 'inherit',
    fontSize: '100%',
    marginTop: '5px',
  },
  wrapper: {
    flex: 1, flexDirection: 'row',
    position: 'fixed', zIndex: 2,
    width: '100%',
    backgroundImage: "linear-gradient(to right, #222, #000)"

  },
  logo: {
    flex: 1, flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginLeft: '5%',
  },
  items: {
    flex: 1, flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginRight: '5%'
  },
});
