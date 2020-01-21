import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { Table } from 'react-bootstrap';
import { FiPlusSquare, FiMinusCircle } from 'react-icons/fi';

import ExperienceItem from '../components/ExperienceItem'
import BackgroundImage from '../components/Background'
import Header from '../components/MyHeader';
import Breakline from '../components/Breakline';
import { Theme, MobileWidth } from '..';

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

                <Header style={{fontSize: 40}}>Professional Experience</Header>
                <Breakline size={50}/>

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

                <Breakline size={25}/>
                <Header style={{fontSize:40}}>Academic Experience</Header>
                <Breakline size={50}/>

                <ExperienceItem
                    company="University of Warwick" title="BSc Computer Science"
                    from="Oct 2016" to="Jul 2019"
                    img="warwick.jpg"
                >
                    Graduated with overall classification: First Class Honours, and completed the following modules:<br/>
                    <UniGradeTable/>
                </ExperienceItem>
                <ExperienceItem
                    company="III LO Gdynia" title="Maths-Physics-IT"
                    from="Sep 2013" to="Jul 2016"
                    img="iiilo.jpg"
                >
                    Graduated from a class of Mathematics-Physics profile with an individual study path in Information Technology.
                    Awarded a high-school diploma with a distinction and recevied the following final exam marks:<br/>
                    <HighGradeTable/>
                </ExperienceItem>
            </View>
            </>
        );
    }
}

class HighGradeTable extends React.Component {
    data = [
        ['Information Technology', 'Extended', '100', '100'],
        ['English', 'Extended', '96', '98'],
        ['Physics', 'Extended', '85', '98'],
        ['Mathematics', 'Extended', '74', '94'],
        ['Mathematics', 'Standard', '100', '100'],
        ['English', 'Standard', '100', '100'],
        ['Polish', 'Standard', '78', '88'],
    ];
    render() {
        return (
            <View style={{width:'100%'}}>
                <Table striped bordered style={{
                    backgroundColor: '#FFFFFF08',
                    fontSize: '80%',
                    textAlign: 'left',
                    color: 'inherit',
                    borderTop: 'white solid',
                    borderBottom: 'white solid',
                    marginTop: 10,
                }}>
                    <thead>
                        <tr style={{backgroundColor:"#FFFFFF15", color:'#FFF'}}>
                            <th>Subject</th>
                            <th>Level</th>
                            <th style={{textAlign:'center'}}>Score</th>
                            <th style={{textAlign:'center'}}>Percentile</th>
                        </tr>
                    </thead>
                    <tbody>
                    { this.data.map((val,key) => { return (
                        <tr key={key}>
                            <td style={{padding:8}}>{val[0]}</td>
                            <td style={{padding:8}}>{val[1]}</td>
                            <td style={{padding:8, textAlign:'center'}}>{val[2]}%</td>
                            <td style={{padding:8, textAlign:'center'}}>{val[3]}.</td>
                        </tr>
                     )}) }
                    </tbody>
                </Table>
            </View>
        );
    }
}

class UniGradeTable extends React.Component {
    constructor(props) {
        super(props);
        this.state = { shown: 1, width: window.innerWidth };
    }

    componentDidMount() { window.addEventListener('resize', this.handleResize) }
    componentWillUnmount() {  window.removeEventListener('resize', this.handleResize) }
    handleResize = () => { this.setState({ width: window.innerWidth }); };

    showMore = () => {
        if (this.state.shown > 2) return;
        this.setState({shown: this.state.shown+1});
    }

    showLess = () => {
        if (this.state.shown < 1) return;
        this.setState({shown: this.state.shown-1});
    }

    data = {
        y1: [
            ['CS118', 'Programming for Computer Scientists', '1'],
            ['CS126', 'Design of Information Structures', '1'],
            ['CS133', 'Professional Skills', '1'],
            ['CS139', 'Web Development Technologies', '1'],
            ['CS140', 'Computer Security', '1'],
            ['CS130', 'Mathematics for Computer Scientists 1', '1'],
            ['CS131', 'Mathematics for Computer Scientists 2', '2.1'],
            ['CS132', 'Computer Organisation & Architecture', '2.1'],
        ],
        y2: [
            ['CS241', 'Operating Systems and Computer Networks', '1'],
            ['CS255', 'Artificial Intelligence', '1'],
            ['CS258', 'Database Systems', '1'],
            ['CS259', 'Formal Languages', '1'],
            ['CS260', 'Algorithms', '1'],
            ['CS261', 'Software Engineering', '1'],
            ['CS262', 'Logic and Verification', '1'],
            ['CS256', 'Functional Programming', '2.1'],
        ],
        y3: [
            ['CS310', 'Third Year Project', '1'],
            ['CS331', 'Neural Computing', '1'],
            ['CS342', 'Machine Learning', '1'],
            ['CS346', 'Advanced Databases', '1'],
            ['CS348', 'Social Informatics', '1'],
            ['CS355', 'Digital Forensics', '1'],
            ['CS313', 'Mobile Robotics', '2.1'],
        ]
    };
    render() {
        return (
            <View style={{width:'100%', flexDirection: this.state.width<MobileWidth ? 'column-reverse' : 'row'}}>
                <Table striped bordered style={{
                    backgroundColor: '#FFFFFF08',
                    fontSize: '80%',
                    textAlign: 'left',
                    color: 'inherit',
                    borderTop: 'white solid',
                    borderBottom: 'white solid',
                    marginTop: 10,
                }}>
                    <thead>
                        <tr style={{backgroundColor:"#FFFFFF15", color:'#FFF'}}>
                            <th>Year</th>
                            <th>Code</th>
                            <th>Course</th>
                            <th style={{textAlign:'center'}}>Grade</th>
                        </tr>
                    </thead>
                    <tbody>
                        { this.state.shown !== 0 ? <></> :
                            <tr><td colSpan="4" style={{textAlign:'center'}}>Use <FiPlusSquare/> to add more rows</td></tr>
                        }
                        { this.state.shown > 0 ? this.data.y3.map((val,key) => { return (
                            <tr key={key} style={ key === 0 ? {borderTop:'white solid'} : {}}>
                                { key === 0 ? <td style={{padding:8}} rowSpan={this.data.y3.length}>3rd</td> : undefined}
                                <td style={{padding:8}}>{val[0]}</td>
                                <td style={{padding:8}}>{val[1]}</td>
                                <td style={{padding:8, textAlign:'center'}}>{val[2]}</td>
                            </tr>
                        )}) : <></> }
                        { this.state.shown > 1 ? this.data.y2.map((val,key) => { return (
                            <tr key={key} style={ key === 0 ? {borderTop:'white solid'} : {}}>
                                { key === 0 ? <td style={{padding:8}} rowSpan={this.data.y2.length}>2nd</td> : undefined}
                                <td style={{padding:8}}>{val[0]}</td>
                                <td style={{padding:8}}>{val[1]}</td>
                                <td style={{padding:8, textAlign:'center'}}>{val[2]}</td>
                            </tr>
                        )}) : <></> }
                        { this.state.shown > 2 ? this.data.y1.map((val,key) => { return (
                            <tr key={key} style={key === 0 ? {borderTop:'white solid'} : {}}>
                                { key === 0 ? <td style={{padding:8}} rowSpan={this.data.y1.length}>1st</td> : undefined}
                                <td style={{padding:8}}>{val[0]}</td>
                                <td style={{padding:8}}>{val[1]}</td>
                                <td style={{padding:8, textAlign:'center'}}>{val[2]}</td>
                            </tr>
                        )}) : <></> }
                    </tbody>
                </Table>

                <View style={[ this.state.width<MobileWidth
                    ? {flexDirection: 'row', alignItems: 'flex-end', justifyContent: 'flex-end'}
                    : {flexDirection: 'column', paddingLeft: 20, alignItems: 'flex-start', justifyContent: 'flex-start'},
                ]}>
                    <TouchableOpacity onPress={() => this.showMore()} style={btnStyles.button}>
                        <View style={btnStyles.content}>
                            <FiPlusSquare size="1.5em" color="black"/>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => this.showLess()} style={[btnStyles.button, this.state.width<MobileWidth ? {marginLeft:10} : {marginTop:10} ]}>
                        <View style={btnStyles.content}>
                            <FiMinusCircle size="1.5em" color="black"/>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const btnStyles = StyleSheet.create({
    button: {
        width: 40,
        height: 35,
        borderRadius: 5,
        backgroundColor: '#DDD',
        shadowColor: '#999',
        shadowOpacity: 0.6,
        shadowRadius: 4,
    },
    content: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        fontFamily: '"Trebuchet MS", Helvetica, sans-serif',
        fontSize: '70%',
        marginRight: 5,
    },
});

const styles = StyleSheet.create({
    pageView: {
        paddingVertical: '20vh',
        paddingHorizontal: '10vw',
    },
});