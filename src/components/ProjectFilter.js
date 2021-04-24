import React from "react";
import { View, Text, StyleSheet } from 'react-native';
import Select from 'react-select'

import { AccentColor, MobileWidth } from '..';

import projects from '../data/projects.json'

function fetchCategories() {
    let categories = [];
    let i = 0;
    projects.forEach(project => {
        if (!categories.some(c => c.value === project.category)) {
            categories.push({
                    key: i++,
                    value: project.category,
                    label: project.category
            });
        }
    });
    return categories.sort((a,b) => a.value.localeCompare(b.value));
}

export default class ProjectFilter extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            width: window.innerWidth,
            options: fetchCategories()
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
                        menuPortalTarget={document.body}
                        styles={{ menuPortal: base => ({
                            ...base, fontSize: 'small', color: 'white', zIndex: 9999
                        }) }}
                        placeholder="Filter by subject.."
                        value={this.props.value} isMulti
                        onChange={this.props.onChange}
                        options={this.state.options}
                        theme={theme => ({  ...theme,
                            colors: {
                                ...theme.colors,
                                primary: 'black',
                                primary25: this.state.width < MobileWidth ? 'black' : AccentColor,
                                neutral0: 'black', neutral10: '#222', neutral80: 'white',
                            },
                        })}
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
        },
    });
}