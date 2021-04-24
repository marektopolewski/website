import React from "react";
import { View, Text, StyleSheet } from 'react-native';
import Select, { components } from 'react-select'
import { FaSearch } from 'react-icons/fa';

import { AccentColor, MobileWidth } from '..';

import projects from '../data/projects.json'

function fetchKeywords() {
    let keywords = [];
    projects.forEach(project => {
        let i = 0;
        project.tags.forEach(tag => {
            if (!keywords.some(c => c.value === tag)) {
                keywords.push({
                    key: i++,
                    value: tag,
                    label: tag
                });
            }
        })
    });
    return keywords.sort((a,b) => a.value.localeCompare(b.value));
}

const DropdownIndicator = (props) => {
    return (
      <components.DropdownIndicator {...props}>
        <FaSearch />
      </components.DropdownIndicator>
    );
  };
  

export default class ProjectSearch extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            width: window.innerWidth,
            selectInput: "",
            options: fetchKeywords()
        };
    }

    componentDidMount() { window.addEventListener('resize', this.handleResize) }
    componentWillUnmount() {  window.removeEventListener('resize', this.handleResize) }
    handleResize = () => { this.setState({ width: window.innerWidth }); };

    render() {
        return (
            <View style={this.styles.outer}>
            <View style={{ minWidth: '300px', width: '50%' }}>
                <Text style={{color: 'white'}}>
                    <Select
                        placeholder="Filter by keyword.."
                        value={this.props.value}
                        options={this.state.options}

                        isClearable={true}
                        menuIsOpen={this.state.selectInput.length > 1}
                        menuPortalTarget={document.body}
                        components={{ DropdownIndicator }}
                        styles={{ menuPortal: base => ({
                            ...base, fontSize: 'small', color: 'white', zIndex: 9999
                        }) }}
                        theme={theme => ({  ...theme,
                            colors: {
                                ...theme.colors,
                                primary: 'black',
                                primary25: this.state.width < MobileWidth ? 'black' : AccentColor,
                                neutral0: 'black', neutral10: '#222', neutral80: 'white',
                            },
                        })}

                        onChange={this.props.onChange}
                        onInputChange={(inp) => this.setState({selectInput: inp})}
                    />
                </Text>
            </View>
            </View>
        )
    }

    styles = StyleSheet.create({
        outer: {
            flex: 1,
            flexDirection: 'row',
            alignContent: 'center',
            justifyContent: 'center',
            zIndex: 10,
        }
    });
}
