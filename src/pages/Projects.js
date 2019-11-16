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
            <View style={styles.pageView}>
                <ProjectItem 
                    title="Trap States in Monte Carlo Tree Search"
                    img="thesis.png"
                    url="https://github.com/marektopolewski/mlp-xor"
                >
                    The third-year project researched under the supervision of Paolo Turrini for my Bachelor's 
                    thesis. The dissertation consists of a final report and an implementation of
                    a C++ Chess engine utilising developed algorithm. 
                    <br/><br/>
                    The subject of thesis revolves around the Game Theory and agents based on MCTS. Despite 
                    algorihtms exceptional performance in games like Go, the problem of 
                    expanding trap states outweights benefits of MCTS in domains such as Chess. The aim 
                    of the project is to address this challenge to allow further advancements in the MCTS emerging 
                    as an optimal algorithm capable of General Game Playing.
                </ProjectItem>
                <Breakline size={150}/>
                <ProjectItem
                    title="XOR Problem in Neural Networks"
                    img="xor.png"
                    url="https://github.com/marektopolewski/mlp-xor"
                >
                    Neural networks are currently one of the fastest-growing areas of computer intelligence. They 
                    are also arguably our best attempt to model the human brain thus far. This project attempts to 
                    provide a theoretical and empirical analysis of a problem that early neural networks were 
                    incapable of overcoming - simulation of the XOR logic gate.
                    <br/><br/>
                    A common solution to this issue is the multilayer perceptron. This project implements and 
                    evaluates this neural network under a variety of parameters to determine their influence over 
                    the model’s performance.
                </ProjectItem>
                <Breakline size={150}/>
                <ProjectItem
                    title="User Interface Evaluation and Design"
                    img="eveg.png"
                    url="https://github.com/marektopolewski/evegPublicVersion"
                >
                    Neural networks are currently one of the fastest-growing areas of computer intelligence. They 
                    are also arguably our best attempt to model the human brain thus far. This project attempts to 
                    provide a theoretical and empirical analysis of a problem that early neural networks were 
                    incapable of overcoming - simulation of the XOR logic gate.
                    <br/><br/>
                    A common solution to this issue is the multilayer perceptron. This project implements and 
                    evaluates this neural network under a variety of parameters to determine their influence over 
                    the model’s performance.
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