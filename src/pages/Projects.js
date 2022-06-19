import React from 'react';
import { View, Text, StyleSheet, Animated } from 'react-native';

import ProjectItem from '../components/ProjectItem'
import ProjectSearch from '../components/ProjectSearch'
import ProjectFilter from '../components/ProjectFilter'
import BackgroundImage from '../components/Background'
import Header from '../components/MyHeader';
import Breakline from '../components/Breakline';
import { MobileWidth, Theme } from '..';

import projects from '../data/projects.json'

export default class Projects extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            projOpacity: new Animated.Value(1),
            valueSearch: null,
            valueFilter: null,
        }
    }

    componentDidMount() { window.addEventListener('resize', this.handleResize) }
    componentWillUnmount() {  window.removeEventListener('resize', this.handleResize) }
    handleResize = () => { this.setState({ width: window.innerWidth }); };

    onFilterChange = (filterOption) => {
        Animated.timing(this.state.projOpacity, { toValue:0, duration:1 }).start();
        if ((filterOption !== null) && filterOption.length === 0)
            filterOption = null;
        this.setState({valueFilter: filterOption});
        Animated.sequence([
            Animated.delay(200),
            Animated.timing(this.state.projOpacity, { toValue:1, duration:200 }),
        ]).start();
    }

    onSearchChange = (searchOption) => {
        Animated.timing(this.state.projOpacity, { toValue:0, duration:1 }).start();
        if ((searchOption !== null) && searchOption.length === 0)
            searchOption = null;
        this.setState({valueSearch: searchOption});
        Animated.sequence([
            Animated.delay(200),
            Animated.timing(this.state.projOpacity, { toValue:1, duration:200 }),
        ]).start();
    }

    isVisible = (project) => {
        const category = project.category
        const tags = project.tags
        if (this.state.valueFilter === null && this.state.valueSearch === null)
            return true;

        if (this.state.valueFilter === null)
            return tags.some(tag => tag === this.state.valueSearch.value);
        if (this.state.valueSearch === null)
            return this.state.valueFilter.some(x => x.value === category);

        return tags.some(tag => tag === this.state.valueSearch)
            && this.state.valueFilter.some(x => x.value === category);
    }

    render() {
        return (
            <>
            <BackgroundImage size="50">
                <Header style={{textAlign: 'center'}}>
                    Proj<Header style={Theme.accent}>e</Header>cts
                </Header>
            </BackgroundImage>
            <View style={[styles.pageView, Theme.content]}>
                <ProjectSearch
                    value={this.state.valueSearch}
                    onChange={(e) => this.onSearchChange(e)}
                />
                <Breakline size={30}/>
                <ProjectFilter
                    value={this.state.valueFilter}
                    onChange={(e) => this.onFilterChange(e)}
                />
                <Breakline size={this.state.width < MobileWidth ? 50 : 120}/>
                <Animated.View style={{ opacity: this.state.projOpacity }}>
                {
                    (this.state.valueFilter === null && this.state.valueSearch === null) || projects.some(p => this.isVisible(p))
                    ?
                        projects.reverse().map(project => { return (
                            <ProjectItem
                                key={project.key}
                                title={project.title}
                                tags={project.tags}
                                img={project.imgPath}
                                url={project.srcUrl}
                                filtered={this.isVisible(project)}
                            >
                                {
                                    project.content.map((para, idx) => { return (
                                        <View key={idx}>
                                        <Text style={{margin: 0}}>{ para }</Text>
                                        <Breakline size={10}/>
                                        </View>
                                    )})
                                }
                            </ProjectItem>
                        )})
                    :
                        <View style={{width:'100%'}}>
                            <Text style={{color: 'white', textAlign: 'center'}}>No results matching your query</Text>
                        </View>
                }
                </Animated.View>
            </View>
            </>
        );
    }
}

const styles = StyleSheet.create({
    pageView: {
        paddingTop: '5vh',
        paddingBottom: '10vh',
        paddingHorizontal: '10vw',
    },
});