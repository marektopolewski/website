import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import BackgroundImage from '../components/Background'
import Header from '../components/MyHeader';
import Breakline from '../components/Breakline';
import { Theme } from '..';
import HobbyItem from '../components/HobbyItem';

export default class Hobbies extends React.Component {
    render() {
        return (
            <>
            <BackgroundImage size="50">
                <Header style={{textAlign: 'center'}}>
                    Hobbi<Header style={Theme.accent}>e</Header>s
                </Header>
            </BackgroundImage>

            <View style={[styles.pageView, Theme.content]}>
                <HobbyItem
                    title="Odyssey of the Mind"
                    img1="ootm_1.jpg" img2="ootm_2.jpg"
                    url="https://www.odysseyofthemind.com/" urlImg="odyssey"
                >
                    My interest in Computer Science and Science, in general, was sparked when I signed up to an
                    international competition for teams of talented youth named ‘Odyssey of the Mind’. The program
                    aims to provide creative problem-solving opportunities and build complex mechanical devices.<br/>
                    <Breakline size={30}/>
                    The competition can be separated into <u>two challanges</u>:<br/>
                    <View style={{flex:1, width:'100%', flexDirection:'row', paddingVertical:'20px'}}>
                        <View style={{flex:1, paddingHorizontal:'15px'}}>
                            <Header style={{fontSize:'inherit', textAlign:'center'}}>Long-term</Header>
                            <Text style={{marginTop: '10px', fontSize: 'small'}}>
                                Team spends months developling their solution to one of the 5 problems which require
                                brainstorming, artwork, set and technical design, sketch-writing and more. Their efforts
                                must be contained within an 8-minute performance.
                            </Text>
                        </View>
                        <View style={{flex:1, paddingHorizontal:'15px'}}>
                            <Header style={{fontSize:'inherit', textAlign:'center'}}>Spontaneuos</Header> 
                            <Text style={{marginTop: '10px', fontSize: 'small'}}>
                                As opposed to long-term, those are tasks solved 'at the spot'. The problem is not revealed
                                until the team walks into the room and have as little as 5 minutes to prove their skills
                                and spontaneous creativity to the judges.
                            </Text>
                        </View>
                    </View>
                    <br/>
                    For either of these, my favourite aspects were always the technical tasks. Not only was I able
                    to reinforce my critical thinking, but also create with the team something new out of nothing.<br/>
                    <Breakline size={30}/>
                    The joint effort  and experience of working together for as long as 7 years has led our team to
                    becoming national champions thrice which enabled us to represent Poland in World Finals achieving
                    8th, 7th and 4th place. To this day I remain involved in the competition as a judge and a mentor
                    in technical aspects to younger teams.
                </HobbyItem>

                <Breakline size={120}/>
                
                <HobbyItem
                    title="Floorball"
                    img1="floorball_1.jpg" img2="warwick_floorball.png"
                    url="https://www.facebook.com/WarwickFloorballClub/" urlImg="warwick_floorball"
                >
                    Floorball is a type of indoor floor hockey with five players a side and a goalkeeper in each team.
                    The sport originated from Sweden and is known for its fast pace, precision, strength, and teamwork.
                    <br/><Breakline size={30}/>
                    My journey with the sport began in primary school during our PE classes. We formed a school team and
                    attended local tournaments but with little success. Nonetheless, I remained enthusiastic about floorball
                    and trained at different clubs until highschool. Presented with an opportunity to rejoin with the sport
                    at the university, I signed up without a second thought.<br/>
                    <Breakline size={30}/>
                    However, being part of the university club is not only representing Warwick at the <Link text="UKFF" href="https://ukfloorball.com/"/> tournaments
                    but also bonding with other people that have an equal passion for the sport. The club is run by a
                    number of executives whose purpose is to ensure that members are active during both training sessions
                    as well as social events and that the group remains inclusive and appealing to new joiners.<br/>
                    <Breakline size={30}/>
                    As a club secretary, I was responsible for maintaining and redesigning the website as well as resolving
                    technical issues but most importantly, I was able to appreciate the effort required to run a sports club.
                    Despite being an executive member for just one year, I was a member my whole time at uni and I continue
                    to attend annual alumni events hosted by the team.<br/>
                    <Breakline size={50}/>
                    Visit the <i>International Floorball Federation</i> website and learn more at: <Link text="www.floorball.sport" href="https://floorball.sport/"/>
                </HobbyItem>
            </View>
            </>
        );
    }
}

const Link = (props) => {
    return (
        <a rel="noopener noreferrer" target="_blank" href={ props.href } >
            { props.text }
        </a>
    );
}

const styles = StyleSheet.create({
    pageView: {
        paddingVertical: '19vh',
        paddingHorizontal: '10vw',
    },
});