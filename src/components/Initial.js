import React from 'react';
import styled from 'styled-components';
import Button from './Button'
import videoImg from '../assets/video-strytegy-placeholder@2x.png';
import postIts from '../assets/Grafico-Fluxo_postits.svg'


const Container = styled.section `
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 50rem;
    background-image: url(${postIts});
    background-repeat: no-repeat;
    background-size:133vw; 
    background-position: center top; 


    @media(min-width: 1440px){
       height: 55vw;
       max-height: 100rem;
       background-size: 125vw ;  
   } 

   
`

const TitleContainer = styled.section `
    display: flex;
    width: 65%;
    max-width: 59rem;
    height: 30rem;
    margin:  auto;
    align-items: center; 
`

const Title = styled.h1 `
    font-size: 3.875rem;
    font-weight: bold;
    color: #2F2F2F;
    width: 80%;
    max-width: 65rem;
    margin-top: 3rem;
`
const PrincipalContender = styled.div `
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    width: 100%;
    height: 32rem;
    max-width: 1440px;
    position: relative;
    margin: auto;
`

const BtnContender = styled.div `
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 82%;
    margin-left: auto;
    align-self: flex-start;

    
`
const Paragraph = styled.p `
    font-size: 1.0625rem;
    color: #505050;
    width: 35%;
  
`
const Buttons = styled.div `
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 34%;
    height: 8rem;
    

`

const ImgContender = styled.div `
    width: 28.125rem;
    height: 28.125rem;
    background-image: url(${videoImg});
    border-radius: 50%;
    background-size: 200%;
    background-repeat: no-repeat;
    background-position: 18% 4%;
    position: absolute;
    right: 12%;
    top: -24%;
    
    
`

const Initial = () => {
    return(
        <Container>
            <TitleContainer>
                <Title>Agile rooms to unlock collective intelligence</Title>
            </TitleContainer>
            <PrincipalContender>
                <BtnContender>
                    <Paragraph>The online collaborative whiteboarding platform to bring teams together, anytime, anywhere.</Paragraph>
                    <Buttons>
                    <Button width='10.125rem' height='3.5rem' btnText='Create Account' create />
                    <Button width='10.125rem' height='3.5rem' btnText='Watch Video' watch />
                    </Buttons>
                </BtnContender>
                <ImgContender />
            </PrincipalContender>
        </Container>
    )
}

export default Initial;