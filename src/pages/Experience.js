import React from 'react';
import { View, StyleSheet } from 'react-native';

import ExperienceItem from '../components/ExperienceItem'
import BackgroundImage from '../components/Background'
import Header from '../components/MyHeader';
import Breakline from '../components/Breakline';
import { Theme } from '..';

export default class Projects extends React.Component {
    render() {
        return (
            <>
            <BackgroundImage size="50">
                <Header style={{textAlign: 'center'}}>
                    Exp<Header style={Theme.accent}>e</Header>rience
                </Header>
            </BackgroundImage>
            <View style={[styles.pageView, Theme.content]}>
                <ExperienceItem
                    company="Cisco" title="Graduate Software Engineer"
                    from="Aug 2019" to=""
                    tags={["C++", "Qt", "QML", "Python"]}
                    img="cisco.jpg"
                >
                    Member of a SCRUM team developing e-Whiteboard software for Webex teleconferencing.
                    Closely worked with the User Experience team to facilitate user requirements.<br/>
                    <Breakline size={25}/>
                    Improved low-level programming skills and understanding of hardware and computer networks.
                    Focused on software performance and parallelisation while asserting correctness and simplicity.
                    Collaborated with multiple teams to maximise performance and ensure quality end product.
                </ExperienceItem>
                <ExperienceItem
                    company="Goldman Sachs" title="Summer Technology Intern"
                    from="Jul 2018" to="Sep 2018"
                    tags={["Java", "JavaScript", "WebDev", "Python", "FinTech"]}
                    img="goldman.jpg"
                >
                    Developed a troubleshooting program allowing the support team to automate repeatable tasks.
                    Provided a web-based GUI using React and metrics utilising Python data processing libraries. 
                    Additionally, created a monitoring system to notify stakeholders via email in case of emergency.<br/>
                    <Breakline size={25}/>
                    Operated in an agile team following the XP model and learned the importance of communication
                    within the team as well as good coding practices. Worked under high pressure and adapted well
                    to the challenging new environment by swiftly becoming competent at internal programming languages.
                </ExperienceItem>
                <ExperienceItem
                    company="WarwickSU" title="Floorball Club Secretary"
                    from="Apr 2017" to="Sep 2018"
                    tags={["JavaScript", "HTML", "PHP", "CSS", "WordPress"]}
                    img="warwicksu.jpg"
                >
                    Club's website maintenance and other IT services, working in WordPress.
                    Updating are redesigning the website using HTML5, CSS, and plug-ins.<br/>
                    <Breakline size={25}/>
                    Working as a group and meeting other executive staff's requirements.
                    Learned leadership skills and responsibility as a member of the executive team.
                </ExperienceItem>
                <ExperienceItem
                    company="VIVA Rumia" title="Junior Developer"
                    from="Sep 2016" to="Sep 2017"
                    tags={["C#", "JavaScript", "MVVM", "Azure"]}
                    img="viva.jpg"
                >
                    Assisted in creation of an application for placing and analysing orders in a restaurant.
                    First exposure to real-life Computer Science and development patterns such as Factories 
                    and Model-View-ViewModel.<br/>
                    <Breakline size={25}/>
                    Sparked interest in IT, instantiated abstract thus far statistical and computing methods.
                </ExperienceItem>
            </View>
            </>
        );
    }
}

const styles = StyleSheet.create({
    pageView: {
        paddingVertical: '20vh',
        paddingHorizontal: '10vw',
    },
});