import React from 'react';
import styled,{keyframes} from 'styled-components';
import {firstData} from '../data/data'

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
    position : relative;
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
const movie = keyframes `
    0{
        transform: rotate(5deg)
    }

    25%{
        transform: rotate(-5deg)
    }

`

const ImageCases = styled.img `
    position: absolute;
    animation: ${movie} 2s linear infinite;
`

const MidldleBox = () => {

    return(
        <Container>
            <Title>Team wide strategic thinking</Title>
            <BoxContainer>
                {firstData.map(item =>(
                    <Box>
                    <Image bg={item.textura} >
                        <ImageCases src={item.case}/> 
                    </Image>
                    <BoxText>
                        <TextTitle>{item.title}</TextTitle>
                        <TextParagraph>{item.paragraph}</TextParagraph>

                    </BoxText>
                </Box>
                ))}
            </BoxContainer>
        </Container>
    )
}

export default MidldleBox;