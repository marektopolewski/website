import React from 'react';
import { View, StyleSheet } from 'react-native';

import ProjectItem from '../components/ProjectItem'
import BackgroundImage from '../components/Background'
import Header from '../components/MyHeader';
import Breakline from '../components/Breakline';
import { Theme } from '..';

export default class Home extends React.Component {
    render() {
        return (
            <>
            <BackgroundImage size="50">
                <Header style={{textAlign: 'center'}}>
                    Proj<Header style={Theme.accent}>e</Header>cts
                </Header>
            </BackgroundImage>
            <View style={[styles.pageView, Theme.content]}>
                <ProjectItem
                    title="React Native with Support for Web"
                    tags={["React_Native", "Web", "JS", "CSS"]}
                    img="react.png"
                    url="https://github.com/marektopolewski/website"
                >
                    Instead of using a ready template from Wordpress, I decided to take up the challenge and 
                    learn React to create my own website from "scratch".<br/>
                    <Breakline size={25}/>
                    The quotes were added because the beauty of ReactJS is that a variety of modules exist online 
                    that provide complex components, which promotes reusability and rapid development. However, 
                    due to the use of React Native instead of plain React, many of those components do not function 
                    as expected, hence, were substituted using custom objects.
                </ProjectItem>
                <Breakline size={150}/>
                <ProjectItem 
                    title="Trap States in Monte Carlo Tree Search"
                    tags={["AI", "Game_Theory", "Monte_Carlo", "Java", "C++"]}
                    img="thesis.png"
                    url="https://github.com/marektopolewski/Trap-States-MCTS"
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
                <Breakline size={150}/>
                <ProjectItem
                    title="XOR Problem in Neural Networks"
                    tags={["Neural_Network", "MLP", "Python"]}
                    img="xor.png"
                    url="https://github.com/marektopolewski/mlp-xor"
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
                <Breakline size={150}/>
                <ProjectItem
                    title="User Interface Evaluation and Design"
                    tags={["UX", "Social_Informatics", "Design", "ReactJS"]}
                    img="eveg.png"
                    url="https://github.com/marektopolewski/evegPublicVersion"
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
                <Breakline size={150}/>
                <ProjectItem
                    title="PLAsTiCC Kaggle Competition"
                    tags={["Machine_Learning", "Keras_CNN", "Random_Forest", "Python"]}
                    img="kaggle.png"
                    url="https://github.com/marektopolewski/plasticc-kaggle"
                >
                    The aim of the project is to analyse a finctional dataset generated by two space probes that 
                    collected data on extra-terrestrial life forms. Given complete samples gathered by probe A, 
                    the task consisted of predicting missing information from probe B. <br/>
                    <Breakline size={25}/>
                    To achieve that, a number of machine learning models has been analysed and tested, the most 
                    accurate of which will be discussed in the report along with feature engineering techniques 
                    employed.
                </ProjectItem>
                <Breakline size={150}/>
                <ProjectItem
                    title="Hadoop &amp; Hive: Text Analytics"
                    tags={["Databases", "MapReduce", "Hadoop", "Hive", "Java"]}
                    img="adb.png"
                    url="https://github.com/marektopolewski/hadoop-hive"
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
                <Breakline size={150}/>
                <ProjectItem
                    title="Fictional Space Probe Data Classification"
                    tags={["Machine_Learning", "Sklearn", "Regularisers", "Python"]}
                    img="plants-animals.png"
                    url="https://github.com/marektopolewski/probe-prediction"
                >
                    The aim of the project is to analyse a finctional dataset generated by two space probes that 
                    collected data on extra-terrestrial life forms. Given complete samples gathered by probe A, 
                    the task consisted of predicting missing information from probe B. <br/>
                    <Breakline size={25}/>
                    To achieve that, a number of machine learning models has been analysed and tested, the most 
                    accurate of which will be discussed in the report along with feature engineering techniques 
                    employed.
                </ProjectItem>
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