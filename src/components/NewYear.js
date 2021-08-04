import React from 'react';
import styled from 'styled-components';
import Button from './Button';

const Container = styled.section `
    
    
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

const Contender = styled.div `
    display: flex;
    width: 70%;
    justify-content: space-between;
    margin: 0 auto;
    
`

const GrayBox = styled.div `
    width: 37rem ;
    height: 23.625rem;
    background-color: #E6E6E6; 
`

const SecondBox = styled.div `
    display: flex;
    flex-direction: column;
    height: 20.625rem;
    justify-content: center;
    margin: auto;
    padding-left: 2rem;

`

const TextTitle = styled.h3 `
    width: 70%;
    font-size: 1.8rem;
    color: #2F2F2F;
    height: 31%;
    
`

const TextParagraph = styled.p `
    width: 55%;
    font-size: 1rem;
    color: #505050;
    height: 31%;
    text-align: left;
`

const NewYear = () => {
    return(
        <Container>
            <Title>Create your new year resolution</Title>
            <Contender>
                <GrayBox>

                </GrayBox>
                <SecondBox>
                    <TextTitle>Agile rooms for collective inteligence</TextTitle>
                    <TextParagraph>A outra linha fina vai aqui, bla bla bla whiskas sache, bla bla bla whiskas sache</TextParagraph>
                    <Button width='8.125rem' height='3.5rem' btnText='Start now' />
                </SecondBox>
            </Contender>
        </Container>
    )
}

export default NewYear;