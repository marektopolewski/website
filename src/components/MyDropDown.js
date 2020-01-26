import React from "react";
import { NavLink } from 'react-router-dom';
import { View, TouchableOpacity, StyleSheet, Animated } from "react-native";
import { animateScroll as scroll } from 'react-scroll';
import onClickOutside from "react-onclickoutside";
import { FaBars } from 'react-icons/fa';

import Text from './MyText';
import { AccentColor } from '..';

class MyDropDown extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        dropdownShow: false,
        dropDownOp: new Animated.Value(0),
      };
    }

    delay = 300;
    handleClickOutside() {
      Animated.timing(this.state.dropDownOp, {toValue:0, duration:this.delay}).start(
        () => this.setState({dropdownShow: false})
      );
    }

    toggleDropdown() {
      this.setState({dropdownShow: !this.state.dropdownShow});
      Animated.timing(this.state.dropDownOp, {toValue:this.state.dropdownShow?0:1 , duration:this.delay}).start();
    }
  
    handleClick() {
      this.handleClickOutside();
      scroll.scrollToTop();
    }
  
    render() {
      var isActive = (path, match, location) => !!(match || path === location.pathname);
      var getUrl = (name) => name === "Home" ? '/' : '/' + name.toLowerCase()
      return (
        <View>
          <TouchableOpacity onPress={() => this.toggleDropdown()}>
            <FaBars color="rgb(170, 170, 170)" size='1.5em'/>
          </TouchableOpacity>
          { this.state.dropdownShow ?
            <Animated.View style={[this.dropdownStyles.navList, {opacity: this.state.dropDownOp}]}>
              { this.props.options.map(item => { return(
                <View key={item.to} style={{ minWidth:'50%', justifyContent:'center', alignItems:'center'}}>
                  <NavLink
                    strict exact to={getUrl(item.to)} key={getUrl(item.to)}
                    style={{textDecoration: 'none', color: '#AAA'}} activeStyle={{color: AccentColor}}
                    isActive={isActive.bind(this, getUrl(item.to))}
                    onClick={(e) => this.handleClick()}
                  >
                    <View style={this.dropdownStyles.navItem}>
                      <View style={{flex:1, flexDirection:'row', justifyContent: 'flex-end'}}>
                        { item.iconLarge }
                      </View>
                      <View style={{flex:3, flexDirection:'row'}}>
                        <Text style={this.dropdownStyles.navText}>
                          <Text style={{color: 'inherit', fontSize: '100%'}}>{item.to.substr(0,1).toUpperCase()}</Text>
                          <Text style={{color: 'inherit', fontSize: '80%'}}>{item.to.substr(1).toUpperCase()}</Text>
                        </Text>
                      </View>
                    </View>
                  </NavLink>
                </View>
              )})}
            </Animated.View>
            :
            <></>
          }
        </View>
      );
    }
  
    dropdownStyles = StyleSheet.create({
      navList: {
        flex: 1,
        flexDirection: 'row', flexWrap: 'wrap',
        justifyContent: 'flex-end', alignItems: 'flex-end',
        paddingVertical: 20,
        position: 'fixed',
        top: '8%', right: 0,
        backgroundColor: 'rgba(0,0,0,0.9)'
      },
      navItem: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width:'50%', minWidth: '170px',
        height: '60px'
      },
      navText: {
        marginLeft: '10px',
        color: 'inherit',
      },
    });
}

export default onClickOutside(MyDropDown);