import React from 'react';
import styled from 'styled-components';
import texturaRosa from '../assets/Textura-Rosa.png';
import texturaVermelha from '../assets/Textura-Vermelha.png';
import texturaCiano from '../assets/Textura-Ciano.png';
import texturaLaranja from '../assets/Textura-Laranja.png';
import case1 from '../assets/Imagem-Cases-1.png'
import case2 from '../assets/Imagem-Cases-2.png'
import case3 from '../assets/Imagem-Cases-3.png'
import case4 from '../assets/Imagem-Cases-4.png'

const Container = styled.section ` 
    display: flex;
    flex-direction: column;
    justify-content: center;
`

const Title = styled.h2 `
    text-align: center;
    font-size: 2.5rem;
    font-weight: bold;
    color: #2F2F2F;
    margin: 0 auto;
    margin-bottom: 3rem;
    max-width: 1440px;
    
`
const BoxContainer = styled.div `
    display: flex;
    max-width: 1440px;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    height: 40rem;
    margin: 0 auto;
 
`
const Box = styled.div `
    display: flex;
    justify-content: space-between;
    width: 40%;
    margin-left: 1.7rem;


`

const Image = styled.div `
    background-image: url(${props => props.bg});
    width: 14.6875rem;
    height: 13.713125rem;
    background-size: cover;
    background-repeat: no-repeat;  
`
const BoxText = styled.div `
    width: 45%;
    height: 12rem ;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: flex-start;


`

const TextTitle = styled.h3 `
    width: 94.5%;
    font-size: 1.8rem;
    color: #2F2F2F;
`

const TextParagraph = styled.p `
    width: 75%;
    font-size: 1rem;
    color: #505050;
    
`
const ImageCases = styled.img `

`

const MidldleBox = () => {

    return(
        <Container>
            <Title>Team wide strategic thinking</Title>
            <BoxContainer>
                <Box>
                    <Image bg={texturaRosa} >
                        <ImageCases src={case1}/> 
                    </Image>
                    <BoxText>
                        <TextTitle>Launch a new business</TextTitle>
                        <TextParagraph>Turn ideas into a clear action plan, validate, learn and grow.</TextParagraph>

                    </BoxText>
                </Box>
                <Box>
                    <Image bg={texturaVermelha} >
                        <ImageCases src={case2}/> 
                    </Image>
                    <BoxText>
                    <TextTitle>Develop a digital product</TextTitle>
                        <TextParagraph>Map and prioritize features to build a product people love.</TextParagraph>
                    </BoxText>
                </Box>
                <Box>
                    <Image bg={texturaCiano} >
                        <ImageCases src={case3}/> 
                    </Image>
                    <BoxText>
                    <TextTitle>Understand your customers</TextTitle>
                        <TextParagraph>Understand your customers</TextParagraph>
                    </BoxText>
                </Box>
                <Box>
                    <Image bg={texturaLaranja} >
                        <ImageCases src={case4}/> 
                    </Image>
                    <BoxText>
                    <TextTitle>Lead and empower people</TextTitle>
                        <TextParagraph>Listen and co create a desirable (successful) future.</TextParagraph>
                    </BoxText>
                </Box>
               
            </BoxContainer>
        </Container>
    )
}

export default MidldleBox;