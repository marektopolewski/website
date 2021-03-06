import React from 'react';
import { View, Text, StyleSheet, Animated } from 'react-native';
import Select from 'react-select'

import ProjectItem from '../components/ProjectItem'
import BackgroundImage from '../components/Background'
import Header from '../components/MyHeader';
import Breakline from '../components/Breakline';
import { Theme, AccentColor, MobileWidth } from '..';

export default class Projects extends React.Component {

    constructor(props) {
        super(props);
        this.state = { 
            selected: { ml: true, ai: true,
                        db: true, wb: true,
                        df: true,           },
            projOpacity: new Animated.Value(1),
        }
    }

    options = [
        {value: 'ml', label:'Machine Learning'},
        {value: 'ai', label:'Artificial Intelligence'},
        {value: 'db', label:'Databases'},
        {value: 'wb', label:'Web Development'},
        {value: 'df', label:'Digital Forensics'},
    ]

    onSelectChange = (selectedOption) => {
        var temp = {};
        var isEmpty = selectedOption === null || selectedOption.length === 0;
        for( var k in this.state.selected) {
            temp[[k]] = isEmpty || selectedOption.map(({ value }) => value).includes(k);
        }
        Animated.timing(this.state.projOpacity, { toValue:0, duration:1 }).start();
        this.setState({selected: temp});
        Animated.sequence([
            Animated.delay(200),
            Animated.timing(this.state.projOpacity, { toValue:1, duration:200 }),
        ]).start();
    }

    filterProject = (key) => {
        if (this.state.selectedOption === null || this.state.selectedOption === undefined)
            return true;
        this.state.selectedOption.forEach(option => {
            if (option.value === key) return true;
        });
        return false;
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
                <ProjectSelect
                    value={this.state.value}
                    onChange={(e) => this.onSelectChange(e)}
                    options={this.options.sort((a,b) => a.value.localeCompare(b.value))}
                />
                <Animated.View style={{ opacity: this.state.projOpacity }}>
                <ProjectItem
                    title="React Native with Support for Web"
                    tags={["React_Native", "Web", "JS", "CSS"]}
                    img="react.jpg"
                    url="https://github.com/marektopolewski/website"
                    filtered={this.state.selected["wb"]}
                >
                    Instead of using a ready template from Wordpress, I decided to take up the challenge and 
                    learn React to create my own website from "scratch".<br/>
                    <Breakline size={25}/>
                    The quotes were added because the beauty of ReactJS is that a variety of modules exist online 
                    that provide complex components, which promotes reusability and rapid development. However, 
                    due to the use of React Native instead of plain React, many of those components do not function 
                    as expected, hence, were substituted using custom objects.
                </ProjectItem>
                <ProjectItem 
                    title="Trap States in Monte Carlo Tree Search"
                    tags={["AI", "Game_Theory", "Monte_Carlo", "Java", "C++"]}
                    img="thesis.jpg"
                    url="https://github.com/marektopolewski/Trap-States-MCTS"
                    filtered={this.state.selected["ai"]}
                >
                    The third-year project researched under the supervision of Paolo Turrini for my Bachelor's 
                    thesis. The dissertation consists of a final report and an implementation of a C++ Chess 
                    engine utilising the developed algorithm. <br/>
                    <Breakline size={25}/>
                    The subject of thesis revolves around the Game Theory and agents based on MCTS. Despite 
                    algorihtms exceptional performance in games like Go, the problem of 
                    expanding trap states outweights benefits of MCTS in domains such as Chess. The aim 
                    of the project is to address this challenge to allow further advancements in the MCTS emerging 
                    as an optimal algorithm capable of General Game Playing.
                </ProjectItem>
                <ProjectItem
                    title="XOR Problem in Neural Networks"
                    tags={["Neural_Network", "MLP", "Python"]}
                    img="xor.jpg"
                    url="https://github.com/marektopolewski/mlp-xor"
                    filtered={this.state.selected["ml"]}
                >
                    Neural networks are currently one of the fastest-growing areas of computer intelligence. They 
                    are also arguably our best attempt to model the human brain thus far. This project attempts to 
                    provide a theoretical and empirical analysis of a problem that early neural networks were 
                    incapable of overcoming - simulation of the XOR logic gate.<br/>
                    <Breakline size={25}/>
                    A common solution to this issue is the multilayer perceptron. This project implements and 
                    evaluates this neural network under a variety of parameters to determine their influence over 
                    the model’s performance.
                </ProjectItem>
                <ProjectItem
                    title="User Interface Evaluation and Design"
                    tags={["UX", "Social_Informatics", "Design", "ReactJS"]}
                    img="eveg.jpg"
                    url="https://github.com/marektopolewski/evegPublicVersion"
                    filtered={this.state.selected["wb"]}
                >
                    Neural networks are currently one of the fastest-growing areas of computer intelligence. They 
                    are also arguably our best attempt to model the human brain thus far. This project attempts to 
                    provide a theoretical and empirical analysis of a problem that early neural networks were 
                    incapable of overcoming - simulation of the XOR logic gate.<br/>
                    <Breakline size={25}/>
                    A common solution to this issue is the multilayer perceptron. This project implements and 
                    evaluates this neural network under a variety of parameters to determine their influence over 
                    the model’s performance.
                </ProjectItem>
                <ProjectItem
                    title="PLAsTiCC Kaggle Competition"
                    tags={["Machine_Learning", "Keras_CNN", "Random_Forest", "Python"]}
                    img="kaggle.jpg"
                    url="https://github.com/marektopolewski/plasticc-kaggle"
                    filtered={this.state.selected["ml"]}
                >
                    The aim of the project is to analyse a finctional dataset generated by two space probes that 
                    collected data on extra-terrestrial life forms. Given complete samples gathered by probe A, 
                    the task consisted of predicting missing information from probe B. <br/>
                    <Breakline size={25}/>
                    To achieve that, a number of machine learning models has been analysed and tested, the most 
                    accurate of which will be discussed in the report along with feature engineering techniques 
                    employed.
                </ProjectItem>
                <ProjectItem
                    title="Hadoop &amp; Hive: Text Analytics"
                    tags={["Databases", "MapReduce", "Hadoop", "Hive", "Java"]}
                    img="adb.jpg"
                    url="https://github.com/marektopolewski/hadoop-hive"
                    filtered={this.state.selected["db"]}
                >
                    Big data is becoming an increasingly important aspect of IT. Handling huge volumes of 
                    information requires distributed and parallel systems that ensure integrity and efficiency 
                    of queries.<br/>
                    <Breakline size={26}/>
                    The implementation of MapReduce over Hadoop takes advantage of the HDFS which enables 
                    the distribution of inexpensive program code to the data and not the opposite like in 
                    the classical quering frameworks. Higher-level systems such as Apache Hive were created 
                    to allow the user to build the desired query without writing lower-level code and follows 
                    a SQL-like syntax instead.<br/>
                    <Breakline size={26}/>
                    The project implements queries to solve non-trivial problems on large volumes of data
                    using both approaches and measures their performance.
                </ProjectItem>
                <ProjectItem
                    title="Fictional Space Probe Data Classification"
                    tags={["Machine_Learning", "Sklearn", "Regularisers", "Python"]}
                    img="plants-animals.jpg"
                    url="https://github.com/marektopolewski/probe-prediction"
                    filtered={this.state.selected["ml"]}
                >
                    The aim of the project is to analyse a finctional dataset generated by two space probes that 
                    collected data on extra-terrestrial life forms. Given complete samples gathered by probe A, 
                    the task consisted of predicting missing information from probe B. <br/>
                    <Breakline size={25}/>
                    To achieve that, a number of machine learning models has been analysed and tested, the most 
                    accurate of which will be discussed in the report along with feature engineering techniques 
                    employed.
                </ProjectItem>
                <ProjectItem
                    title="Mobile Robotics: Lego NTX"
                    tags={["Robotics", "Mapping", "Motion_Planning", "lejOS", "Java"]}
                    img="lego-ntx.jpg"
                    url="https://github.com/marektopolewski/robotics-lego-ntx"
                    filtered={this.state.selected["ai"]}
                >
                    Mobile robots are expected to move freely within the environment and interpret it which 
                    significantly increases their potential and efficiency. To navigate safely, they are required 
                    to recognize landmarks and objects as well as avoid obstacles.<br/>
                    <Breakline size={25}/>
                    This project provides an implementation of an autonomous mobile robot capable of mapping its
                    environment comprised of a static grid with random obastacles. It should be able to navigate it 
                    and find the shortest path between selected points by solely relaying on its sensory data. 
                </ProjectItem>
                <ProjectItem
                    title="Image and Video Forensics"
                    tags={["Digital_Forensics", "Img_Enhancement", "Vid_Encoding", "Matlab"]}
                    img="digital-forensics.jpg"
                    url="https://github.com/marektopolewski/digital-forensics"
                    filtered={this.state.selected["df"]}
                >
                    Digital forensics is the area of Computer Science which uses of scientific methods to collect
                    probative facts from digital evidences. For example, unique device noise known as Senor Pattern
                    Noise can be used for source device identification of a potential suspect.<br/>
                    <Breakline size={25}/>
                    This repository includes my expoloration of only a subset of topics around the subject and focuses
                    predominantly on image analysis and video analysis. Digital forensics is becoming an increasingly
                    important aspect of IT due to the rise of fake content, hence, my keen interest in it.
                </ProjectItem>
                <ProjectItem
                    title="SMS Sender Microservice"
                    tags={["Microservices", "Network", "Python"]}
                    img="sms-service.jpg"
                    url="https://github.com/marektopolewski/mniam-sms"
                    filtered={this.state.selected["wb"]}
                >
                    A small microservice that allows to fulfil SMS requests from a remote server. The script continually
                    polls the server via a GET request to fetch a list of text messages to send. Once new entries obtained,
                    the program propagates each message using a previously established session to the router and the modem
                    to handle the request. If successfully sent, a POST request is sent to the remote server to notify which
                    requests can be removed from the queue.<br/>
                    <Breakline size={25}/>
                    The main aim of this program is to ensure continuous execution, hence, error handling is of great
                    importance. Moreover, it had to operate solely locally due to a limited server availablity which is why
                    a polling mechanism had to be introduced.
                </ProjectItem>
                <ProjectItem
                    title="mniam!"
                    tags={["Angular", "ExpressJS", "NodeJS", "TypeScript"]}
                    img="angular-mniam.jpg"
                    url=""
                    filtered={this.state.selected["wb"]}
                >
                    A cross-platform application for placing online restaurant orders. The program comprises of an Angular
                    front-end and a NodeJS back-end with MS SQL as the database. A single instance of the app handles only
                    one restaurant's orders, however, it is designed to be easily deployed in a new company.<br/>
                    <Breakline size={25}/>
                    The application supports such features as: authentication, basket, multiple concurrent orders, tracking,
                    SMS verification, integration with on-site restaurant staff's program and more. Unfortunately, the code
                    is not available due to its continuous development and possible production prospects.
                </ProjectItem>
                <ProjectItem
                    title="Simple trading server"
                    tags={["C++", "Networking", "Trading", "FinTech"]}
                    img="no-preview.jpg"
                    url="https://github.com/marektopolewski/trading-server"
                    filtered={this.state.selected["wb"]}
                >
                    A simple risk management trading server written in C++. The server supports multiple concurrent clients
                    that are connected via a TCP socket. No external libraries are utilised.<br/>
                    <Breakline size={25}/>
                    The server handles concurrency in a naive fashion, i.e.: the open connections are iterated for new
                    incoming requrests from clients. The requests are recorded in an OrderStore and for each quote, a response
                    is sent to the stakeholder regarding the trade safety.
                </ProjectItem>
                <ProjectItem
                    title="How Old Is Your Brain?"
                    tags={["Machine_Learning", "CNN", "Medicine", "Imaging", "Regression"]}
                    img="brain-age.jpg"
                    url="https://github.com/marektopolewski/how-old-is-your-brain"
                    filtered={this.state.selected["ml"]}
                >
                    The task is to design an ML model that can accurately predict the age of
                    a person based on their brain MRI scan. An application of such a network
                    can be detecting discrepancy between person's age and their brain age which
                    could be indicative of abnormalities in cognitive aging.<br/>
                    <Breakline size={25}/>
                    The developed model is a 3D convolutional neural network (CNN) with a custom
                    architecture based on the VGG-net implemented in PyTorch. After 30 epochs of
                    training, the CNN is able to predict the age with an average error of 5.18 years.
                    The MRI scans and visualisations were supplied by Imeprial College London.
                </ProjectItem>
                <ProjectItem
                    title="Humour Analysis in News Headlines"
                    tags={["Machine_Learning", "NLP", "Semantic_Analysis", "BERT", "BiLSTM"]}
                    img="humour-nlp.jpg"
                    url="https://github.com/marektopolewski/icl-nlp-humour"
                    filtered={this.state.selected["ml"]}
                >
                    The task is to design an ML model that can accurately predict the age of
                    a person based on their brain MRI scan. An application of such a network
                    can be detecting discrepancy between person's age and their brain age which
                    could be indicative of abnormalities in cognitive aging.<br/>
                    <Breakline size={25}/>
                    The developed model is a 3D convolutional neural network (CNN) with a custom
                    architecture based on the VGG-net implemented in PyTorch. After 30 epochs of
                    training, the CNN is able to predict the age with an average error of 5.18 years.
                    The MRI scans and visualisations were supplied by Imeprial College London.
                </ProjectItem>
                </Animated.View>
            </View>
            </>
        );
    }
}

class ProjectSelect extends React.Component {

    constructor(props) {
        super(props);
        this.state = { width: window.innerWidth };
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
                        placeholder="Filter by subject.."
                        value={this.props.value} isMulti
                        onChange={this.props.onChange}
                        options={this.props.options}
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
                <Breakline size={this.state.width < MobileWidth ? 50 : 120}/>
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

const styles = StyleSheet.create({
    pageView: {
        paddingTop: '5vh',
        paddingBottom: '10vh',
        paddingHorizontal: '10vw',
    },
});