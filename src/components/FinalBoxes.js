import React from 'react';
import styled from 'styled-components';
import texturaCiano from '../assets/Textura-Ciano@2x.png'
import texturaRosa from '../assets/Textura-Rosa.png';
import texturaVermelha from '../assets/Textura-Vermelha.png';
import texturaLaranja from '../assets/Textura-Laranja.png';
import grafico1 from '../assets/Grafico-1.svg'
import grafico2 from '../assets/Grafico-2.svg'
import grafico3 from '../assets/Grafico-3.svg'

const Container = styled.section `
    display: flex;
    height: 55rem;
    flex-direction: column;
    justify-content: space-evenly;
    margin-bottom: 10rem;
    
`
const Title = styled.h2 `
    text-align: center;
    font-size: 2.5rem;
    font-weight: bold;
    color: #2F2F2F;
    margin: 0 auto;
    margin-bottom: 3rem;
    max-width: 1440px;
    height: 18rem;
    
`

const BoxesContainer = styled.div `
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    width: 98%;
    margin: 0 auto;
    max-width: 1440px;
`

const ColumnBox = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
    height: 20rem;
`


const BlueBox = styled.div `
    width: 15.6875rem;
    height: 14.0625rem;
    box-shadow: 0 2px 4px #00000029;
    border-radius: 3px;
    background-image: url(${texturaCiano});
    background-repeat: no-repeat;
    background-position: center center;
    box-shadow: 0px 2px 4px #00000029;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    position: absolute;
    top: -67%;
    left: -15%;
`

const BlueBoxText = styled.p`
    font-weight: bold;
    color:#2F2F2F;
    font-size: 1.75rem;
    width: 84%;
    padding-left: .7rem;
    padding-top: 1rem;
`

const BoxContents = styled.div `
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    z-index: 10;

`
const BoxImage = styled.div `
    width: 17.125rem ;
    height: 16rem;
    background-image: url(${props => props.bg}) ;
    background-repeat: no-repeat;
    background-size: cover;
    box-shadow: 0px 2px 4px #00000029;
    display: flex;
    justify-content: center;
    align-items: center;
   

`
const TextContender = styled.div `
    margin: 0 auto;
    width: 17.125rem;
    height: 10rem;
`

const Paragraph = styled.p `
    width: 80%;
    margin-top:2rem;
    color: #505050;
    line-height: 1.4;

`

const Img = styled.img `
    transform: scale(.9);
`

const FinalBoxes = () => {
    return (
        <Container>
            <Title>A step beyond visual collaboration</Title>
            <BoxesContainer>
                <ColumnBox>
                    <BlueBox>
                        <BlueBoxText>Empower teams with digital walls of thinking</BlueBoxText>
                    </BlueBox>
                    <BoxContents>
                        <BoxImage bg={texturaRosa} >
                            <Img src={grafico2} />
                        </BoxImage>
                        <TextContender>
                        <Paragraph>Strytegy is the brain of the organization. Evolve teams with journeys and share learning and knowledge with everyone. Hyper connect operations to strategy and lead intentional changes.</Paragraph>
                        </TextContender>
                    </BoxContents>
                </ColumnBox>
                <ColumnBox>
                    <BlueBox>
                        <BlueBoxText>Travel and discover in pratices journeys</BlueBoxText>
                    </BlueBox>
                    <BoxContents>
                        <BoxImage bg={texturaVermelha} >
                        <Img src={grafico1} />
                        </BoxImage>
                        <TextContender>
                        <Paragraph>More important than the end is the way. Build a journey with multimedia modeling features to draw and develop business models, solve the domain and complementary problems with world-class practices.</Paragraph>
                        </TextContender>
                    </BoxContents>
                </ColumnBox>
                <ColumnBox>
                    <BlueBox>
                        <BlueBoxText>Hyper connect knowledge to see beyond</BlueBoxText>
                    </BlueBox>
                    <BoxContents>
                        <BoxImage bg={texturaLaranja} >
                        <Img src={grafico3} />
                        </BoxImage>
                        <TextContender>
                        <Paragraph>Think like a honeycomb or with a whole hive. From a single concept or an entire network, see your organisation through the lens of collaboration and critical reflection, not command and control.</Paragraph>
                        </TextContender>
                    </BoxContents>
                </ColumnBox>
            </BoxesContainer>
        </Container>
    )
}

export default FinalBoxes;