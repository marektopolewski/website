import React from "react";
import { NavLink } from 'react-router-dom';
import { View, TouchableOpacity, StyleSheet } from "react-native";
import { animateScroll as scroll } from 'react-scroll'
import onClickOutside from "react-onclickoutside";
import { FaBars } from 'react-icons/fa';

import Text from './MyText';
import { AccentColor } from '..';

class MyDropDown extends React.Component {
    constructor(props) {
      super(props);
      this.state = { dropdownShow: false };
    }
  
    handleClickOutside(e) { console.log("click outside"); this.setState({dropdownShow: false}); }
    toggleDropdown() { this.setState({dropdownShow: !this.state.dropdownShow}) }
  
    handleClick() {
      this.setState({dropdownShow: false});
      scroll.scrollToTop();
    }
  
    render() {
      var isActive = (path, match, location) => !!(match || path === location.pathname);
      var getUrl = (name) => name === "Home" ? '/' : '/' + name.toLowerCase()
      return (
        <View>
          <TouchableOpacity onPress={() => this.toggleDropdown()}>
            <FaBars color="rgb(170, 170, 170)" size='3em'/>
          </TouchableOpacity>
          { this.state.dropdownShow ?
            <View style={this.dropdownStyles.navList}>
              { this.props.options.map(item => { return(
                  <View key={item.to} style={{ justifyContent:'center', alignItems:'flex-start'}}>
                    <NavLink
                      strict exact to={getUrl(item.to)} key={getUrl(item.to)}
                      style={{textDecoration: 'none', color: '#AAA'}} activeStyle={{color: AccentColor}}
                      isActive={isActive.bind(this, getUrl(item.to))}
                      onClick={(e) => this.handleClick(e)}
                    >
                      <View style={this.dropdownStyles.navItem}>
                        { item.iconLarge }
                        <Text style={this.dropdownStyles.navText}>{item.to}</Text>
                      </View>
                    </NavLink>
                  </View>
                )})
              }
            </View>
            :
            <></>
          }
        </View>
      );
    }
  
    dropdownStyles = StyleSheet.create({
      navList: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'fixed',
        top: '10%', right: 0,
        width: '70%',
        backgroundColor: 'black'
      },
      navItem: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        height: '90px'
      },
      navText: {
        marginLeft: '10px',
        color: 'inherit',
        fontSize: '40px',
        marginTop: '5px',
      },
    });
}

export default onClickOutside(MyDropDown);